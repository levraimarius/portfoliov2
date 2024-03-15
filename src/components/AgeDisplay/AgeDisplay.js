import React, { Component } from "react";

class AgeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.calculateAge(props.birthDate),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ age: this.calculateAge(this.props.birthDate) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  render() {
    return <li>J'ai {this.state.age} ans.</li>;
  }
}

export default AgeDisplay;
