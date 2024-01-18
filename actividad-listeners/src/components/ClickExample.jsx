import React from 'react';
import './ClickExample.css'; // Importa tu archivo de estilos CSS

const ClickExample = () => {
  const handleClick = () => {
    alert('¡Botón clickeado!');
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      Clickea aquí
    </button>
  );
};

export default ClickExample;
