import React from 'react';
import './style.css';
import './fonts/fonts.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Hero from './components/Hero';
import ana from './img/ana.png';
import bastion from './img/bastion.png';
import brigitte from './img/brigitte.png';
import doomfist from './img/doomfist.png';
import dva from './img/dva.png';
import genji from './img/genji.png';
import hanzo from './img/hanzo.png';
import junkrat from './img/junkrat.png';
import lucio from './img/lucio.png';
import mcree from './img/mcree.png';
import mei from './img/mei.png';
import mercy from './img/mercy.png';
import moira from './img/moira.png';
import orisa from './img/orisa.png';
import pharah from './img/pharah.png';
import reaper from './img/reaper.png';
import reinhardt from './img/reinhardt.png';
import roadhog from './img/roadhog.png';
import s76 from './img/s76.png';
import sombra from './img/sombra.png';
import sym from './img/sym.png';
import torb from './img/torb.png';
import tracer from './img/tracer.png';
import widow from './img/widow.png';
import winston from './img/winston.png';
import zarya from './img/zarya.png';
import zen from './img/zen.png';

class App extends React.Component {

  state = {
    selectedHero: '',
    heroName: ''
}

chooseHero = () => {
    const heroArray = [
        ana, bastion, brigitte, doomfist, dva, genji, hanzo, junkrat, lucio, mcree, mei, mercy, moira, orisa, pharah, reaper, reinhardt, roadhog, s76, sombra, sym, torb, tracer, widow, winston, zarya, zen
    ];
    const randomHero = heroArray[Math.floor(Math.random()*heroArray.length)];
    const heroName = randomHero.split('/').join('.').split('.')[3];
    this.setState({
        selectedHero: randomHero,
        heroName: heroName
    });
    return (heroName);
}

  render() {
    return (
      <section className="app__wrapper">
        <Header
          headerTitle='Randomwatch'
          headerTagline='Need a hero? Same.'
        />
        <Intro
          introCopy='Click the button below and let fate decide who you should play.'
        />
        <Hero
          chooseHero={ this.chooseHero }
          selectedHero={ this.state.selectedHero }
          heroName={ this.state.heroName }
          buttonContent="Let's get to it already!"
        />
      </section>
    );
  }
}

export default App;
