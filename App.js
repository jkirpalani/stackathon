import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FirebaseWrapper } from "./firebase/firebase";
import { firebaseConfig } from "./firebase/config";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import SettingsScreen from "./components/SettingsScreen";
import HomeScreen from "./components/HomeScreen";

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
});

FirebaseWrapper.GetInstance().Initialize(firebaseConfig);

export default createAppContainer(TabNavigator);

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={{ color: "red", fontSize: 30, borderColor: "red" }}>
//         Let us help you plan your day
//       </Text>
//       <View style={styles.container} />
//       <Text style={{ color: "blue", fontSize: 30 }}>
//         Let us help you plan your day
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#FFFFFF",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "blue",
//     fontSize: 30
//   },
//   text: {
//     fontSize: 30
//   }
// });
