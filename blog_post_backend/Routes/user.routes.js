const express = require('express');
const userRoutes = express.Router();

const {
    getAll,
    registerUser,
    loginUser
} = require('../controller/user.controller');

userRoutes.get('/alluser', getAll);

userRoutes.post('/adduser', registerUser);

userRoutes.post('/loginuser', loginUser);

module.exports = userRoutes;
