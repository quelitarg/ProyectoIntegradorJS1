/*module.exports= {
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
*/
const LicenceService = require('../services/licenceService');

module.exports = {
  homeView: async (req, res) => {
    const licences = await LicenceService.getAllItemsLicences();
    res.render('./home', {
      view: {
        title: 'Home | Funkoshop'
      },
      collections:/*[
        {
        product_id: 1,
        licence_name: 'Pokemon',
        category_name: 'Figuras coleccionables',
        product_name: 'Pidgeotto',
        product_description: 'Figura coleccionable pokemon',
        price: 1799.99,
        dues: 10,
        sku: 'PKM001001',
        image_front: '/multimedia/pokemon/pidgeotto-1.webp',
        image_back: '../../multimedia/pokemon/pidgeotto-box.webp'
        }
        ]*/
        [licences]
        
        //licences.data
    });
  },
  contactView:(req, res) => res.send('Contact View Route'),
  aboutView:(req, res) => res.send('About View Route'),
  faqsView:(req, res) => res.send('FAQs View Route'),
};