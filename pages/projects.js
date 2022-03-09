import { useEffect, useState } from 'react';
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import axios from 'axios';
import Section from '../components/section';
import Layout from '../components/layouts/article';
import { ProjectGridItem } from '../components/grid-item';
import P from '../components/paragraph';

const fetchData = async (setApiData) => {
  const url = 'https://gitconnected.com/v1/portfolio/johnatas-henrique';
  const { data } = await axios.get(url).catch(e => console.error(e));
  setApiData(data);
}

const Projects = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchData(setApiData);
  }, []);
  
  const { projects } = apiData;

  return (
    <Layout>
      <Container maxW='container.lg'>
        <Heading as='h3' fontSize={20} mb={4}>
          Projetos
        </Heading>
        {projects ? (
          <>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              {projects.map((project) => (
                <Section delay={0.1} key={project.name}>
                  <ProjectGridItem
                    id={project.name}
                    title={project.displayName}
                    thumbnail={project.images[0].resolutions.desktop.url}
                  >
                    {project.summary}
                  </ProjectGridItem>
                </Section>
              ))}
            </SimpleGrid>

            <Divider my={6} />
          </>
        ) : (
          <P>
            Carregando...
          </P>
        )}
      </Container>
    </Layout>
  )
}

export default Projects;
