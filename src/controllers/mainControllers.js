module.exports= {
home:(req, res) => {
    res.render('/', {
        title: 'Inicio | CRUD MVC'
    });
},
about:(req, res)=> {
    res.render('nosotros', {
        title:'Nosotros | CRUD MVC'
    });
},
contact:(req, res)=> {
    res.render('contacto', {
        title:'Nosotros | CRUD MVC'
    });
}
}
