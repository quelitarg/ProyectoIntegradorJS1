const ItemsService = require('../services/itemService');
const CategoryService = require('../services/categoryService');
const LicenceService = require('../services/licenceService');
//const ProductsService = require('../services/productsService')
const adminView = require('../routes/adminRoutes');

module.exports = {
  adminView: async (req, res) => {
    const { data } = await ItemsService.getAllItems();
    return res.render('./admin',
    {
      view: {
        title: 'List of Products | Admin Funkoshop'},
      items:[data] 
    });
  },

  createView:  async (req, res) =>{
    const { licences } = await CategoryService.getAllItemsCategories();
    res.render('.admin/create', {
      view: {
        title: 'Create Product | Admin Funkoshop'
      },
      licences
    });
  },
  
  createItem:  async (req, res) => {
    const item = req.body;
    await ItemsService.create(item);
    res.redirect('./admin');
  },
  bulkCreate:  async (req, res) => {
    const items = req.body;
    const result = await ItemsService.create(items.map(el => Object.values(el)));
    res.send(result);
  },
  editView:  async (req, res) => {
    const id = req.params.id;
    const { data: categories } = await CategoryService.getAllItemsCategories();
    const { data: licences } = await LicenceService.getAllItemsLicences();
    const { data } = await ItemsService.getItem(id);
    console.log(categories, licences);
    res.render('./edit/:id', {
      view: {
        title: `Edit Product #${id} | Admin Funkoshop`
      },
      item: data[0],
      categories,
      licences
    });
  },
  editItem:  async (req, res) => {
    const id = req.params.id;
    const item = req.body;

    await ItemsService.edit(item, id);
    res.redirect('/admin');
  },
  deleteItem:  async (req, res) => {
    const id = req.params.id;

    await ItemsService.delete(id);
    res.redirect('/admin');
  }
}