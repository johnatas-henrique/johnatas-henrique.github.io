import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PortfolioContext } from '../../context/Portfolio';
import StyledShowProjects from './ShowProjects.styled';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ShowProjects = () => {
  const { gitHubInfo } = useContext(PortfolioContext);
  const { projects } = gitHubInfo;
  return (
    <StyledShowProjects>
      <div className="carousel">
        <Carousel
          containerClass="carousel-container"
          responsive={responsive}
          removeArrowOnDeviceType={['mobile']}
          showDots
          draggable
          infinite
          ssr
        >
          {projects.slice(1, projects.length).map(({
            githubUrl, displayName, images, summary, website,
          }) => {
            const image = images[0].resolutions.mobile.url;
            return (
              <div className="flex-container" key={githubUrl}>
                <div className="image-container">
                  <img className="image" src={image} alt="Imagem do Projeto" />
                </div>
                <div className="text-container">
                  <h1 className="project-title">{displayName}</h1>
                  <p>{summary}</p>
                  <div className="links-container">
                    <a target="_blank" rel="noopener noreferrer" href={website}>
                      <button className="btn" type="button">Veja o site!</button>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={githubUrl}>
                      <button className="btn" type="button">Repositório</button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </StyledShowProjects>
  );
};

export default ShowProjects;
