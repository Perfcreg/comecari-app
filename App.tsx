import "@expo/metro-runtime"
import React, { useState, useEffect } from "react"
import * as SplashScreen from "expo-splash-screen"
import App from "./app/app"
import 'react-native-reanimated'
// import { SplashScreen } from "./app/screens/SplashScreen"

SplashScreen.preventAutoHideAsync()

function IgniteApp() {
  return <App hideSplashScreen={SplashScreen.hideAsync} />
  
}

export default IgniteApp