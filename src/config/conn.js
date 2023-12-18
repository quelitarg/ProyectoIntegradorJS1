/*const mysql1 = require('mysql2');
/*requerimos la dependencia 
require('dotenv').config();
const connection = mysql.createConnection({
    host: process.env.HOST, //usamos las variables de entorno
    user: process.env.USER,
    password:process.env.DBPASS,
    database: process.env.DB
});

connection.connect();
module.exports = connection;
*/


const mysql = require('mysql2');
/*requerimos la dependencia */
require('dotenv').config();
/*
 * Creamos un pool de conexiones
 */
const pool = mysql.createPool({
    host: process.env.DB_HOST, //usamos las variables de entorno
    user: process.env.DB_USER,
    password:process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});


/*Testeamos que la conexión sea exitosa*/
pool.getConnection((error, connection) => {
    if(error) {
        console.error('Error al obtener una conexión:', error);
    } else {
        console.log('Conexión exitosa a la base de datos');
        connection.release();
    }
});

//Exportamos la conexión como una promesa
module.exports = {
    conn: pool.promise()
};