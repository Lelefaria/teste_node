import express from "express"
import mainRoutes from './routes/index'

const server = express()

server.use(mainRoutes)

server.listen(3000,()=>{
console.log("server rodando")
})




