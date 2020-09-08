const knex = require('../database/server');
const express = require('express');
const app = express();
const crypto = require('crypto');



app.set('view engine', 'ejs');


module.exports = {
    index(req, res) {
        res.render('index.ejs')
    },


    async create(req, res, next) {
        try {


            const {
                name,
                senha,
                email,
                whatsapp,
                city,
                uf
            } = req.body

            const id = crypto.randomBytes(4).toString('HEX');

            const updated = new Date();
            const created_at = updated;

            const alg = 'aes-256-ctr'
            const pwd = 'asdlkj123'
            const text = senha
            const cipher = crypto.createCipher(alg, pwd)
            const password = cipher.update(text, 'utf8', 'hex')

            await knex('users')
                .insert({
                    id,
                    name,
                    password,
                    email,
                    whatsapp,
                    city,
                    uf,
                    created_at
                })
            next(res.render('show.ejs'))
        }
        catch (error) {
            next(error);
        }
    }
};