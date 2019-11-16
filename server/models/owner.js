'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('Owner', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Owner.associate = function(models) {
    Owner.hasMany(models.OwnerItem, {
      foreignKey: 'ownerId', //must match foreignKey inside the corresponding model (owneritem)
      as: 'ownerItems'
    });
  };
  return Owner;
};