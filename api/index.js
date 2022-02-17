// The Database is MongoDB

// you are free to choose your own structure for the contollers and routes.
// Ideally, what you need are the following:
// 1. Controllers
// 2. Routes
// 3. Models - Already provided

// As for the routes, you will need:
// 1. A route to get teh vendor
// 2. A route to get all the customers
// 3. A route to create orders
// 4. A route to get all the orders
// 5. A route to send out emails

// Additional Info:
// For the distance calculation, you can do it on the client side or the server side, the choice is yours.
// You have the creative freedom to choose your own email service that you can use to send out emails. (Just dont complicate it too much, you have a time constraint)

// import express
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
app.use(cors())
// parse requests of content-type - application/json
app.use(bodyParser.json())
//Body parser
app.use(express.json())

//connect to db

require("./config/db")

const port = 8080

const customer = require("./routes/customers")
const order = require("./routes/orders")
const vendor = require("./routes/vendors")

app.use("/api/customers", customer)
app.use("/api/orders", order)
app.use("/api/vendors", vendor)

app.listen(port, () => {
  console.log(`api running on port ${port}`)
})
