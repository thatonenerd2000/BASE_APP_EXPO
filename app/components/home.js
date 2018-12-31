import React, { Component } from "react";
import { Text, View, Dimensions } from "react-native";
import * as firebase from "firebase";

import Logo from "./Logo.js";
import FadeAnimation from "./animations/fadeAnimation.js";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      author: ""
    };
  }

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyCioQddo0zp-n1IkRq8Dc5izZ4vnz6T9HE",
      authDomain: "baseapp-3afb3.firebaseapp.com",
      databaseURL: "https://baseapp-3afb3.firebaseio.com",
      projectId: "baseapp-3afb3",
      storageBucket: "",
      messagingSenderId: "960035894579"
    };
    firebase.initializeApp(config);

    //database schema for pom
    // firebase
    //   .database()
    //   .ref("baseApp/pom")
    //   .set({
    //     quote: String
    //     author: String
    //   });

    firebase
      .database()
      .ref("baseApp/pom/quote")
      .once(
        "value",
        data => {
          let result = data.val();
          this.setState({
            quote: result
          });
        },

        error => {
          console.log(error);
        }
      );

    let dataAuthor = firebase
      .database()
      .ref("baseApp/pom/author")
      .once(
        "value",
        data => {
          let result = data.val();
          this.setState({
            author: result
          });
        },
        error => {
          console.log(error);
        }
      );
  }

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
            "{this.state.quote}""
          </Text>
          <Text
            style={{
              textAlign: "right",
              fontFamily: "Courier-Bold",
              margin: 20,
              top: vHeight / -8
            }}
          >
            -{this.state.author}
          </Text>
        </FadeAnimation>
      </View>
    );
  }
}
