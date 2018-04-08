import React from 'react';
import '../css/hero.css';
import '../fonts/fonts.css';

class Hero extends React.Component {
    render() {
        const {
            buttonContent
        } = this.props;
        return (
            <section className="hero__wrapper">
                <article className="hero__container">
                    <button className="hero__button" onClick={ this.props.chooseHero }>
                        { buttonContent }
                    </button>
                </article>
                <article className="hero__container">
                    <img className="hero__image" src={this.props.selectedHero} alt="Your Overwatch Hero Selection!" />
                </article>
            </section>
        );
    }
}

export default Hero;
