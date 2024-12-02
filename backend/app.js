const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const  connectToDb = require('./config/dbConnect');
const userRoutes = require("./routes/userRoutes");

connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.get('/', (req,res) => {
    res.send("Hello World");
});

app.use("/api/users", userRoutes);

module.exports = app;