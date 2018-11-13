import React, { Component } from "react";
import { AppRegistry, Text, View, StyleSheet } from "react-native";

import Logo from "./app/components/Logo.js";
import BackgroundImage from "./app/components/BackgroundImage.js";
import Menu from "./app/components/menu.js";

export default class Base extends Component {
  render() {
    return (
      <BackgroundImage>
        <Logo />
        <View style={styles.menuContainer}>
          <Menu itemImage={require("./media/menu/announcements.png")} />
          <Menu itemImage={require("./media/menu/calendar.png")} />
          <Menu itemImage={require("./media/menu/staff.png")} />
          <Menu itemImage={require("./media/menu/contact.png")} />
          <Menu itemImage={require("./media/menu/student.png")} />
          <Menu itemImage={require("./media/menu/about.png")} />
        </View>
      </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    top: -150,
    height: "40%",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

AppRegistry.registerComponent("Base", () => Base);
