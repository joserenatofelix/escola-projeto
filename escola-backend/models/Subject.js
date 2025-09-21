module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Subject', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    taught_by: { type: DataTypes.INTEGER, allowNull: false }
  }, { tableName: 'subjects', timestamps: false });
};