import React, { Component } from "react";
import { Animated } from "react-native";

export default class TranslateAnimation extends Component {
  constructor(props) {
    super(props);
    this.translateAnim = Animated.timing(this.state.translate, {
      toValue: 1,
      duration: 1000,
      delay: this.props.delay
    });
  }

  state = {
    translate: new Animated.Value(0)
  };

  render() {
    let translate = this.state.translate.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.from, this.props.to]
    });
    return (
      <Animated.View
        style={{
          transform: [{ translateY: translate }]
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
  componentDidMount() {
    this.translateAnim.start();
  }
}
