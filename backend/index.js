const express = require('express')
const cors = require('cors')
const Mongoose = require('mongoose')
const CategoryRouter = require('./Router/CategoryRouter')
const ColorRouter = require('./Router/ColorRouter')


const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static("public"))

app.use("/category", CategoryRouter)
app.use("/color" , ColorRouter)

Mongoose.connect(
    "mongodb://localhost:27017",
    {
        dbName: "ishop"
    }
).then(
    () => {
        app.listen(
            5000,
            () => console.log("Server has been started")
        )
    }
)
    .catch(
        () => {
            console.log("Unable to started server")
        }
    )