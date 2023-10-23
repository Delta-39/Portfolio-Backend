const express = require('express');
const server = express();
const morgan = require("morgan");
const cors = require("cors")
const dotenv = require('dotenv');
dotenv.config();


const mainRouter = require('./src/routes/mainRouter');

// Middleware para analizar solicitudes JSON
server.use(morgan("dev")); 
server.use(express.json()); 
server.use(cors())

// Configura las rutas
server.use(mainRouter);

// Inicia el servidor
const puerto = process.env.PORT || 5000;
server.listen(puerto, () => {
    console.log(`Servidor Express en funcionamiento en el puerto ${puerto}`);
});

module.exports = server