import React from 'react';
import { bool } from 'prop-types';
import StyledMenu from './Menu.styled';

const Menu = ({ openBurger }) => (
  <StyledMenu open={openBurger}>
    <a href="/">
      <span role="img" aria-label="home">🏠</span>
      Home
    </a>
    <a href="/about">
      <span role="img" aria-label="sobre mim">😎</span>
      Sobre mim
    </a>
    <a href="/skills">
      <span role="img" aria-label="habilidades">🎲</span>
      Habilidades
    </a>
    <a href="/projects">
      <span role="img" aria-label="projetos">🔖</span>
      Projetos
    </a>
    <a href="/contact">
      <span role="img" aria-label="contato">&#x1f4e9;</span>
      Contato
    </a>
  </StyledMenu>
);

Menu.propTypes = {
  openBurger: bool.isRequired,
};

export default Menu;
