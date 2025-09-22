// escola-backend/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));

// Rotas de health check básicas (ADICIONE ESTAS)
app.get('/', (req, res) => {
  res.json({ 
    message: 'API Escola funcionando!', 
    status: 'OK',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: '/api/health',
      alunos: '/api/students',
      professores: '/api/professors',
      relatorios: '/api/professores/horas',
      salas: '/api/rooms'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    service: 'escola-backend',
    database: 'connected',
    timestamp: new Date().toISOString()
  });
});


// Rotas da aplicação (JÁ EXISTIAM)
const relatoriosRoutes = require('./routes/relatorios');
const resourcesRoutes = require('./routes/resources');
const examplesRoutes = require('./routes/examples');

app.use('/api', relatoriosRoutes);
app.use('/api', resourcesRoutes);
app.use('/api', examplesRoutes);

const PORT = process.env.PORT || 3001;

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Conectado ao banco de dados com sucesso');
    await db.sequelize.sync({ alter: true });
    app.listen(PORT, '0.0.0.0', () => console.log(`Backend rodando em http://localhost:${PORT}`));
  } catch (err) {
    console.error('Erro ao iniciar a aplicação', err);
    process.exit(1);
  }
})();