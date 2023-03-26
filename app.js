// How to setup

const express = require("express")
const quotes = require("./quote.json")
const PORT = 4000

console.log(quotes.length)
// Create a server
const app = express();

//Start server
app.listen(PORT,()=>
{
    console.log(`the server has started at PORT ${PORT}`)
})


const getRandomIndex=()=>{
    return Math.floor(Math.random()*quotes.length)
}

// Adding Route

app.get("/",(req,res)=>{
    res.send("hello from server")
})

app.get("/quotes",(req,res)=>{
    res.send(`quotes ${quotes[getRandomIndex()].quote}`)}
)

console.log ("Hello World")