const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
require('dotenv').config();
const  User = require('../models/User');
const  emailController = require('./EmailController')

const userController = {

    newUser: async (req, res) => {

        const {
            name,
            login,
            password
        } = req.body;

        try {
            const userCreated = await User.create({ //can be findOrcreate
                name,
                login,
                password: bcrypt.hashSync(password, salt)
            })
            emailController.newEmail(login)
            return res.status(201).json(userCreated)
        } catch (error) {
            console.log("error create user: ", error)
        }

    },

    login: async (req, res) => {

        const {
            login,
            password
        } = req.body;

        try {
            var user = await User.findOne({ login })
        } catch (error) {
            console.log("error find user")
        }
        

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