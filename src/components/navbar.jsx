import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleScrollEvent = this.handleScrollEvent.bind(this);
    this.state = {
      scrollClass: ''
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollEvent);
  }

  handleScrollEvent() {
    if (window.scrollY > 100) {
      this.setState({ scrollClass: 'sticky' });
    } else {
      this.setState({ scrollClass: '' });
    }
  }

  render() {
    const navbarClass = `navbar ${this.state.scrollClass}`
    return (
      <div>
        <div className={navbarClass}>
          <div className='nav-items'>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/designs/new' activeClassName='is-active'>WHAT'S NEW</NavLink>
            <NavLink to='/designs/women' exact={true} activeClassName='is-active'>WOMEN</NavLink>
            <NavLink to='/designs/men' activeClassName='is-active'>MEN</NavLink>
            <NavLink to='/designs/teens_kids' activeClassName='is-active'>TEENS & KIDS</NavLink>
          </div>
          <div className='logo'>
              <span className='span-abs'></span>
              <h3>L & C</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
