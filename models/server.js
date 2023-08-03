const cors             = require('cors');
const express          = require('express');
const { createServer } = require('http');
const { sequelize }    = require('../database/connection');
const app              = express();

class Server {

    constructor() {
        this.app          = express();
        this.port         = process.env.PORT;
        this.conexionHttp = process.env.CONEXION_CON_HTTP;
        this.paths        = {
                              auth: '/api/auth'
                            }

        // Si va a haber interacción con una página web, creamos el servidor
        if ( this.conexionHttp  === '1' ) {
            this.server = createServer( this.app );
        }
        
        // Conectamos con la base de datos
        this.conectarBD();
   
        // Middlewares
        this.middlewares();

        // Comprobamos las rutas
        this.routes();
    }

    async conectarBD() {
        try {
            await sequelize.authenticate()
            console.log('Connection has been established successfully.')
        } catch (error) {
            console.log('Unable to connect to the database.', error);
        }
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/auth'));
    }

    listen() {
        this.app.listen( this.port );
    }

}

module.exports = Server;