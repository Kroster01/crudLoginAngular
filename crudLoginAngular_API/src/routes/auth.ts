import { checkJwt } from "../middlewares/jwt";
import { Router } from 'express';
import AuthController from '../controller/AuthController';

const router = Router();

// Login
router.use('/login', AuthController.login);

// Change password
router.use('/change-password', [checkJwt], AuthController.changePassword);

export default router;