var express = require('express');
var axios = require('axios');
const cors = require('cors')
const connectToDatabase = require("./db/dbConection")
const CookieParser = require("cookie-parser")
require("dotenv").config()

const userRoutes = require("./routes/user")
const analysisRoutes = require("./routes/analysis")

const port = process.env.PORT

var app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(CookieParser())

app.use("/api/users", userRoutes)
app.use("/api/analysis", analysisRoutes)

// Start server on 3000 port
app.listen(port, function () {
    connectToDatabase()
    console.log(`server is running on port ${port}`);
});