const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const nodemailer = require('nodemailer');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
require('dotenv').config();
const {
    usuario

} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//criar a função de criar um usuario 

const loginController = {

    usuario: async (req, res) => {

        const {
            email,
            senha
        } = req.body;

        const umUsuario = await usuario.findOne({
            where: {
                email: email
            }
        })

        if (!umUsuario) {

            let msg = `Usuário não cadastrado! Gostaria de cadastrar o email ${email} ?`; //se sim da um insert em solicitacoes
            return res.status(404).send({
                "withoutUser": msg
            })

        }

        if (umUsuario) {
            bcrypt.compare(senha, umUsuario.senha, function (err, result) {
                if (result) {

                    const token = jwt.sign({
                        id: 1
                    }, authConfig.secret, {
                        expiresIn: 86400,
                    })
                    res.status(200).send({
                        "msg": "login realizado com sucesso",
                        "id_usuario": umUsuario.id_usuario,
                        "email": umUsuario.email,
                        "nome": umUsuario.nome,
                        "whatsapp": umUsuario.whatsapp,
                        "igreja": umUsuario.igreja,
                        "regiao": umUsuario.regiao,
                        "bloco": umUsuario.bloco,
                        "nivel_acesso": umUsuario.nivel_acesso,
                        
                        token
                    })

                } else {

                    let msg = "Usuário ou senha invalidos!";
                    return res.status(404).send({
                        "msg": msg
                    })
                }

            });
        }


    },
}

module.exports = loginController