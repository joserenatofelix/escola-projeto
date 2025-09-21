module.exports = (sequelize, DataTypes) => {
  return sequelize.define('ClassSchedule', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    class_id: { type: DataTypes.INTEGER, allowNull: false },
    room_id: { type: DataTypes.INTEGER, allowNull: false },
    day_of_week: { type: DataTypes.STRING, allowNull: false },
    start_time: { type: DataTypes.TIME, allowNull: false },
    end_time: { type: DataTypes.TIME, allowNull: false }
  }, { tableName: 'class_schedules', timestamps: false });
};