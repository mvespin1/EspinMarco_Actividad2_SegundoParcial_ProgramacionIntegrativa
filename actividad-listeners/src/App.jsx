// src/App.jsx
import React from 'react';
import './App.css'; // Importa tu archivo de estilos CSS
import ClickExample from './components/ClickExample';
import InputExample from './components/InputExample';

function App() {
  return (
    <div className="app-container">
      <h3 className="app-title">PROGRAMACIÓN INTEGRATIVA DE COMPONENTES WEB</h3>
      <h1 className="app-tema">Actividad - Tema 3: Eventos y Listeners</h1>
      <h2 className="app-integrantes">Integrantes: Escobar Juliana, Espín Marco</h2>
      <div className="examples-container">
        <ClickExample />
        <InputExample className="input-example" />
      </div>
    </div>
  );
}

export default App;
