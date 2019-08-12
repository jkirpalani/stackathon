import React, { Component } from "react";
import {
  StyleSheet,
  Alert,
  View,
  Image,
  TouchableOpacity,
  Text,
  Button
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  text: {
    marginBottom: 400,
    color: "darkturquoise",
    fontSize: 70
  },
  backgroundContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  loginButton: {
    marginBottom: 40
  },
  buttonContainer: {
    color: "darkturquoise",
    width: "75%",
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 40
  }
});

export default class LandingPage extends React.Component {
  _onPressLogin() {
    Alert.alert("Button Pressed!");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <Image
            style={styles.backgroundImage}
            source={require("./../assets/images/login-image.jpg")}
          />
        </View>
        <View>
          <Text style={styles.text}>Consigliere</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate("Home")}
            title="Login"
            color="darkturquoise"
            padding="25"
            marginTop="50"
          />
        </View>
      </View>
    );
  }
}
