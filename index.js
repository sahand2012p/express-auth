const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

mongoose.connect(process.env.DB_CONNECTION_URL)

app.use(express.json())

const authRoute = require('./routes/auth')

app.use('/api/user', authRoute)

app.listen(3000)