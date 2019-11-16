const ownersController = require('../controllers').owners;
const ownerItemsController = require('../controllers').ownerItems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: "Welcome to the Owners API!"
  }));

  app.get('/api/owners', ownersController.list);
  
  app.get('/api/owners/:ownerId', ownersController.retrieve);
  
  app.get('/api/owneritems', ownerItemsController.list);
  
  app.put('/api/owners/:ownerId', ownersController.update);
  
  app.post('/api/owners', ownersController.create);
  
  app.post('/api/owners/:ownerId/items', ownerItemsController.create);
}