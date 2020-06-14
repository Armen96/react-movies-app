import React from 'react';
import { Router } from '@reach/router';

import Header from './shared/elements/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Movie from './components/Movie';
import About from './components/About';

import { GlobalStyle } from './assets/styles/GlobalStyle';
import { Provider } from 'react-redux';
import configureStore from "./store";
import PostListContainer from "./components/PostListContainer";

const initialState = {};

const store = configureStore(initialState);

const App = () => (
    <Provider store={store}>
      <Header />
      <Router>
        <Home exac path="/" />
        <About exac path="/about"/>
        <PostListContainer exac path="/posts"/>
        <Movie exac path="/:movieId" />
        <NotFound default />
      </Router>
      <GlobalStyle />
    </Provider>
);

export default App;
