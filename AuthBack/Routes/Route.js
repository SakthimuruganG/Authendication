import express from 'express';
import login from '../Login/login.js'
import { register } from '../Register/register.js';
const router = express.Router();



router.post("/login", login);
router.post("/register",register);

export default router;