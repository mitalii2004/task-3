require("dotenv").config(); // Ensure dotenv is required at the top

const express = require("express")
const app = express()
const PORT = 8080
require("./dbconnection").connectiondb()

const routers = require("./routers/userRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users",routers)

app.listen(PORT, () => {
    console.log(`server is listening on port${PORT}`)
})