import React, { Component } from "react";
// import AppNavigator from "./navigation/AppNavigator";

import {
  StyleSheet,
  Alert,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
  Dimensions
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const { width: WIDTH } = Dimensions.get("window");

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
  input: {
    width: WIDTH - 75,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    color: "rgba(0, 206, 209, 0.7)",
    marginHorizontal: 25,
    marginTop: 10,
    marginBottom: 10
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
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 10
  }
});

export default class LoginScreen extends React.Component {
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
        <View styles={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Username"}
            placeholderTextColor={"rgba(0, 206, 209, 0.7)"}
            underlineColorAndroid="transparent"
          />
        </View>
        <View styles={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor={"rgba(0, 206, 209, 0.7)"}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate("Main")}
            title="Login"
            color="rgba(0, 206, 209, 0.7)"
            height="100"
            marginTop="50"
          />
        </View>
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  header: null
};
