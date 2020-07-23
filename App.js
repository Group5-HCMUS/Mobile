import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./src/screens/SplashScreen";
import Login from "./src/screens/Login";
import { AuthenticationProvider } from "./src/providers/authentication-provider";
import RootStack from "./src/navigation";

export default function App() {
  // const [currentScreen, setCurrentScreen] = useState('SplashScreen');
  // useEffect(() => {
  //   const time = setTimeout(() => {
  //     setCurrentScreen('Login');
  //   }, 2000);
  //   return () => clearTimeout(time);
  // }, []);
  return (
    <AuthenticationProvider>
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" />
        <RootStack />
      </View>
    </AuthenticationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
