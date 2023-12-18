const express = require('express');
const app = express();
const multer = require('multer');
//const ejs = require('ejs');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const mainRoutes = require('./src/routes/mainRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');

const path = require('path');


const upload = multer({ dest: 'uploads/' });

/*Leemos la constante */
const PORT = process.env.PORT;

/* Estáticos */

app.set(express.static(path.resolve(__dirname, 'public')));

//configuración ejs
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views'));

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
dotenv.config({path: './.env'});*/

//cookieParser.set
app.set('cookieParser', 'dev');
app.set('bodyParser');
/* Override para habilitar los métodos PUT y DELETE */
app.use(methodOverride('_method'));

/* Rutas */
app.use('/', mainRoutes);
//app.use('/home', mainRoutes);
//app.use('/auth',authRoutes);
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', authRoutes);

/* Ruta para mostrar el formulario de carga de archivos
app.get('/home', (req, res) => {
    //res.render('../views/home');
    res.render('home');
  });*/
/*Middleware para manejar el error 404
app.use((req, res, next)=> {
    res.status(404).send('Recurso no encontrado');
});*/
//app.post('/login', loginValidations, validateInput, loginController.checkLogin);
// // Ruta para manejar la carga de archivos
// app.post('/upload', upload.single('archivo'), (req, res) => {
//   if (!req.file) {
//     res.send('Error: NO se seleccionó el archivo');
//     console.log('No confirmos de archivo');
//   } else {
//     res.send('Archivo subido exitosamente');
//   }
// });
// // Ruta para manejar la carga de archivos
// app.post('/upload', upload.single('archivo'), (req, res) => {
//     if (!req.file) {
//       res.send('Error:  se seleccionó ningún archivo');
//     } else {
//       // Acceder a los detalles del archivo subido
//       const nombreArchivo = req.file.filename;
//       const tamañoArchivo = req.file.size;
  
//       res.send(`Archivo subido exitosamente<br>
//                 Nombre: ${nombreArchivo}<br>
//                 consolo.log('mensaje')  <br>
//                 Tamaño: ${tamañoArchivo} bytes`);
//     }
//   });
/*app.post('/uploads', upload.single('images'), (req, res) => {
  res.send('Images uploaded successfully!');
});*/
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
