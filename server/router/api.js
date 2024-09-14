import express from 'express';
import { servicesAPIrouter } from './services/services.js';


export const apiRouter = express.Router();

apiRouter.use('/services', servicesAPIrouter);

apiRouter.all('/', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'Issirink konkretu API endpointa',
    });
});