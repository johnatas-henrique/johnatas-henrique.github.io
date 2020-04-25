import React, { createContext, useState, useEffect } from 'react';

const AllContext = createContext();

const AllProvider = ({ children }) => {
  const [times, setTimes] = useState(0);
  const [aleatNumero, setAleatNumero] = useState(0);
  const [division, setDivision] = useState(false);
  const [nome, setNome] = useState(localStorage.getItem('nome') || '');

  const alteraNome = (e) => {
    setNome(e.target.value);
  }

  useEffect(() => {
    localStorage.setItem('nome', nome);
  }, [nome]);

  useEffect(() => {
    console.log(`chamei ${times} vezes`);
    setTimeout(() => {
      setAleatNumero(Math.round(Math.random() * 100));
      const div = aleatNumero % 3 === 0 || aleatNumero % 5 === 0;
      setDivision(div);
      setTimes(times + 1);
    }, 3000)
  }, [aleatNumero]);

  const context = {
    times,
    aleatNumero,
    division,
    nome,
    alteraNome,
  };

  return (
    <AllContext.Provider value = {context}>
      {children}
    </AllContext.Provider>
  );
}

export { AllContext, AllProvider };
