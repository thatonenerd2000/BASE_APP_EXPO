import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground
} from "react-native";

import bgimg from "../../media/bg.jpg";

export default class BackgroundImage extends Component {
  render() {
    return (
      <ImageBackground
        source={bgimg}
        style={{
          resizeMode: "stretch",
          flex: 1
        }}
      >
        {this.props.children}
      </ImageBackground>
    );
  }
}
