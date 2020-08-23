import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { PortfolioContext } from '../context/Portfolio';
import { ShowProjects } from '../components';
import StyledProjects from './Projects.styled';

const Projects = () => {
  const {
    setLocation, isFetching, setIsFetching, setGitHubInfo,
  } = useContext(PortfolioContext);

  useEffect(() => {
    setLocation('Projetos');
    setIsFetching(true);
    const url = 'https://gitconnected.com/v1/portfolio/johnatas-henrique';
    const fetchData = async () => {
      const response = await axios.get(url).catch((err) => err.response);
      if (response && response.status === 200) {
        setGitHubInfo(response.data);
        setIsFetching(false);
      }
      return response && response.status === 200 ? null : fetchData();
    };
    fetchData();
  }, []);
  return (
    <StyledProjects>
      <h1 className="title">MEUS PROJETOS</h1>
      {isFetching
        ? (
          <>
            <p className="loading">Carregando... </p>
            <p className="loading">Caso repare uma demora excessiva, verifique sua Internet</p>
          </>
        )
        : <ShowProjects />}
    </StyledProjects>
  );
};

export default Projects;
