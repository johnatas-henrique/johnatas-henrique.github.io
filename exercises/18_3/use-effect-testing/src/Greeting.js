import React, { useContext } from 'react';
import { AllContext } from './AllContexts';

const Greeting = () => {

  const { nome, alteraNome } = useContext(AllContext);

  return (
    <div style={{ border: 1 + "px solid black" }}>
      <h1>Greeting Area</h1>
      <div>
        <input
          type="text"
          onChange={((e) => alteraNome(e))}
          value={nome}
        />
        {nome ? <p>Greetings {nome}</p> : <p>Escreva um nome na caixa</p>}
      </div>
    </div>
  )
}

export default Greeting;
