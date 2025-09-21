module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Professor', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    department_id: { type: DataTypes.INTEGER, allowNull: false },
    title_id: { type: DataTypes.INTEGER, allowNull: false }
  }, { tableName: 'professors', timestamps: false });
};