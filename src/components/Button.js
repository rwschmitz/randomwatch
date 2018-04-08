import React from 'react';
import '../css/button.css';
import '../fonts/fonts.css';


class Button extends React.Component {

    render() {
        const {
            buttonContent
        } = this.props;
        return (
            <section>
                <button className="button__button" onClick={ this.props.chooseHero }>{ buttonContent }</button>
                <div className="test">
                    <img src={this.props.selectedHero} alt="wtf" />
                </div>
            </section>
        );
    }
}

export default Button;