import React, { Component } from "react";
import { Animated } from "react-native";

export default class ScaleAnimation extends Component {
  constructor(props) {
    super(props);
    this.scaleAnim = Animated.timing(this.state.scale, {
      toValue: { x: 1.1, y: 1.1 },
      duration: 1500,
      delay: 200
    });
  }

  state = {
    scale: new Animated.ValueXY({ x: 0.8, y: 0.8 })
  };

  render() {
    return (
      <Animated.View
        style={{
          transform: [
            { scaleX: this.state.scale.x },
            { scaleY: this.state.scale.y }
          ]
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
  componentDidMount() {
    this.scaleAnim.start();
  }
}
