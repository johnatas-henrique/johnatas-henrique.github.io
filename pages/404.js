import NextLink from 'next/link';
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Image
} from '@chakra-ui/react';
import Layout from '../components/layouts/article';

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <Heading as='h1'>Não encontrada</Heading>
        <Text>A página que você procura não foi encontrada.</Text>
        <Image
          display='inline-block'
          src='/images/caveman.gif'
          alt='404 Caveman'
        />
        <Divider my={6} />

        <Box my={6} align='center'>
          <NextLink href='/' passHref>
            <Button colorScheme='teal'>Voltar ao início</Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFound;
