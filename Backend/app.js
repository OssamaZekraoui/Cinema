const express = require("express")
const app = express()


//----------------api----------------

app.use(express.json())
const films = require("./routes/filmRoutes")
app.use("/api/v1",films)

const film = require("./routes/filmRoutes")
app.use("api/v1",film)

const allfilms = require("./routes/filmRoutes")
app.use("api/v1",allfilms)



module.exports = app