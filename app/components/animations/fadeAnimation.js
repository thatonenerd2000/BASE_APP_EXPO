import React, { Component } from "react";
import { Animated } from "react-native";

export default class FadeAnimation extends Component {
  constructor(props) {
    super(props);
    this.fadeAnim = Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000,
      delay: this.props.delay
    });
  }

  state = {
    fadeAnim: new Animated.Value(0)
  };

  render() {
    return (
      <Animated.View style={{ opacity: this.state.fadeAnim }}>
        {this.props.children}
      </Animated.View>
    );
  }
  componentDidMount() {
    this.fadeAnim.start();
  }
}
