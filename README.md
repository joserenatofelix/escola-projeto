# 🏫 Sistema Escolar - Professor Girafales
https://img.shields.io/badge/Node.js-18-green
https://img.shields.io/badge/Next.js-14-black
https://img.shields.io/badge/PostgreSQL-15-blue
https://img.shields.io/badge/Docker-Compose-blue

#### Sistema moderno de gestão escolar desenvolvido para atender às necessidades do Professor Girafales, incluindo controle de professores, salas, disciplinas e horários.

## ✨ Funcionalidades
- #### 📊 Dashboard de Horas por Professor - Visualize a carga horária de cada professor
- #### 🏫 Gestão de Salas - Consulte horários ocupados e disponíveis
- #### 👨‍🏫 Controle de Professores - Gerencie professores e suas disciplinas
- #### 📅 Agenda Escolar - Visualize a grade horária completa
- #### 🔍 Salas Livres - Encontre salas disponíveis em horários específicos

##🏗️ Arquitetura

text
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

## 🚀 Como Executar

### Pré-requisitos
- #### Docker e Docker Compose instalados
- #### Git para clonar o repositório

### **Método 1:** Docker Compose (Recomendado)
```
Clone o repositório (se aplicável)
git clone <url-do-repositorio>
```
#### Navegue até o diretório do projeto
```
cd escola-projeto
```
#### Execute o docker-compose
```
docker-compose up -d
```
#### Para ver os logs em tempo real
```
docker-compose logs -f
```
### **Método 2:**  Execução Manual
***Backend (Node.js)***
```
cd escola-backend
```
#### Instale as dependências
```
npm install
```
#### Configure as variáveis de ambiente
```
cp .env.example .env
```
#### Execute o seed do banco de dados
```
npm run seed
```
#### Inicie o servidor
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
- #### Frontend: http://localhost:3001
- #### Backend API: http://localhost:3000
- #### Health Check: http://localhost:3000/api/health
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

****GET:**** http://localhost:3000/api/health

***2. Horas por Professor***

****GET:**** http://localhost:3000/api/professores/horas

***3. Horários das Salas***

****GET:**** http://localhost:3000/api/salas/horarios

***4. Salas Livres (com parâmetros)***
****GET**** http://localhost:3000/api/salas/livres?day=Monday&start=09:00&end=10:00

***5. Listar Professores***

****GET**** http://localhost:3000/api/professors

***6. Criar Novo Professor***

****POST**** http://localhost:3000/api/professors

Content-Type: application/json

{
  "name": "Seu Madruga",
  "department_id": 1,
  "title_id": 1
}
7. Buscar Professor por ID
text
GET http://localhost:3000/api/professors/1
8. Atualizar Professor
text
PUT http://localhost:3000/api/professors/1
Content-Type: application/json

{
  "name": "Professor Girafales Atualizado"
}

***9. Deletar Professor***

****DELETE**** http://localhost:3000/api/professors/1

###📋 Exemplo de Teste no Postman

***Testando Salas Livres:***

Abra o Postman e crie uma nova requisição GET

URL: http://localhost:3000/api/salas/livres?day=Monday&start=09:00&end=10:00

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
PORT=3000
FRONTEND_URL=http://localhost:3001
```
***Frontend***
```
env
```
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```
---
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
```
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