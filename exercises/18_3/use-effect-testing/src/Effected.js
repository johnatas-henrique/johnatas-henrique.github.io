import React, { useContext } from 'react';
import { AllContext } from './AllContexts';

const Effected = () => {

  const { aleatNumero, division } = useContext(AllContext);
  
  return (
    <div>
      <h1>Teste</h1>
      <div>{aleatNumero}</div>
      <div>{division ? 'ACERTO' : null}</div>
    </div>
  )
}

export default Effected;
