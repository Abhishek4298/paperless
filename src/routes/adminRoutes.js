import express from 'express';
import { allUsers } from '../controllers/usercontroller';

const router = express.Router();

router.get('/test', allUsers);

module.exports = router;
