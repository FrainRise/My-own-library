import React from 'react';
import './Navbar.scss'
import './responsive-navbar.scss'
import logo from '../../assets/images/logo_MyOwnLibrary.png'

import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
    state = {
        isToggled: false
    }

    toggleNavBtn = () => {
        this.setState({ isToggled: !this.state.isToggled})
    }

    componentDidMount(){
        const header = document.getElementById('navHeader');
        const sticky = header.offsetTop;

        const scrollCallback = window.addEventListener('scroll', () =>{
            if(window.pageYOffset > sticky){
                header.classList.add('sticky')
            } else {
                header.classList.remove('sticky')
            }
        })

        return () => {
            window.removeEventListener('scroll', scrollCallback)
        }
    }

    render(){
        return ( 
            <nav className="navbar" id="navHeader">
                <div className={this.state.isToggled ? 'hamburger-menu clicked': 'hamburger-menu'} onClick={this.toggleNavBtn}>
                    <div className="first-bar"></div>
                    <div className="second-bar"></div>
                    <div className="third-bar"></div>
                </div>
                <ul className={this.state.isToggled ? 'navbar-list show-list': 'navbar-list hide-list'}>
                    <NavLink to="/" style={{textDecoration: 'none'}}>
                        <li className="navbar-list__links">Home</li>
                    </NavLink>
                    <NavLink to="/about-us" style={{textDecoration: 'none'}}>
                        <li className="navbar-list__links">About</li>
                    </NavLink>
                    <a href="/#"><img className="navbar-list__logo" src={logo} alt="Logo"/></a>
                    <li className="navbar-list__links">Library</li>
                    <li className="navbar-list__links">Booklist</li>
                </ul>
            </nav>
        );
    }
    
}
 
export default Navbar;