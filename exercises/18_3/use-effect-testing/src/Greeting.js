import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const locStorParse = () => {
    return localStorage.getItem('nome') || '';
  }
  const [nome, setNome] = useState(locStorParse);

  useEffect(() => {
    localStorage.setItem('nome', nome);
  }, [nome]);

  return (
    <div style={{ border: 1 + "px solid black" }}>
      <h1>Greeting Area</h1>
      <div>
        <input
          type="text"
          onChange={((e) => setNome(e.target.value))}
          value={nome}
        />
        {nome ? <p>Greetings {nome}</p> : <p>Escreva um nome na caixa</p>}
      </div>
    </div>
  )
}

export default Greeting;
