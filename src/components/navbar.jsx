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
    if (window.scrollY > 70) {
      this.setState({ scrollClass: "sticky" });
    } else {
      this.setState({ scrollClass: "" });
    }
  }

  render() {
    const navItemsClass = `nav-items ${this.state.scrollClass}`
    return (
      <div className="navbar">
        <h2>L & C</h2>
        <div className={navItemsClass}>
          <span>WHAT'S NEW</span>
          <span>WOMEN</span>
          <span>MEN</span>
          <span>TEENS</span>
          <span>KIDS</span>
        </div>
      </div>
    );
  }
}

export default Navbar;
