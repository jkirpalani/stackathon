import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
// import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";

// import LinksScreen from '../screens/LinksScreen';
import SearchScreen from "../screens/SearchScreen";

// const HomeStack = createStackNavigator({
//   Home: HomeScreen
// });

// HomeStack.navigationOptions = {
//   tabBarLabel: "Home",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "android" ? "ios-home" : "md-home"}
//     />
//   )
// };

const SearchStack = createStackNavigator({
  Search: SearchScreen
});

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "android" ? "ios-search" : "md-search"}
    />
  )
};

const MapStack = createStackNavigator({
  Map: MapScreen
});

MapStack.navigationOptions = {
  tabBarLabel: "Map",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "android" ? "ios-pin" : "md-pin"}
    />
  )
};

export default createBottomTabNavigator({
  SearchStack,
  MapStack
});
