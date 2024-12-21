import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DriverHome, JobHistory, MarketPlace, DriverProfile, Truck } from "../screens";
import { colors } from "../theme";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function DriverTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.blueColor,
        tabBarInactiveTintColor: colors.greyColor,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 1,
          borderTopColor: colors.lightGrey,
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={DriverHome}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="JobsTab"
        component={JobHistory}
        options={{
          tabBarLabel: "Jobs",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="clipboard-list" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MarketTab"
        component={MarketPlace}
        options={{
          tabBarLabel: "Market",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="store" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TruckTab"
        component={Truck}
        options={{
          tabBarLabel: "Trucks",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="truck" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab" 
        component={DriverProfile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}