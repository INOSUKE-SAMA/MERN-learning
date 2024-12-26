import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv/config';

console.clear();

const app = express();
const port = 4000;

const user = [
    {
        name: "Chirag",
        msg: "I like basketball"
    },
    {
        name: "Goku",
        msg: "I like to eat."
    }
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Welcome to Day 24 Chirag");
});

app.get('/login', (req, res) => {
    const user = { name: "Goku" };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
    res.setHeader('Set-Cookie', `token=${accessToken}; HttpOnly`);
    res.send("Token generated and stored in cookie");
});

app.get('/view', authenticateUser, (req, res) => {
    const authorizedUser = user.filter(user => req.user.name == user.name);
    res.json(authorizedUser);
});

function authenticateUser(req, res, next) {
    const cookies = req.headers.cookie;
    if (!cookies) {
        return res.status(403).send("Access Denied! No token provided.");
    }

    const token = cookies.split('; ').find(cookie => cookie.startsWith('token='));
    if (!token) {
        return res.status(403).send("Access Denied! Token not found in cookies.");
    }

    const accessToken = token.split('=')[1];

    jwt.verify(accessToken, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) {
            return res.status(403).send("Access Denied! Invalid token.");
        }
        req.user = user;
        next();
    });
}

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
