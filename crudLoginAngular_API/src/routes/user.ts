import { checkJwt } from "../middlewares/jwt";
import { checkRole } from "../middlewares/role";
import { Router } from 'express';
import { UserController } from '../controller/UserController';

const router = Router();

// Get all users
router.get('/', [checkJwt, checkRole(['admin'])], UserController.getAll);
// Get one users
router.get('/:id', [checkJwt, checkRole(['admin'])], UserController.getById);
// Create a new User
router.post('/', [checkJwt, checkRole(['admin'])], UserController.new);
// Edit User
router.patch('/:id', [checkJwt, checkRole(['admin'])], UserController.edit);
// Delete User
router.delete('/:id', [checkJwt, checkRole(['admin'])], UserController.delete);

export default router;