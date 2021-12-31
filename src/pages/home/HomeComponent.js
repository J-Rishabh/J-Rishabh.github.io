import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Section1 from "../../containers/section1/Section1";
import Section2 from "../../containers/section2/Section2";
import Section3 from "../../containers/section3/Section3";
import Section4 from "../../containers/section4/Section4";
import Section5 from "../../containers/section5/Section5";

import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    console.log(this.props.theme);
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Section1 theme={this.props.theme} />
        <Section2 theme={this.props.theme} />
        <Section3 theme={this.props.theme} />
        <Section4 theme={this.props.theme} />
        <Section5 theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
