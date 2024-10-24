const User = require('../model/user.model');
const Messages = require('../helpers/messages');
const jwt = require('jsonwebtoken');
const messages = require('../helpers/messages');
const bcypt = require('bcrypt');

exports.getAll = async (req, res) => {
    try {
        const allusers = await User.find({ isDelete: false });
        res.send(allusers);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: Messages.INTERNAL_SERVER_ERROR })
    }
}

exports.registerUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, isDelete: false });
        if (user) {
            return res.send({ message: Messages.ALREADY_EXIST });
        }
        let hashpassword = await bcypt.hash(req.body.password, 10);
        let newuser = await User.create({ ...req.body, password: hashpassword });
        res.send({ newuser, message: Messages.USER_ADDED });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: Messages.INTERNAL_SERVER_ERROR });
    }
}

exports.loginUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (!user) {
            return res.send({ message: Messages.USER_NOT_FOUND });
        }
        let comparepassword = await bcypt.compare(req.body.password, user.password);
        if (!comparepassword) {
            return res.send({ message: Messages.INCORRECT_PASS })
        }
        let token = await jwt.sign({ userID: user._id }, process.env.JWT_SECREATE)
        return res.send({ message: Messages.LOGIN_SUCCESS, accessToken : token , username : user.fullname });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: Messages.INTERNAL_SERVER_ERROR });
    }
}
















// exports.loginUser = async (req, res) => {
//     try {
//         let user = await User.findOne({ email: req.body.email, isDelete: false });
//         if (!user) {
//             return res.send({ message: 'User not found' }); // Specific message
//         }
//         let comparepassword = await bcypt.compare(req.body.password, user.password);
//         if (!comparepassword) {
//             return res.send({ message: 'Incorrect password' }); // Specific message
//         }
//         let token = await jwt.sign({ userID: user._id }, process.env.JWT_SECREATE);
//         return res.send({ message: 'Login successful', token });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ message: 'Internal Server Error' });
//     }
// }

