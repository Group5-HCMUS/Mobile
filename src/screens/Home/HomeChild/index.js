import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import Info from "../../../components/Home/Info";

export default class App extends React.Component {
  state = {
    location: null,
    geocode: null,
    errorMessage: "",
  };
  componentDidMount() {
    this.getLocationAsync();
    this.watchLocationAsync();
  }

  watchLocationAsync = async () => {
    let location = await Location.watchPositionAsync(
        {
            enableHighAccuracy: true,
            distanceInterval: 1,
            timeInterval: 50000
        },
        newLocation => {
            let {coords} = newLocation;
            this.setState({ location: { latitude: coords.latitude, longitude: coords.longitude } });
            global.socket.emit('child-send-location', {latitude: coords.latitude, longitude: coords.longitude});
            this.getGeocodeAsync({latitude: coords.latitude, longitude: coords.longitude});
      },
      error => console.log(error)
    );
    return location;
  };
  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied",
      });
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
    });
    const { latitude, longitude } = location.coords;
    this.getGeocodeAsync({ latitude, longitude });
    global.socket.emit('child-send-location', {latitude, longitude});
    this.setState({ location: { latitude, longitude } });
  };
  getGeocodeAsync = async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location);
    this.setState({ geocode });
  };
  render() {
    const { location, geocode, errorMessage } = this.state;
    return (
      <ImageBackground
        source={require("../../../../assets/images/bg.jpg")}
        blurRadius={5}
        style={styles.container}
      >
        <View style={styles.info}>
          <Info />
        </View>
        <View style={styles.overlay}>
          <Image
            source={require("../../../../assets/images/marker.png")}
            style={{ width: 100, height: 100 }}
          />
          <Text style={styles.heading1}>
            {geocode ? `${geocode[0].city}, ${geocode[0].isoCountryCode}` : ""}
          </Text>
          <Text style={styles.heading2}>
            {geocode ? geocode[0].street : ""}
          </Text>
          <Text style={styles.heading3}>
            {location ? `${location.latitude}, ${location.longitude}` : ""}
          </Text>
          <Text style={styles.heading2}>{errorMessage}</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    flex: 8,
    backgroundColor: "#00000070",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  heading1: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    margin: 20,
  },
  heading2: {
    color: "#fff",
    margin: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  heading3: {
    color: "#fff",
    margin: 5,
  },
  info: {
    flex: 2,
    backgroundColor: "#00000070",
    width: "100%",
  },
});
