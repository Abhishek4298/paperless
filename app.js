import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import adminMiddleware from './src/middleware/adminMiddleware';
import apiMiddleware from './src/middleware/apiAuth';
import adminRoutes from './src/routes/adminRoutes';
const path = require('path')

if (process.env.NODE_ENVIRONMENT === 'prod') {
  dotenv.config();
} else if (process.env.NODE_ENVIRONMENT === 'stag') {
  dotenv.config({ path: '.env.stg' });
} else {
  dotenv.config({ path: '.env' });
}

require('./src/config/sequelize');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(cors(corsOptionsDelegate));

app.use('/api/admin', apiMiddleware, adminMiddleware, adminRoutes);
app.use('/test', (req, res) => res.send('Ok'));
module.exports = app;
