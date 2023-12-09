/* const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'http://localhost/phpmyadmin/',
    user: 'root',
    password:'',
    database: 'characters'
});

connection.connect();
module.exports = connection;*/

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'http://localhost/phpmyadmin/',
    user: 'root',
    password:'',
    database: 'characters',
    port: 306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

//Eportamos la conexión como una promesa
modue.exports = {
    conn: pool.promise()
}