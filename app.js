const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mainRoutes = require('./src/routes/mainRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');

const app = express();
const upload = multer({ dest: 'uploads/' });

/*Leemos la constante */
const PORT = process.env.PORT;

/* Estáticos */

app.set(express.static('public'));

//configuración ejs
app.set('view engine', 'ejs');
app.set('views', './src/views');

/*
* Convertimos los datos entrantes en formato
* application/x-www-form-urlencoded y application/json
* a un formato entendible por el servidor
* datos enviados desde el formulario*/

app.use(express.urlencoded({extended: true}));
app.use(express.json());

/*requerimos la dependencia */
require('dotenv').config();
/*seteamos las variables de entorno
dotenv.config({path: './.env'}); */

//cookieParser.set
app.set('cookieParser', 'dev');
app.set('bodyParser');
/* Override para habilitar los métodos PUT y DELETE */
app.use(methodOverride('_method'));

/* Rutas */

app.use('/home', mainRoutes);
app.use('/contacto', mainRoutes);
app.use('/admin', adminRoutes);

/* Ruta para mostrar el formulario de carga de archivos
app.get('/', (req, res) => {
    res.render('home');
  });
//Middleware para manejar el error 404
app.use((req, res, next)=> {
    res.status(404).send('Recurso no encontrado');
});*/

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
