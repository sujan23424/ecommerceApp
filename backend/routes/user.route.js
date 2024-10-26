import express from 'express';

const router = express.Router();

import {homePage, loginPage, loginPost} from '../controllers/user.controller.js';

router.get("/", homePage)

router.get("/login", loginPage)

router.post("/login", loginPost)


export default router;