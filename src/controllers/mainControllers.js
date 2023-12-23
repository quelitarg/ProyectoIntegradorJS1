const LicenceService = require('../services/licenceService');
const ItemsService = require('../services/itemService');

module.exports = {
  homeView: async (req, res) => {
    const licences = await LicenceService.getAllItemsLicences();
    const data  = await ItemsService.getAllItems();
    res.render('./home', {
      view: {
        title: 'Home | Funkoshop'
      },
      collections:[
        {
            'product_id': 1,
            'licence_name': 'harry-potter',
            'category_name': 'Funkos',
            'product_name': 'Harry Potter',
            'product_description': 'Figura coleccionable de Harry Potter',
            'product_price': 39990.00,
            'dues': 6,
            'product_sku': 'HAR001001',
            'img_front': '/multimedia/harry-potter/harry-1.webp',
            'img_back': '/multimedia/harry-potter/harry-box.webp'
        },
        {
            "product_id": 8,
            "licence_name": "pokemon",
            "category_name": "Funkos",
            "product_name": "Pikachu",
            "product_description": "Figura coleccionable de Pikachu",
            "product_price": 39990.00,
            "dues": 6,
            "product_sku": "POK001008",
            "img_front": "/multimedia/pokemon/pikachu-1.webp",
            "img_back": "/multimedia/pokemon/pikachu-box.webp"
        },
        {
            "product_id": 13,
            "licence_name": "star-wars",
            "category_name": "Funkos",
            "product_name": "Stormtrooper",
            "product_description": "Figura coleccionable de un Stormtrooper",
            "product_price": 39990.00,
            "dues": 6,
            "product_sku": "STA001013",
            "img_front": "/multimedia/star-wars/trooper-1.webp",
            "img_back": "/multimedia/star-wars/trooper-box.webp"
        }
    ],
       /* [licences],*/
        
        items: [data]
    });
  },
  contactView:(req, res) => res.send('Contact View Route'),
  aboutView:(req, res) => res.send('About View Route'),
  faqsView:(req, res) => res.send('FAQs View Route'),
};