<p align="center">
  <a href="https://nodejs.org/" target="_blank">
    <img src="https://nodejs.org/static/images/logo.svg" width="120" alt="Node.js Logo" />
  </a>
  &nbsp;&nbsp;&nbsp; <!-- Espaço -->
  <a href="https://react.dev/" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="120" alt="React Logo" />
  </a>
  &nbsp;&nbsp;&nbsp; <!-- Espaço -->
  <a href="https://nextjs.org/" target="_blank">
    <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png" width="120" alt="Next.js Logo" />
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="Downloads" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow on Twitter"/></a>
</p>

# 🏫 Sistema Escolar - Professor Girafales

#### Sistema moderno de gestão escolar desenvolvido para atender às necessidades do Professor Girafales, incluindo controle de professores, salas, disciplinas e horários.

---

## ✨ Tecnologias

- [Node.js](https://www.nodejs.tech/pt-br)
- [Next.js](https://nextjs.org/)
- [React.js](https://react.dev/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
---

## 📝 Funcionalidades
- 📊 Dashboard de Horas por Professor - Visualize a carga horária de cada professor
- 🏫 Gestão de Salas - Consulte horários ocupados e disponíveis
- 👨‍🏫 Controle de Professores - Gerencie professores e suas disciplinas
- 📅 Agenda Escolar - Visualize a grade horária completa
- 🔍 Salas Livres - Encontre salas disponíveis em horários específicos
---

## 🗂️ Arquitetura

```
escola-projeto/
├── 📁 escola-backend/          # API Node.js + Express + Sequelize
│   ├── 📁 models/              # Modelos do banco de dados
│   ├── 📁 routes/              # Rotas da API
│   ├── Dockerfile              # Configuração do Docker
│   └── app.js                  # Servidor principal
│
├── 📁 escola-frontend/         # Interface Next.js 14
│   ├── 📁 components/          # Componentes React
│   ├── 📁 pages/               # Páginas da aplicação
│   ├── 📁 styles/              # Estilos CSS
│   └── Dockerfile              # Configuração do Docker
│
└── 📄 docker-compose.yml       # Orquestração de containers
```
---
## ⚙️ Como Executar

### Pré-requisitos
- PostgreSQL instalado
- #### Docker e Docker Compose instalados
- #### Clonar o repositório
---
### **Método 1:** Docker Compose (Recomendado)

```
git clone https://github.com/joserenatofelix/escola-projeto.git
```
#### Entre no diretório do projeto
```
cd escola-projeto
```
#### Suba os containers
```
docker-compose up -d
```
#### Ver logs em tempo real
```
docker-compose logs -f
```
---
### **Método 2:**  Execução Manual
***Backend (Node.js)***
```
cd escola-backend
```
#### Instale as dependências
```
npm install
```
#### Popular o banco com os dados de exemplo
```
npm run seed
```
#### Executar em modo desenvolvimento
```
npm run dev
```
---
***Frontend (Next.js)***
```
cd escola-frontend
```
#### Instale as dependências
```
npm install
```
#### Inicie o servidor de desenvolvimento
```
npm run dev
```
---
**Banco de Dados (PostgreSQL)**
*Certifique-se de ter o PostgreSQL instalado e execute:*
```
sql
CREATE DATABASE escola;
CREATE USER postgres WITH PASSWORD 'postgres';
GRANT ALL PRIVILEGES ON DATABASE escola TO postgres;
```
---
## 🌐 URLs de Acesso
- #### Frontend: http://localhost:3000
- #### Backend API: http://localhost:3001
- #### Health Check: http://localhost:3001/api/health
---
## 🐳 Comandos Docker Úteis

#### Ver status dos containers
```
docker-compose ps
```
#### Parar todos os containers
```
docker-compose down
```
#### Reconstruir imagens
```
docker-compose up --build
```
#### Ver logs do backend
```
docker-compose logs backend
```
#### Executar comandos dentro do container
```
docker-compose exec backend npm run seed
```
## 🧪 Testando com Postman
***Coleção de Exemplos***

#### Importe estas rotas no Postman para testar a API:

***1. Health Check***

****GET:**** http://localhost:3001/api/health

***2. Horas por Professor***

****GET:**** http://localhost:3001/api/professores/horas

***3. Horários das Salas***

****GET:**** http://localhost:3001/api/salas/horarios

***4. Salas Livres (com parâmetros)***
****GET**** http://localhost:3001/api/salas/livres?day=Monday&start=09:00&end=10:00

***5. Listar Professores***

****GET**** http://localhost:3001/api/professors

***6. Criar Novo Professor***

****POST**** http://localhost:3001/api/professors

Content-Type: application/json

{
  "name": "Seu Madruga",
  "department_id": 1,
  "title_id": 1
}
7. Buscar Professor por ID
text
GET http://localhost:3001/api/professors/1
8. Atualizar Professor
text
PUT http://localhost:3001/api/professors/1
Content-Type: application/json

{
  "name": "Professor Girafales Atualizado"
}

***9. Deletar Professor***

****DELETE**** http://localhost:3001/api/professors/1

###📋 Exemplo de Teste no Postman

***Testando Salas Livres:***

Abra o Postman e crie uma nova requisição GET

URL: http://localhost:3001/api/salas/livres?day=Monday&start=09:00&end=10:00

Clique em Send

Resposta esperada:

json
[
  {
    "id": 2,
    "room_name": "Sala 102",
    "building_name": "Prédio A"
  },
  {
    "id": 3,
    "room_name": "Sala 201",
    "building_name": "Prédio B"
  }
]
---
| Tabela		| Descrição				| 
|-----------------------|---------------------------------------|
|departments 		|Departamentos da escola		|
|titles			|Títulos dos professores		|
|professor		|Professores				|
|subjects		|Disciplinas				|
|subject_prerequisites	|Pré-requisitos das disciplinas		|
|buildings		|Prédios				|
|rooms			|Salas de aula				|
|classes		|Turmas					|
|class_schedules	|Horários das aulas			|

---
## 🔧 Variáveis de Ambiente
***Backend (.env)***
```
env
```
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=escola
DB_DIALECT=postgres
PORT=3001
FRONTEND_URL=http://localhost:3000
```
***Frontend***
```
env
```
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```
---
##🐛 Solução de Problemas
***Erro de Conexão com o Banco***

#### Verifique se o PostgreSQL está rodando
```
docker-compose logs postgres
```
#### Execute migrações manualmente
```
docker-compose exec backend npx sequelize-cli db:migrate
Portas Ocupadas
Verifique processos nas portas 3000, 3001, 5432
```
lsof -i :3000
lsof -i :3001
lsof -i :5432

#### Ou use docker para ver portas
```
docker ps
Reconstruir Projeto
```
#### Pare e remova tudo
```
docker-compose down -v
```
#### Reconstrua e inicie
```
docker-compose up --build
```
---
## 📞 Suporte
***Se encontrar problemas:***

- #### Verifique se todos os containers estão rodando: docker-compose ps
- #### Consulte os logs: docker-compose logs
- #### Verifique as variáveis de ambiente
- #### Certifique-se de que as portas não estão ocupadas
---
# 📝 Licença
- #### Este projeto é para fins educacionais e de demonstração.
- #### Desenvolvido por Renato Felix para o Professor Girafales 🎓
- #### "Tá tá tá tá tá!" - Professor Girafales
---
<img width="580" height="620" alt="image" src="https://github.com/user-attachments/assets/cdb39d03-0b53-4db3-9819-d7d0de25709e" />
