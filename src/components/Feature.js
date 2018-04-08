import React from 'react';
import Button from './Button';
import '../css/feature.css';

class Feature extends React.Component {
    render () {
        return (
            <section className="feature__wrapper">
                <Button
                    buttonContent="Let's get to it already!"
                    chooseHero={ this.props.chooseHero }
                    selectedHero={ this.props.selectedHero }
                />
            </section>
        );
    }
}

export default Feature;
