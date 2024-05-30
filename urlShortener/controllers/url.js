import URL from '../models/url.js'
import {nanoid} from 'nanoid'

const handleGenerateNewShortUrl = async (req, res) => {
    const body = req.body
    if(!body.url) return res.status(400).json({ error: "url is required"})
    
    const shortID = nanoid(8)
    URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: []
    })

    return res.status(201).json({ id: shortID })
}

const handleRedirectRequest = async (req, res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate(
        {shortId},
        {$push: {
            visitHistory: 
            {timestamp: Date.now()}
        }}
    )
   return res.redirect(entry.redirectUrl)
}


const handleAnalyticsRequest = async (req, res) => {
    const shortId = req.params.shortId
    const result = await URL.findOne({shortId})
    res.json({
        totalClick: result.visitHistory.length,
        analytics: result.visitHistory
    })
}

export { handleGenerateNewShortUrl,
         handleRedirectRequest,
         handleAnalyticsRequest
       } 