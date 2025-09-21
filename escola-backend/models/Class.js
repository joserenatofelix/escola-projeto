module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Class', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    subject_id: { type: DataTypes.INTEGER, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
    semester: { type: DataTypes.STRING, allowNull: false },
    code: { type: DataTypes.STRING, allowNull: false }
  }, { tableName: 'classes', timestamps: false });
};