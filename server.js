import express from "express"

const app = express()

app.use(express.json())




let teaData =[]
let nextId =1;

app.post("/teas", (req, res) =>{
    let {name, price} = req.body
    let result= {
        id:nextId++, 
        name,
        price
    }
    teaData.push(result)
    res.send(result)
    })

    app.get("/teas", (req, res) =>{
        res.status(200).send(teaData)
    })
    app.get("/teas/:id", (req, res) =>{
        let id = parseInt(req.params.id)
        let tea = teaData.find(tea => tea.id === id)
        res.send(tea)
    })

app.listen(3000)