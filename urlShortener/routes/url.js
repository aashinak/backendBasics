import express from 'express'
import { handleAnalyticsRequest, handleGenerateNewShortUrl, handleRedirectRequest } from '../controllers/url.js'

const router = express.Router()

router.post('/', handleGenerateNewShortUrl)
// router.get('/:shortId', handleRedirectRequest)
router.get('/analytics/:shortId', handleAnalyticsRequest)

export default router
 
