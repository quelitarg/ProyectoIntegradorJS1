module.exports= {
home:(req, res) => {
    res.render('home', {
        title: 'Inicio | CRUD MVC'
    });
},
about:(req, res)=> {
    res.render('nosotros', {
        title:'Nosotros | CRUD MVC'
    });
},
contacto:(req, res)=> {
    res.render('contacto', {
        title:'Nosotros | CRUD MVC'
    });
}
}

/*const LicenceService = require('../services/licenceService');

module.exports = {
  homeView: async (req, res) => {
    const licences = await LicenceService.getAllItemsLicences();
    res.render('home', {
      view: {
        title: "Home | Funkoshop"
      },
      collections: licences.data
    });
  },
  contactView:(req, res) => res.send('Contact View Route'),
  aboutView:(req, res) => res.send('About View Route'),
  faqsView:(req, res) => res.send('FAQs View Route'),
};*/