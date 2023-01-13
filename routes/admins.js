const express = require ('express');
const jwt = require ('jsonwebtoken');
const { token } = require('morgan');
const admins = express.Router();
const db = require('../config/database');

admins.post("/login", async (req, res, next)=>{
    const { admin_name, admin_password } = req.body;
    const query = `SELECT * FROM admins WHERE admin_name = '${admin_name}' AND admin_password = '${admin_password}';`;
    const rows = await db.query(query);

    if (admin_name && admin_password) {
        if(rows.length == 1) {
            const token = jwt.sign({
                admin_id: rows[0].admin_id,
                admin_name: rows[0].admin_name

            }, "debugkey");
            return res.status(200).json({code: 200, message: token });
        }
        else {
            return res.status(200).json({code: 401, message: "Usuario y/o contraseña incorrecta"});
        }
    }
    
    return res.status(500).json({code: 500, message: "Campos incompletos"});

});

module.exports = admins;
