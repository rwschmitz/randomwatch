import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './fonts/fonts.css';
import Header from './components/Header';
import Intro from './components/Intro';

class App extends React.Component {
  render() {
    return (
      <section>
        <Header
          headerTitle='Randomwatch'
          headerTagline='Need a hero? Same.'
        />
        <Intro
          introHeadline='Never know which hero to pick? Neither do I.'
        />
      </section>
    );
  }
}

export default App;
