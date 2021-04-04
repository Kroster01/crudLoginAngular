import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { User } from '../entity/User';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';
import { validate } from 'class-validator';

class AuthController {
    static login = async (req: Request, res: Response) => {
        const { username, password } = req.body;
        if (!(username && password)) {
            return res.status(400).json({ message: 'Username & Password are required.' });
        }

        const userRepository = getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail({ where: { username } })
        } catch (error) {
            return res.status(400).json({ message: 'Username or password incorecct.' });
        }
        // check password
        if (!user.checkPassword(password)) {
            return res.status(400).json({ message: 'Username or Password are incorrect.' });
        }
        const token = jwt.sign({ userId: user.id, username: user.username }, config.jwtSecret, { expiresIn: '1h' });
        return res.json({ message: 'OK', code: 200, token, username: user.username });
    };

    static changePassword = async (req: Request, res: Response) => {
        const { userId } = res.locals.jwtPayload;
        const { oldPassword, newPassword } = req.body;
        if (!(oldPassword && newPassword)) {
            return res.status(400).json({ message: 'Old password & new password are required.' });
        }
        const userRepository = getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail({ where: { userId } })
        } catch (error) {
            return res.status(400).json({ message: 'Somenthing goes wrong.' });
        }
        if (!user.checkPassword(oldPassword)) {
            return res.status(401).json({ message: 'Check your old Password.' });
        }

        user.password = newPassword;
        // validate.
        const validateOpt = { validationError: { target: false, value: false } };
        const errors = await validate(user, validateOpt);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }
        try {
            user.hashPassword();
            const users = await userRepository.save(user);
        } catch (error) {
            res.status(409).json({ message: 'User already exist.' });
        }
        // All Okey
        res.send('Password change.');
    };
}
export default AuthController;