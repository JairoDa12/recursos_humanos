const morgan = require('morgan');
const express = require('express');
const app = express();
const pokemon = require('./routes/pokemon');

/*GET - Obtener recursos
POST - Almacenar recursos/Crear recursos
PUT - Modificar un recurso
PATCH -Modificar una parte de un recurso/Actualizar
DELETE - Borrar un recurso*/

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => { 
    return res.status(200).send("Bienvenido al Pokedex");
});

app.use("/pokemon", pokemon);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});


