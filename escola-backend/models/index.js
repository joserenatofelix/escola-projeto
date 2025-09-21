const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  dialect: process.env.DB_DIALECT || 'postgres',
  logging: false
});

const db = { sequelize, Sequelize, DataTypes };

// Importar modelos
db.Department = require('./Department')(sequelize, DataTypes);
db.Title = require('./Title')(sequelize, DataTypes);
db.Professor = require('./Professor')(sequelize, DataTypes);
db.Subject = require('./Subject')(sequelize, DataTypes);
db.SubjectPrerequisite = require('./SubjectPrerequisite')(sequelize, DataTypes);
db.Building = require('./Building')(sequelize, DataTypes);
db.Room = require('./Room')(sequelize, DataTypes);
db.Class = require('./Class')(sequelize, DataTypes);
db.ClassSchedule = require('./ClassSchedule')(sequelize, DataTypes);

// Associações
db.Department.hasMany(db.Professor, { foreignKey: 'department_id' });
db.Professor.belongsTo(db.Department, { foreignKey: 'department_id' });

db.Title.hasMany(db.Professor, { foreignKey: 'title_id' });
db.Professor.belongsTo(db.Title, { foreignKey: 'title_id' });

db.Professor.hasMany(db.Subject, { foreignKey: 'taught_by' });
db.Subject.belongsTo(db.Professor, { foreignKey: 'taught_by' });

db.Subject.hasMany(db.Class, { foreignKey: 'subject_id' });
db.Class.belongsTo(db.Subject, { foreignKey: 'subject_id' });

db.Class.hasMany(db.ClassSchedule, { foreignKey: 'class_id' });
db.ClassSchedule.belongsTo(db.Class, { foreignKey: 'class_id' });

db.Room.hasMany(db.ClassSchedule, { foreignKey: 'room_id' });
db.ClassSchedule.belongsTo(db.Room, { foreignKey: 'room_id' });

db.Building.hasMany(db.Room, { foreignKey: 'building_id' });
db.Room.belongsTo(db.Building, { foreignKey: 'building_id' });

// Pré-requisitos
db.Subject.belongsToMany(db.Subject, {
  through: db.SubjectPrerequisite,
  as: 'Prerequisites',
  foreignKey: 'subject_id',
  otherKey: 'prerequisite_id'
});

module.exports = db;