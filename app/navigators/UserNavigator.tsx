import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native"
import React from "react"
import {
  Book,
  Home,
  // CompleteBook,
  Payment,
  Tracking,
  TrackItem,
  ShipmentHistory,
  Bids,
  Bidders,
  BidDetails,
  Notification,
  NExpand,
  Chat,
  Suport,
  Settings,
  Profile,
  EditProfile,
  ShipmentBooked,
  ChangePassword,
  ActiveShipments
} from "../screens"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { DriverNavigator, DriverNavigatorParamList } from "./DriverNavigator"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MainTabNavigator } from "./MainTabNavigator"

export type UserTabParamList = {
  ShipmentDashboard: undefined
  ShipmentAnalytics: undefined
  ActiveShipments: undefined
  Home: { queryIndex?: string; itemIndex?: string }
  Book: undefined
  CompleteBook: undefined
  Payment: undefined
  Tracking: undefined
  TrackItem: undefined
  ShipmentHistory: undefined
  Bids: undefined
  Bidders: undefined
  BidDetails: undefined
  Notification: undefined
  NExpand: undefined
  Chat: undefined
  Support: undefined
  Settings: undefined
  Profile: undefined
  EditProfile: undefined
  ShipmentBooked: undefined
  ChangePassword: undefined
  // ActiveShipment: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type UserTabScreenProps<T extends keyof UserTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<UserTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Stack = createNativeStackNavigator<UserTabParamList>()

export function UserNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
     initialRouteName="Home"
    >
      <Stack.Screen name="MainTabs" component={MainTabNavigator} />
      <Stack.Screen name="Book" component={Book} />
      <Stack.Screen name="ActiveShipments" component={ActiveShipments} />

      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Tracking" component={Tracking} />
      <Stack.Screen name="TrackItem" component={TrackItem} />
      <Stack.Screen name="ShipmentHistory" component={ShipmentHistory} />
      <Stack.Screen name="Bids" component={Bids} />
      <Stack.Screen name="Bidders" component={Bidders} />
      <Stack.Screen name="BidDetails" component={BidDetails} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="NExpand" component={NExpand} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Support" component={Suport} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ShipmentBooked" component={ShipmentBooked} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  )
}
