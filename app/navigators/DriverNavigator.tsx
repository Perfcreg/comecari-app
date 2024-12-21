import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { CompositeScreenProps } from "@react-navigation/native"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
// import { UserNavigator, UserTabParamList } from "./UserNavigator"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import {
  AddCard,
  AddTruck,
  Cards,
  DriverBids,
  DriverHome,
  DriverProfile,
  DriverRegistration1,
  DriverRegistration2,
  DriverRegistration3,
  DriverSuport,
  Earning,
  JobHistory,
  MarketPlace,
  Truck,
  TruckInfo,
} from "../screens"
import { DriverBidDetails } from "../screens/DriverScreens/DriverBidDetails"
import { Settings } from "../screens/UserScreens/Settings"
// import { UserNavigator, UserTabParamList } from "./UserNavigator"

export type DriverNavigatorParamList = {
  Home: { queryIndex?: string; itemIndex?: string }
  DriverBids: undefined
  DriverBidDetails: undefined
  Truck: undefined
  TruckInfo: undefined
  AddTruck: undefined
  JobHistory: undefined
  Earning: undefined
  DriverProfile: undefined
  DriverRegistration1: undefined
  DriverRegistration2: undefined
  DriverRegistration3: undefined
  MarketPlace: undefined
  Cards: undefined
  AddCard: undefined
  Settings: undefined
  DriverSuport: undefined
}

export type DriverScreenProps<T extends keyof DriverNavigatorParamList> = CompositeScreenProps<
  BottomTabScreenProps<DriverNavigatorParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Stack = createNativeStackNavigator<DriverNavigatorParamList>()
export const DriverNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="MainTabs" component={DriverTabNavigator} />
      <Stack.Screen name="DriverBids" component={DriverBids} />
      <Stack.Screen name="DriverBidDetails" component={DriverBidDetails} />
      <Stack.Screen name="Truck" component={Truck} />
      <Stack.Screen name="TruckInfo" component={TruckInfo} />
      <Stack.Screen name="AddTruck" component={AddTruck} />
      <Stack.Screen name="JobHistory" component={JobHistory} />
      <Stack.Screen name="Earning" component={Earning} />
      <Stack.Screen name="DriverProfile" component={DriverProfile} />
      <Stack.Screen name="DriverRegistration1" component={DriverRegistration1} />
      <Stack.Screen name="DriverRegistration2" component={DriverRegistration2} />
      <Stack.Screen name="DriverRegistration3" component={DriverRegistration3} />
      <Stack.Screen name="MarketPlace" component={MarketPlace} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Cards" component={Cards} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="DriverSuport" component={DriverSuport} />
    </Stack.Navigator>
  )
}
