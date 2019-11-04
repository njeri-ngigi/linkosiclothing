import React, { Component } from "react";
import "../styles/navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleScrollEvent = this.handleScrollEvent.bind(this);
    this.state = {
      scrollClass: ''
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollEvent);
  }

  handleScrollEvent() {
    if (window.scrollY > 50) {
      this.setState({ scrollClass: "sticky" });
    } else {
      this.setState({ scrollClass: "" });
    }
  }

  render() {
    const navbarClass = `navbar ${this.state.scrollClass}`
    return (
      <div>
        <div className={navbarClass}>
          <div className="nav-items">
            <span><u>WHAT'S NEW</u></span>
            <span>WOMEN</span>
            <span>MEN</span>
            <span>TEENS</span>
            <span>KIDS</span>
          </div>
          <div className="logo">
              <span className="span-abs"></span>
              <h3>L & C</h3>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Navbar;
