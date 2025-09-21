require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));

// Rotas
const relatoriosRoutes = require('./routes/relatorios');
const resourcesRoutes = require('./routes/resources');

app.use('/api', relatoriosRoutes);
app.use('/api', resourcesRoutes);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Conectado ao banco de dados com sucesso');
    await db.sequelize.sync({ alter: true });
    app.listen(PORT, () => console.log(`Backend rodando em http://localhost:${PORT}`));
  } catch (err) {
    console.error('Erro ao iniciar a aplicação', err);
    process.exit(1);
  }
})();