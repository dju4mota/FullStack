import React, {useEffect, useState} from 'react';
import api from './services/api.js'

export default function App(){

  const [projects , setProjects] = useState([]);
  // não pode alterar o valor da variavel, e sim criar uma outra 

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  },[]); // array vazio executa quando começa

  async function handleAddProject(){
    //setProjects([... projects, `Novo Projeto ${Date.now()}`])
    const response = await api.post('/projects',{
      name : `Novo Projeto ${Date.now()}`,
      owner : "djuzin e Samumu"
    })
    const project = response.data;
    setProjects([...projects, project]);
  }

  return(
    <>
      <h1>Projects </h1>
      <ul>
        {projects.map(project => <li key={project.id} >{project.name} - {project.owner} </li> )}
      </ul>
      <button onClick={handleAddProject} >Adicionar</button>
    </>)
}