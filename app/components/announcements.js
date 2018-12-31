import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";

export default class Announcements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: []
    };
  }

  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase
      .database()
      .ref("baseApp/Announcements")
      .once(
        "value",
        data => {
          let temp = [];
          var keys = Object.keys(data.val());
          for (var i = 0; i < keys.length; i++) {
            // this.state.subjects.push(data.val()[keys[i]].Subject);
            // this.state.content.push(data.val()[keys[i]].Content);
            temp.push(data.val()[keys[i]]);
          }
          temp.reverse();
          this.setState({
            announcements: temp
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  render() {
    let current = new Date();
    let ScreenHeight = Dimensions.get("window").height;
    let announcement = this.state.announcements.map(sub => {
      return (
        <TouchableOpacity>
          <View
            style={{
              margin: 5,
              borderStyle: "solid",
              borderWidth: 2,
              borderRadius: 20,
              padding: 25,
              backgroundColor: "#0e141d",
              height: null,
              textAlign: "left"
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "left",
                color: "white"
              }}
            >
              {sub.Subject}
            </Text>
            <Text style={{ textAlign: "left", color: "#42bff4", fontSize: 10 }}>
              {sub.PostedDate}
            </Text>
            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 1,
                marginTop: 10
              }}
            />
            <Text style={{ textAlign: "left", color: "white", marginTop: 10 }}>
              {sub.Content}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <ScrollView style={{ paddingTop: 20, flex: 1, backgroundColor: "black" }}>
        {announcement}
        {this.props.children}
      </ScrollView>
    );
  }
}

console.disableYellowBox = true;
