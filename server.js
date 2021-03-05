require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db');

const productRoutes = require('./routes/productRoutes')


connectDB()

const app = express()

app.use(express.json())

//Routes
app.use('/products', productRoutes)

const PORT =  process.env.PORT ||5050

app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`)
})