import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
// import MapScreen from "./../screens/MapScreen";
import LoginScreen from "../screens/LoginScreen";
// import Map from "../screens/MapScreen";

// const AppStack = createStackNavigator({
//   //   SearchRoute: Search,
//   //   ResultRoute: Result,
//   MapRoute: MapScreen
// });

const AuthStack = createStackNavigator({
  LoginRoute: LoginScreen
});

export default createAppContainer(
  createSwitchNavigator({
    Auth: AuthStack,
    // App: AppStack,
    Main: MainTabNavigator
  })
);
