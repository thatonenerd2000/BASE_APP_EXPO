import React, { Component } from "react";
import { Text, View, Dimensions } from "react-native";

import Logo from "./Logo.js";
import FadeAnimation from "./animations/fadeAnimation.js";

export default class Home extends Component {
  render() {
    const vHeight = Dimensions.get("window").height;
    const vWidth = Dimensions.get("window").width;
    return (
      <View>
        {this.props.children}
        <Logo />
        <FadeAnimation delay={3300}>
          <View
            style={{
              textAlign: "center",
              position: "relative",
              top: vHeight / -10
            }}
          >
            <Text
              style={{
                textAlign: "center",
                position: "relative",
                fontFamily: "Futura",
                fontSize: vHeight / 25
              }}
            >
              Phrase of the Month
            </Text>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 3,
                width: vWidth / 2,
                left: vWidth / 4
              }}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Courier-Bold",
              margin: 20,
              top: vHeight / -10
            }}
          >
            “Only those who will risk going too far can possibly find out how
            far one can go.”
          </Text>
          <Text
            style={{
              textAlign: "right",
              fontFamily: "Courier-Bold",
              margin: 20,
              top: vHeight / -8
            }}
          >
            -TS Eliot
          </Text>
        </FadeAnimation>
      </View>
    );
  }
}
