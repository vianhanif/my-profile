import express from 'express';
import controller from './oauth.controller';

const router = express.Router();

router.get('/login', controller.auth);
router.get('/callback', controller.callback)

export default router;
