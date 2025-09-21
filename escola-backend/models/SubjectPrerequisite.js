module.exports = (sequelize, DataTypes) => {
  return sequelize.define('SubjectPrerequisite', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    subject_id: { type: DataTypes.INTEGER, allowNull: false },
    prerequisite_id: { type: DataTypes.INTEGER, allowNull: false }
  }, { tableName: 'subject_prerequisites', timestamps: false });
};