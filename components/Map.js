import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { FirebaseWrapper } from "./firebase/firebase";
// import { firebaseConfig } from "./firebase/config";
// import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import MapView from "react-native-maps";
// import SettingsScreen from "./components/SettingsScreen";
// import HomeScreen from "./components/HomeScreen";
import * as Permissions from "expo-permissions";
// import Polyline from "@mapbox/polyline";

// const locations = require("./locations.json");

// const TabNavigator = createBottomTabNavigator({
//   Home: HomeScreen,
//   Settings: SettingsScreen
// });

// FirebaseWrapper.GetInstance().Initialize(firebaseConfig);

// export default createAppContainer(TabNavigator);

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: null,
      longitude: null
      // locations: locations
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status !== "granted") {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        this.setState({ latitude, longitude }),
      error => console.log("Error:", error)
    );

    // const {
    //   locations: [sampleLocation]
    // } = this.state;

    // this.setState(
    //   {
    //     desLatitude: sampleLocation.coords.latitude,
    //     desLongitude: sampleLocation.coords.longitude
    //   },
    //   this.mergeCoords
    // );
  }

  // mergeCoords = () => {
  //   const { latitude, longitude, desLatitude, desLongitude } = this.state;

  //   const hasStartAndEnd = latitude !== null && desLatitude !== null;
  //   if (hasStartAndEnd) {
  //     const concatStart = `${latitude},${longitude}`;
  //     const concatEnd = `${desLatitude},${desLongitude}`;
  //     this.getDirections(concatStart, concatEnd);
  //   }
  // };

  // async getDirections(startLoc, desLoc) {
  //   try {
  //     const resp = await.fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startloc}&destination={desLoc}&key=`)
  //     const respJson = await.resp.json();
  //     const points = Polyline.decode(respJson.routes[0].overview_polyline.points);
  //     const coords = points.map(point => {
  //       return {
  //         latitude: point[0],
  //         longitude: point[1]
  //       }
  //     })
  //     this.setState({ coords})
  //   } catch (error) {
  //     console.log('Error:', error)
  //   }
  // }

  render() {
    const { latitude, longitude } = this.state;

    if (latitude) {
      return (
        <MapView
          showsUserLocation
          style={{ flex: 1 }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>We need your permission!</Text>
      </View>
    );
  }
}
