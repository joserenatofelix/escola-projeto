module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Title', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }
  }, { tableName: 'titles', timestamps: false });
};