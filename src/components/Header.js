import React from 'react';
import '../css/header.css';
import '../fonts/fonts.css';

class Header extends React.Component {
    render() {
        const {
            headerTitle,
            headerTagline
        } = this.props;
        return (
            <section className="header__wrapper">
                <h1 className="header__title">{ headerTitle }</h1>
                <h2 className="header__tagline">{ headerTagline }</h2>
            </section>
        );
    }
}

export default Header;