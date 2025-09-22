// models/Building.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Building', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }
  }, { tableName: 'buildings', timestamps: false });
};