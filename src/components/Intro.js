import React from 'react';
import '../css/intro.css';
import '../fonts/fonts.css';

class Intro extends React.Component {
    render() {
        const {
            introCopy
        } = this.props;
        return (
            <section className="intro__wrapper">
                <p className="intro__copy">{ introCopy }</p>
            </section>
        );
    }
}

export default Intro;