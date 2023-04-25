import Logo from './logo';
import NextLink from 'next/link';
import {
  Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';

const portfolioLink = 'https://github.com/johnatas-henrique/johnatas-henrique.github.io';
const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha900');

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        borderRadius='5px'
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha900');

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('#fffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.lg'
        wrap='wrap'
        align='center'
        justify='space-between'
        paddingLeft={6}
        paddingRight={8}
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href='/projects' path={path}>
            Projetos
          </LinkItem>
          <LinkItem href='/contact' path={path}>
            Contato
          </LinkItem>
          <Link
            p={2}
            bg={undefined}
            color={inactiveColor}
            href={portfolioLink}
            target='_blank'
          >
            Ver código fonte
          </Link>
        </Stack>

        <Box flex={1} align='right'>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              />
              <MenuList>
                <NextLink href='/' passHref>
                  <MenuItem as={Link}>Sobre mim</MenuItem>
                </NextLink>
                <NextLink href='/projects' passHref>
                  <MenuItem as={Link}>Projetos</MenuItem>
                </NextLink>
                <NextLink href='/contact' passHref>
                  <MenuItem as={Link}>Contato</MenuItem>
                </NextLink>
                <MenuItem as={Link} href={portfolioLink} target='_blank'>
                  Ver código fonte
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar;
