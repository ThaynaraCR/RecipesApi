const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const nodemailer = require('nodemailer');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
require('dotenv').config();
const  User = require('../models/User');


const userController = {


    newUser: async (req, res) => {

        const {
            name,
            login,
            password
        } = req.body;

        const userCreated = await User.create({
            name,
            login,
            password: bcrypt.hashSync(password, salt)
        })
        return res.status(201).json(userCreated)
    },

    login: async (req, res) => {

        const {
            login,
            password
        } = req.body;

        const user = await User.findOne({ login })

        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {

                    const token = jwt.sign({
                        id: 1
                    }, authConfig.secret, {
                        expiresIn: 86400,
                    })
                    res.status(200).send({
                        "msg": "login realizado com sucesso",
                        token
                    })

                } else {

                    let msg = "Usuário ou senha invalidos!";
                    return res.status(404).send({
                        "msg": msg
                    })
                }

            });
        }else{
            let msg = "Usuário ou senha invalidos!";
            return res.status(404).send({
                "msg": msg
            })
        }


    },
}

module.exports = userController