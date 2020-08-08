import React from 'react';
import { bool, func } from 'prop-types';
import StyledBurger from './Burger.styled';

const Burger = ({ openBurger, setOpenBurger }) => (
  <StyledBurger open={openBurger} onClick={() => setOpenBurger(!openBurger)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

Burger.propTypes = {
  openBurger: bool.isRequired,
  setOpenBurger: func.isRequired,
};

export default Burger;
