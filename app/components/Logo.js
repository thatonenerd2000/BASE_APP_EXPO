import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

import BaseLogo from "../../media/logo.png";
import FadeAnimation from "./animations/fadeAnimation.js";
import ScaleAnimation from "./animations/scaleAnimation.js";
import TranslateAnimation from "./animations/translateAnimation.js";

export default class Logo extends Component {
  render() {
    const vHeight = Dimensions.get("window").height;
    const vWidth = Dimensions.get("window").width;

    const logPosition = {
      top: vHeight - vHeight / 1.13,
      height: vHeight / 3,
      width: vWidth / 3
    };

    return (
      <View>
        <FadeAnimation>
          <ScaleAnimation>
            <TranslateAnimation>
              <View
                style={{
                  height: logPosition.height,
                  width: logPosition.width,
                  top: logPosition.top,
                  left: vWidth / 3
                }}
              >
                <Image
                  source={BaseLogo}
                  style={{
                    resizeMode: "contain",
                    flex: 1,
                    height: "100%",
                    width: "100%"
                  }}
                />
              </View>
            </TranslateAnimation>
          </ScaleAnimation>
        </FadeAnimation>
        <FadeAnimation>
          <View>
            <Text
              style={{
                top: logPosition.top + logPosition.height / 6,
                textAlign: "center",
                color: "white",
                fontFamily: "AppleSDGothicNeo-Bold",
                fontSize: vHeight / 15,
                color: "#65b3a9"
              }}
            >
              B.A.S.E.
            </Text>
          </View>
        </FadeAnimation>
      </View>
    );
  }
}
