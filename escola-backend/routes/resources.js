const express = require('express');
const router = express.Router();
const db = require('../models');

// Rotas básicas para todos os recursos
const resources = [
  'Department', 'Title', 'Professor', 'Subject', 
  'SubjectPrerequisite', 'Building', 'Room', 'Class', 'ClassSchedule'
];

resources.forEach(resource => {
  // GET all
  router.get(`/${resource.toLowerCase()}s`, async (req, res) => {
    try {
      const data = await db[resource].findAll();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // GET by id
  router.get(`/${resource.toLowerCase()}s/:id`, async (req, res) => {
    try {
      const data = await db[resource].findByPk(req.params.id);
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ error: 'Registro não encontrado' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // POST
  router.post(`/${resource.toLowerCase()}s`, async (req, res) => {
    try {
      const data = await db[resource].create(req.body);
      res.status(201).json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // PUT
  router.put(`/${resource.toLowerCase()}s/:id`, async (req, res) => {
    try {
      const result = await db[resource].update(req.body, {
        where: { id: req.params.id }
      });
      
      if (result[0] === 1) {
        res.json({ message: 'Registro atualizado com sucesso' });
      } else {
        res.status(404).json({ error: 'Registro não encontrado' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // DELETE
  router.delete(`/${resource.toLowerCase()}s/:id`, async (req, res) => {
    try {
      const result = await db[resource].destroy({
        where: { id: req.params.id }
      });
      
      if (result === 1) {
        res.json({ message: 'Registro excluído com sucesso' });
      } else {
        res.status(404).json({ error: 'Registro não encontrado' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
});

module.exports = router;