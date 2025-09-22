const express = require('express');
const router = express.Router();
const db = require('../models');

// GET /api/examples - Lista todos os exemplos
router.get('/examples', async (req, res) => {
  try {
    const examples = await db.sequelize.models.Examples.findAll();
    res.json(examples);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar exemplos', details: err.message });
  }
});

module.exports = router;
