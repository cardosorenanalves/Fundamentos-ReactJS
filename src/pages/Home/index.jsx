import React, { useState} from 'react';
import './style.css';

import { Card } from '../../components/Card';

export function Home() {
  const[studentName, setStudentName] = useState("Renan");

  return (
    <div className='container'>
      <h1>Nome: {studentName}</h1>

      <input type="text"
       placeholder="Digite o nome..." 
      onChange={e => setStudentName(e.target.value) }/>

      <button type="button">Adicionar</button>

      <Card name="Rodrigo Alves Cardoso" time="15:23:02"/>
      <Card name="Renan Alves Cardoso" time="12:05:56"/>
    </div>
    )
}

