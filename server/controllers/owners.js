const Owner = require('../models').Owner;
const OwnerItem = require('../models').OwnerItem;

module.exports = {
  create(req, res) {
    return Owner
      .create({
        name: req.body.name
      })
      .then(owner => res.status(201).send(owner))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Owner
      .findAll({
        include: [{
          model: OwnerItem, //we need to require the OwnerItem model
          as: 'ownerItems' //matches the AS key in the corresponding model
        }]
      })
      .then(owners => res.status(200).send(owners))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Owner
      .findByPk(req.params.ownerId, {
        include: [{
          model: OwnerItem,
          as: 'ownerItems'
        }]
      })
      .then(owner => {
        if (!owner) {
          return res.status(404).send({
            message: "Owner Not Found"
          })
        }
        return res.status(200).send(owner);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Owner
      .findByPk(req.params.ownerId, {
        include: [{
          model: OwnerItem,
          as: 'ownerItems'
        }]
      })
      .then(owner => {
        if(!owner) {
          return res.status(404).send({
            message: "Owner Not Found"
          });
        }
        return owner
          .update({
            name: req.body.name || owner.name
          })
          .then(() => res.status(200).send(owner))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};

