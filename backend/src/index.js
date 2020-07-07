const express = require('express');
const cors = require('cors')
const {uuid} = require("uuidv4");

const app = express(); 
app.use(cors());    // -> permite QUALQUER FrontEnd se conectar ao nosso Backend
app.use(express.json())  // usar json no body dos parametros 

const projects = []

function logs(req, res , next){
  const {method, url} = req;
  console.log(`${method} ${url}`)

  return next();  // chama o próximo Middleware
}
app.use(logs)  // pode chamar junto de algum outro middleware/metodo 
// app.get('/projects', logs, (req, res) =>{  
// app.use('projects/:id', logs)

app.get('/projects', (req, res) =>{  
  const {name} = req.query;
  const results = name ? projects.filter(project => project.name.includes(name))
  : projects;  // operador ternario: se n passar nome ele manda a lista toda*
  
  return res.json(results);
})

app.post('/projects', (req, res) =>{
  const {name, owner } = req.body;   
  project = {
    id: uuid(),
    name,
    owner
  }
  projects.push(project)
  return res.json(project)
})

app.put('/projects/:id', (req, res) =>{  // id -> identificar qual item será alterado
  const {id} = req.params;
  const {name, owner} = req.body;
  
  const projectIndex = projects.findIndex(project => project.id === id)
  
  if(projectIndex < 0){
    return res.status(400)
  }
  const project = { id, name, owner };
  projects[projectIndex] = project;
  return res.json(project);
 
})

app.delete('/projects/:id', (req, res) =>{  // id -> identificar qual item será deletado
  const {id} = req.params;
  const projectIndex = projects.findIndex(project => project.id === id)
  if(projectIndex < 0){
    return res.status(400)
  }
  projects.splice(projectIndex,1)
  return res.status(204).send();
 
})

app.listen(3022,()=> console.log("🚀Back-End Iniciado e Rodando ..."));