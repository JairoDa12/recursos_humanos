
const express = require ('express');
const jwt = require ('jsonwebtoken');
const { token } = require('morgan');
const user = express.Router();
const db = require('../config/database');


user.post("/signin", async (req, res, next) => {
    const { user_name, user_lastname, user_phone, user_mail, user_dir } = req.body;

    if (user_name && user_lastname && user_phone && user_mail && user_dir) {
        let query = "INSERT INTO empleados (user_name, user_lastname, user_phone, user_mail, user_dir)";
        query += ` VALUES ('${user_name}','${user_lastname}','${user_phone}','${user_mail}','${user_dir}'
        );`;

        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(201).json({ code: 201, message: "Usuario Registrado Correctamente" });
        }
        return res.status(500).json({ code: 500, message: "Ocurrio un error" });
    }
    return res.status(500).json({ code: 500, message: "Campos incompletos" });
});

user.delete("/delete", async (req, res, next) => {
    const { user_id } = req.body;
    
    if (user_id) {
        let query = `DELETE FROM empleados WHERE user_id=${user_id}`;
    
    const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(200).json({ code: 200, message: "Empleado eliminado correctamente" });
        }
        return res.status(404).json({ code: 404, message: "Empleado no encontrado" });
    }
});


user.put("/modify", async (req, res, next) => {
    const { user_name, user_lastname, user_phone, user_mail, user_dir, user_id } = req.body;

    if (user_id && user_name && user_lastname && user_phone && user_mail && user_dir) {
        let query = `UPDATE empleados SET user_name='${user_name}', user_lastname='${user_lastname}', user_phone='${user_phone}',`;
        query += `user_mail='${user_mail}', user_dir='${user_dir}' WHERE user_id=${user_id};`;
        
        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(201).json({ code: 200, message: "Empleado modificado correctamente" });
        }
        return res.status(500).json({ code: 500, message: "Empleado no identificado" });
    }
    
});

user.get("/search", async (req, res, next) => {
    const { user_name } = req.body;

    if (user_name) {
    const user = await db.query(`SELECT * FROM empleados WHERE user_name=${user_name}`);

    return res.status(200).json({ code: 200, message: user });
    }
});

module.exports = user;