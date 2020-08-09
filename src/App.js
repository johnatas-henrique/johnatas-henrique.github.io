import React, { useContext, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './css/global';
import theme from './css/theme';
import { PortfolioContext } from './context/Portfolio';
import { Burger, Menu, Dock } from './components';
import { useOnClickOutside } from './hooks';
import {
  Main, About, Contact, Projects, Skills,
} from './pages';

const App = () => {
  const { openBurger, setOpenBurger } = useContext(PortfolioContext);
  const node = useRef();
  useOnClickOutside(node, () => setOpenBurger(false));
  return (
    /* isFetching
        ? <div>Loading</div>
        : ( */
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <Menu openBurger={openBurger} setOpenBurger={setOpenBurger} />
          <Burger openBurger={openBurger} setOpenBurger={setOpenBurger} />
        </div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route exact path="/" component={Main} />
        </Switch>
        <Dock />
      </>
    </ThemeProvider>
    /* ) */
  );
};

export default App;
