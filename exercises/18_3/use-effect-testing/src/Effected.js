import React, { useState, useEffect } from 'react';

const Effected = () => {
  const [times, setTimes] = useState(0);
  const [aleatNumero, setAleatNumero] = useState(0);
  const [division, setDivision] = useState(false);

  useEffect(() => {
    console.log(`chamei ${times} vezes`);
    setTimeout(() => {
      setAleatNumero(Math.round(Math.random() * 100));
      const div = aleatNumero % 3 === 0 || aleatNumero % 5 === 0;
      setDivision(div);
      setTimes(times + 1);
    }, 3000)
  }, [aleatNumero, times]);
  return (
    <div>
      <h1>Teste</h1>
      <div>{aleatNumero}</div>
      <div>{division ? 'ACERTO' : null}</div>
    </div>
  )
}

export default Effected;
