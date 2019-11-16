'use strict';
module.exports = (sequelize, DataTypes) => {
  const OwnerItem = sequelize.define('OwnerItem', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: false
    }
  });
  OwnerItem.associate = function(models) {
    OwnerItem.belongsTo(models.Owner, {
      foreignKey: 'ownerId',
      onDelete: 'CASCADE'
    });
  };
  return OwnerItem;
};