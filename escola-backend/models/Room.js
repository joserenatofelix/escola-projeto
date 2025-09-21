module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Room', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    building_id: { type: DataTypes.INTEGER, allowNull: false }
  }, { tableName: 'rooms', timestamps: false });
};