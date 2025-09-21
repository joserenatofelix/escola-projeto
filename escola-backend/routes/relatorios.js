const express = require('express');
const router = express.Router();
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');

// 1. Horas por professor
router.get('/professores/horas', async (req, res) => {
  try {
    const sql = `
      SELECT 
        p.id AS professor_id,
        p.name AS professor_name,
        COALESCE(SUM(EXTRACT(EPOCH FROM (cs.end_time - cs.start_time)) / 3600), 0) AS total_horas
      FROM professors p
      LEFT JOIN subjects s ON p.id = s.taught_by
      LEFT JOIN classes c ON s.id = c.subject_id
      LEFT JOIN class_schedules cs ON c.id = cs.class_id
      GROUP BY p.id, p.name
      ORDER BY total_horas DESC;
    `;
    
    const rows = await sequelize.query(sql, { type: QueryTypes.SELECT });
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// 2. Salas com horários
router.get('/salas/horarios', async (req, res) => {
  try {
    const sql = `
      SELECT 
        r.id AS room_id,
        r.name AS room_name,
        b.name AS building_name,
        cs.day_of_week,
        cs.start_time,
        cs.end_time,
        c.code AS class_code,
        s.name AS subject_name,
        p.name AS professor_name,
        'Ocupado' AS status
      FROM rooms r
      INNER JOIN buildings b ON r.building_id = b.id
      LEFT JOIN class_schedules cs ON r.id = cs.room_id
      LEFT JOIN classes c ON cs.class_id = c.id
      LEFT JOIN subjects s ON c.subject_id = s.id
      LEFT JOIN professors p ON s.taught_by = p.id
      WHERE cs.id IS NOT NULL
      ORDER BY r.id, cs.day_of_week, cs.start_time;
    `;
    
    const rows = await sequelize.query(sql, { type: QueryTypes.SELECT });
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// 3. Salas livres em um horário específico
router.get('/salas/livres', async (req, res) => {
  try {
    const { day, start, end } = req.query;
    
    if (!day || !start || !end) {
      return res.status(400).json({ 
        error: "Parâmetros necessários: day, start, end. Ex: ?day=Monday&start=09:00&end=10:00" 
      });
    }
    
    const sql = `
      SELECT r.id, r.name AS room_name, b.name AS building_name
      FROM rooms r
      INNER JOIN buildings b ON r.building_id = b.id
      WHERE NOT EXISTS (
        SELECT 1
        FROM class_schedules cs
        WHERE cs.room_id = r.id
        AND cs.day_of_week = :day
        AND cs.start_time < :end_time
        AND cs.end_time > :start_time
      )
      ORDER BY r.id;
    `;
    
    const rows = await sequelize.query(sql, {
      type: QueryTypes.SELECT,
      replacements: { 
        day: day,
        start_time: start,
        end_time: end
      }
    });
    
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;