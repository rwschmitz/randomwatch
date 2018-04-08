import React from 'react';
import '../css/intro.css';
import '../fonts/fonts.css';

class Intro extends React.Component {
    render() {
        const {
            introHeadline
        } = this.props;
        return (
            <section className="intro__wrapper">
                <h3 className="intro__headline">{ introHeadline }</h3>
            </section>
        );
    }
}

export default Intro;