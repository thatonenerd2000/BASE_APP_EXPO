import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  Easing
} from "react-native";

import BaseLogo from "../../media/logo.png";
import FadeAnimation from "./animations/fadeAnimation.js";
import ScaleAnimation from "./animations/scaleAnimation.js";
import TranslateAnimation from "./animations/translateAnimation.js";

export default class Logo extends Component {
  constructor(props) {
    super(props);
    Animated.parallel([
      (this.logoScaleAnimation = new Animated.timing(this.state.scale, {
        toValue: { x: 1.1, y: 1.1 },
        duration: 1500,
        delay: 200
      })),
      (this.logoScaleAnimation2 = new Animated.timing(this.state.scale, {
        toValue: { x: 0.5, y: 0.5 },
        duration: 1500,
        delay: 3000
        // easing: Easing.back()
      })),
      (this.logoTranslateAnimation = new Animated.timing(this.state.translate, {
        toValue: 1,
        duration: 1000
      })),
      (this.logoPosAnimation = new Animated.timing(this.state.position, {
        toValue: 1,
        duration: 1000,
        delay: 3200
      })),
      (this.fadeOut = new Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 1000,
        delay: 3200
      })),
      (this.logoSpinAnimation = new Animated.timing(this.state.spin, {
        toValue: 1,
        duration: 2000,
        delay: 2000,
        easing: Easing.back()
      }))
    ]);
  }
  state = {
    translate: new Animated.Value(0),
    scale: new Animated.ValueXY({ x: 0.8, y: 0.8 }),
    position: new Animated.Value(0),
    opacity: new Animated.Value(1),
    spin: new Animated.Value(0)
  };
  render() {
    const vHeight = Dimensions.get("window").height;
    const vWidth = Dimensions.get("window").width;
    const logPosition = {
      top: vHeight / 5,
      height: vHeight / 3,
      width: vWidth / 3
    };
    let translate = this.state.translate.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 50, -100]
    });
    let position = this.state.position.interpolate({
      inputRange: [0, 1],
      outputRange: [logPosition.top, -100]
    });
    let spin = this.state.spin.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    return (
      <View>
        <FadeAnimation delay={500}>
          <Animated.View
            style={{
              height: logPosition.height,
              width: logPosition.width,
              top: position,
              left: vWidth / 3,
              transform: [{ translateY: translate }]
            }}
          >
            <Animated.Image
              source={BaseLogo}
              style={{
                resizeMode: "contain",
                flex: 1,
                height: "100%",
                width: "100%",
                transform: [
                  { scaleX: this.state.scale.x },
                  { scaleY: this.state.scale.y },
                  { rotate: spin }
                ]
              }}
            />
          </Animated.View>
        </FadeAnimation>
        <FadeAnimation delay={500}>
          <View>
            <Animated.Text
              style={{
                top: vHeight / 5,
                textAlign: "center",
                color: "white",
                fontFamily: "AppleSDGothicNeo-Bold",
                fontSize: vHeight / 15,
                color: "#65b3a9",
                opacity: this.state.opacity
              }}
            >
              B.A.S.E.
            </Animated.Text>
          </View>
        </FadeAnimation>
      </View>
    );
  }
  componentDidMount() {
    this.logoScaleAnimation.start();
    this.logoScaleAnimation2.start();
    this.logoTranslateAnimation.start();
    this.logoPosAnimation.start();
    this.fadeOut.start();
    this.logoSpinAnimation.start();
  }
}
