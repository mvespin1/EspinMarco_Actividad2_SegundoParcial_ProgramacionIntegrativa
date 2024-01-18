import React, { useState } from 'react';
import './InputExample.css'; // Importa tu archivo de estilos CSS

const InputExample = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      className="custom-input"
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="Escribe algo"
    />
  );
};

export default InputExample;
