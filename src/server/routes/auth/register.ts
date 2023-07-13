import * as express from "express";
import * as jwt from "jsonwebtoken";
import Users from "../../db/queries/users";
import { jwtCredentials } from "../../config";
import { generateHash } from "../../utils/passwords"

const router = express.Router();

router.post('/', async (req, res) => {
    const newUser = req.body;

    try {
        newUser.password = generateHash(newUser.password);
        const result = await Users.insert(newUser);
        const token = jwt.sign(
            { userid: result.insertId, email: newUser.email, role: 'admin' },
            jwtCredentials.secret!,
            { expiresIn: jwtCredentials.expires }
        );

        res.json(token);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Tried registering new user, but something went wrong." });
    }
});

export default router;