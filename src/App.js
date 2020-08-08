import React, { useContext, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './css/global';
import theme from './css/theme';
import { PortfolioContext } from './context/Portfolio';
import { Burger, Menu } from './components';
import { useOnClickOutside } from './hooks';

const App = () => {
  const { isFetching, openBurger, setOpenBurger } = useContext(PortfolioContext);
  const node = useRef();
  useOnClickOutside(node, () => setOpenBurger(false));
  return (
    isFetching
      ? <div>Loading</div>
      : (
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <div>
              <h1>Hello. This is burger menu tutorial</h1>
              <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
              <small>Icon made by Freepik from www.flaticon.com</small>
            </div>
            <div ref={node}>
              <Menu openBurger={openBurger} setOpenBurger={setOpenBurger} />
              <Burger openBurger={openBurger} setOpenBurger={setOpenBurger} />
            </div>
          </>
        </ThemeProvider>
      )
  );
};

export default App;
