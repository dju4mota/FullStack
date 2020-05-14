import React, {useState} from 'react'

export default function Projects() {
const [projects , setProjects] = useState(['React'])

function handleAddProject(){
  setProjects([... projects, `Novo Projeto ${Date.now()}`])
  // não pode alterar o valor da variavel, e sim criar uma outra 
}

  return(
    <>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => <li key={project} >{project} </li> )}
      </ul>
      <button onClick={handleAddProject} >Adicionar</button>
    </>)
  
}