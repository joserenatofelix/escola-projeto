const db = require('./models');

async function run() {
  try {
    await db.sequelize.sync({ force: true });
    console.log('Banco de dados sincronizado');

    // Criar departamentos
    const deptCiencias = await db.Department.create({ name: 'Ciências' });
    const deptHumanas = await db.Department.create({ name: 'Humanas' });

    // Criar títulos
    const titleProfessor = await db.Title.create({ name: 'Professor' });
    const titleDoutor = await db.Title.create({ name: 'Doutor' });

    // Criar professores
    const profGirafales = await db.Professor.create({ 
      name: 'Girafales', 
      department_id: deptCiencias.id, 
      title_id: titleDoutor.id 
    });
    
    const profChaves = await db.Professor.create({ 
      name: 'Chaves', 
      department_id: deptHumanas.id, 
      title_id: titleProfessor.id 
    });

    // Criar disciplinas
    const math = await db.Subject.create({ 
      code: 'MAT101', 
      name: 'Matemática', 
      taught_by: profGirafales.id 
    });
    
    const physics = await db.Subject.create({ 
      code: 'FIS101', 
      name: 'Física', 
      taught_by: profGirafales.id 
    });
    
    const history = await db.Subject.create({ 
      code: 'HIS101', 
      name: 'História', 
      taught_by: profChaves.id 
    });

    // Criar pré-requisitos
    await db.SubjectPrerequisite.create({
      subject_id: physics.id,
      prerequisite_id: math.id
    });

    // Criar prédios e salas
    const buildingA = await db.Building.create({ name: 'Prédio A' });
    const buildingB = await db.Building.create({ name: 'Prédio B' });
    
    const room101 = await db.Room.create({ name: 'Sala 101', building_id: buildingA.id });
    const room102 = await db.Room.create({ name: 'Sala 102', building_id: buildingA.id });
    const room201 = await db.Room.create({ name: 'Sala 201', building_id: buildingB.id });

    // Criar turmas
    const classMath = await db.Class.create({ 
      subject_id: math.id, 
      year: 2024, 
      semester: '1', 
      code: 'MAT-A' 
    });
    
    const classPhysics = await db.Class.create({ 
      subject_id: physics.id, 
      year: 2024, 
      semester: '1', 
      code: 'FIS-A' 
    });
    
    const classHistory = await db.Class.create({ 
      subject_id: history.id, 
      year: 2024, 
      semester: '1', 
      code: 'HIS-A' 
    });

    // Criar horários das aulas
    await db.ClassSchedule.create({ 
      class_id: classMath.id, 
      room_id: room101.id, 
      day_of_week: 'Monday', 
      start_time: '08:00:00', 
      end_time: '09:30:00' 
    });
    
    await db.ClassSchedule.create({ 
      class_id: classPhysics.id, 
      room_id: room102.id, 
      day_of_week: 'Monday', 
      start_time: '10:00:00', 
      end_time: '11:30:00' 
    });
    
    await db.ClassSchedule.create({ 
      class_id: classHistory.id, 
      room_id: room201.id, 
      day_of_week: 'Tuesday', 
      start_time: '14:00:00', 
      end_time: '15:30:00' 
    });

    console.log('Seed concluído com sucesso!');
    process.exit(0);
  } catch (err) {
    console.error('Erro no seed:', err);
    process.exit(1);
  }
}

run();