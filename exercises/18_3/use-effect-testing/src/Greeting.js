import React, { useState } from 'react';

const Greeting = () => {
  const [nome, setNome] = useState('');

  return (
    <div style={{ border: 1 + "px solid black" }}>
      <h1>Greeting Area</h1>
      <div>
        <input 
          type="text"
          onChange={((e) => setNome(e.target.value))}
          value={nome}
        />
        <h2>Greetings, {nome}.</h2>
      </div>
    </div>
  )
}

export default Greeting;
