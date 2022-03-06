import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import Layout from '../components/layouts/article';
import { ProjectGridItem } from '../components/grid-item';
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png';
import thumbWalknote from '../public/images/works/walknote_eyecatch.png';

const Projects = () => {
  return (
    <Layout>
      <Container maxW='container.md'>
        <Heading as='h3' fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <ProjectGridItem
              id='inkdrop'
              title='Inkdrop'
              thumbnail={thumbInkdrop}
            >
              A markdown note-taking app with 100+ plugins, cross-platform
            </ProjectGridItem>
          </Section>
          <Section delay={0.2}>
            <ProjectGridItem
              id='walknote'
              title='walknote'
              thumbnail={thumbWalknote}
            >
              A walkman app to play music on the go
            </ProjectGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as='h3' fontSize={20} mb={4}>
            Old works
          </Heading>
        </Section>
      </Container>
    </Layout>
  )
}

export default Projects;
