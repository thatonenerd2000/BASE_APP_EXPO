import React, { Component } from "react";
import { AppRegistry, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomNavigation, {
  FullTab
} from "react-native-material-bottom-navigation";

import Home from "./app/components/home.js";
import BackgroundImage from "./app/components/BackgroundImage.js";
import FadeAnimation from "./app/components/animations/fadeAnimation.js";

export default class HomeScreen extends Component {
  tabs = [
    {
      key: "Announcements",
      icon: "bullhorn",
      label: "Announcements",
      barColor: "#388E3C",
      pressColor: "rgba(255, 255, 255, 0.16)"
    },
    {
      key: "Home",
      icon: "home",
      label: "Home",
      barColor: "#B71C1C",
      pressColor: "rgba(255, 255, 255, 0.16)"
    },
    {
      key: "Calendar",
      icon: "calendar",
      label: "Calendar",
      barColor: "#E64A19",
      pressColor: "rgba(255, 255, 255, 0.16)"
    }
  ];

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  );

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  );

  render() {
    return (
      <View style={{ flex: 1, position: "relative", top: 0 }}>
        <View style={{ flex: 1 }}>
          <BackgroundImage>
            <Home />
          </BackgroundImage>
        </View>
        <FadeAnimation delay={500}>
          <BottomNavigation
            onTabPress={newTab => this.setState({ activeTab: newTab.key })}
            renderTab={this.renderTab}
            tabs={this.tabs}
          />
        </FadeAnimation>
      </View>
    );
  }
}

AppRegistry.registerComponent("HomeScreen", () => HomeScreen);
