import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
// import { FirebaseWrapper } from "./firebase/firebase";
// import { firebaseConfig } from "./firebase/config";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import AppNavigator from "./navigation/AppNavigator";
// import LandingPage from "./components/LandingPage";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: "white" }} />
        {Platform.OS === "android" && <StatusBar barStyle="dark-content" />}
        {/* <LandingPage />  */}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png")
    ]),
    Font.loadAsync({
      ...Ionicons.font,
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1FE5EC"
  }
});

// FirebaseWrapper.GetInstance().Initialize(firebaseConfig);
