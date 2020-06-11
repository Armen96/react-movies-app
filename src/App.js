import React from 'react';
import { Router } from '@reach/router';

import Header from './shared/elements/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Movie from './components/Movie';
import About from './components/About';

import { GlobalStyle } from './assets/styles/GlobalStyle';

const App = () => (
    <>
      <Header />
      <Router>
        <Home exac path="/" />
        <About exac path="/about"/>
        <Movie exac path="/:movieId" />
        <NotFound default />
      </Router>
      <GlobalStyle />
    </>
);

export default App;
