import { useEffect, useState } from 'react'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { ProjectGridItem } from '../components/grid-item'
import fetchApiData from '../libs/fetchApiData'
import Loading from '../components/loading'

const Projects = () => {
  const [apiData, setApiData] = useState([])
  const url = 'https://gitconnected.com/v1/portfolio/johnatas-henrique'

  useEffect(() => {
    fetchApiData(url, setApiData)
  }, [])

  const { projects } = apiData

  return (
    <Layout>
      <Container maxW="container.lg">
        <Heading as="h3" fontSize={20} mb={4}>
          Projetos
        </Heading>
        {projects ? (
          <>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              {projects.map(project => (
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
          <Loading />
        )}
      </Container>
    </Layout>
  )
}

export default Projects
