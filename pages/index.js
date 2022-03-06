import NextLink from 'next/link';
import { Container, Box, Heading, Image, Link, useColorModeValue, Button } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
  return (
    <Layout>
      <Container maxW='container.md' >
        <Box
          borderRadius='lg'
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign='center'
        >
          Olá, eu sou um desenvolvedor full-stack brasileiro!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Johnatas Henrique
            </Heading>
            <p>Desenvolvedor Web</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align='center'
          >
            <Image
              borderColor='whiteAlpha.800'
              borderWidth={2}
              borderStyle='solid'
              maxWidth='100px'
              display='inline-block'
              borderRadius='full'
              src='/images/myself.jpg'
              alt='Profile Image'
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Quem eu sou
          </Heading>
          <Paragraph>
            Trabalhando como pessoa instrutora na Trybe, ajudando outras pessoas a se tornarem desenvolvedoras de software full-stack.
            <br />
            Fiz recentemente uma transição de carreira, trabalhei por anos em outra área de tecnologia, a de suporte a TI.
            <br />
            Quando não estou online, gosto muito de pilotar minha moto e adoro trabalhar nos consertos da mecânica dela, é um de meus hobbies.
            <br />
            Como projeto pessoal, estou desenvolvendo o{' '}
            {/* <NextLink href='/projects/fake-racer'> */}
            <Link href='https://johnatas-henrique.github.io/fake-racer/' target='_blank'>
              {/* <a target='_blank' rel='noopener noreferrer'> */}
                Fake-Racer
              {/* </a> */}
            </Link>
            {/* </NextLink> */}
            {' '}que é um jogo de corridas inspirado nos clássicos da era 16 bit.
          </Paragraph>
          <Box align='center' my={4}>
            <NextLink href='/projects' passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme='teal' >
                Meus projetos
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Bio
          </Heading>
          <BioSection>
            <BioYear>2020</BioYear>
            Iniciei como pessoa instrutora na Trybe, onde estou até hoje.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Finalizei minha formação em desenvolvimento Web na Trybe.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Iniciei minha mudança de carreira para a área de desenvolvimento web.
          </BioSection>
          <BioSection>
            <BioYear>2004</BioYear>
            Finalizei o técnologo de redes de computadores na Faculdade Drummond.
          </BioSection>
          <BioSection>
            <BioYear>1988</BioYear>
            Nasci em São Paulo, Brasil.
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Eu ♥
          </Heading>
          <Paragraph>
            Videogames, Mecânica, Animes, Fórmula 1
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page;
