const OwnerItem = require('../models').OwnerItem;

module.exports = {
  create(req, res) {
    return OwnerItem
      .create({
        name: req.body.name,
        description: req.body.description,
        ownerId: req.params.ownerId
      })
      .then(ownerItem => res.status(201).send(ownerItem))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return OwnerItem
      .findAll()
      .then(items => res.status(200).send(items))
      .catch(error => res.status(400).send(error))
  }
}