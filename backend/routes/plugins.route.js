import express from 'express';

import {getPlugin} from '../controllers/plugins.controller.js'
import {signup , login} from '../controllers/user.controller.js';

const router = express.Router();

router.get("/", getPlugin);

router.post("/", signup)

router.post('/login', login)

export default router;