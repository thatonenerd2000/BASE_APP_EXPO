import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

import TranslateAnimation from "./animations/translateAnimation.js";
import FadeAnimation from "./animations/fadeAnimation";

export default class Menu extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.menuItem}>
        <TranslateAnimation from={360} to={-20} delay={3200}>
          <FadeAnimation delay={3500}>
            <Image source={this.props.itemImage} style={styles.image} />
          </FadeAnimation>
        </TranslateAnimation>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  menuItem: {
    width: "50%",
    height: "60%",
    padding: 20
  },

  image: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
    borderColor: "#fff",
    borderWidth: 3,
    resizeMode: "stretch"
  }
});
