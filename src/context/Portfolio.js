import React, { createContext, useState } from 'react';
import { node } from 'prop-types';

const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [openBurger, setOpenBurger] = useState(false);
  const [gitHubInfo, setGitHubInfo] = useState(null);
  const [location, setLocation] = useState(null);

  const contextValues = {
    isFetching,
    setIsFetching,
    openBurger,
    setOpenBurger,
    gitHubInfo,
    setGitHubInfo,
    location,
    setLocation,
  };

  return (
    <PortfolioContext.Provider value={contextValues}>
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioProvider };

PortfolioProvider.propTypes = {
  children: node.isRequired,
};
