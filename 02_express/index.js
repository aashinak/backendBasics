import express from 'express'

const app = express()

const port = 3000


// do research
app.use(express.json())  

app.get('/', (req, res) => {
    res.send("Hello from Aashin the senior developer!!")
})

app.get('/ice-tea', (req, res) => {
    res.send("Do you ever had an ice tea ?? anyway i dont 😁")
})



// teas section
let teas = []
let teaId = 1

// add a tea
app.post('/teas', (req, res) => {
    const {name, price} = req.body
    const tea = { id: teaId++, name, price }
    teas.push(tea)
    res.status(201).send(tea)
})

// list all teas
app.get("/teas" , (req, res) => {
    res.status(200).send(teas)
})

// get particular tea
app.get("/teas/:id" , (req, res) => {

   const reqTea = teas.find( t => t.id === parseInt(req.params.id))
   if( !reqTea ) {
    return res.status(404).send("Oopss , No tea found !!")
   }
   res.status(200).send(reqTea)
   
})

// update tea
app.put('/teas/:id', (req, res) => {
    const tea = teas.find( t => t.id === parseInt(req.params.id) )
    if(!tea){
        res.status(404).send("Ooops invalid tea update")
    }
    const {name, price} = req.body
    tea.name = name
    tea.price = price
    res.status(200).send(tea)
})

// delete tea

app.delete("/teas/:id", (req, res) => {
    const index = teas.findIndex( t => t.id === parseInt(req.params.id))
    if (index === -1) {
        res.status(404).send("Oops invalid tea") 
    }

    teas.splice(index, 1)

    res.status(200).send("deleted")


})







app.listen(port, () => {
    console.log(`Server running at : ${port}...`);
})