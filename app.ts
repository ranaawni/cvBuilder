import express, { query } from 'express';
require('dotenv').config();
// import model from './model/model'
const app = express();
// const connection = require("./model/db")
import {connect, Query} from './model/db'

const port = process.env.PORT;

app.listen(port , () => {
    console.log(`server is running on port ${port}`)
})

connect();
