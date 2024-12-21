import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Book, Tracking, Profile, ShipmentHistory, ShipmentDashboard } from "../screens";
import { colors, spacing } from "app/theme";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity, Image, View, StyleSheet } from "react-native";
import { useStores } from "app/models"

const Tab = createBottomTabNavigator();
const logo = require("../assets/images/comecari/logo.png");
const whiteLogo = require("../assets/images/comecari/comecari-white.png")

export function MainTabNavigator() {
  const { authenticationStore, userStore } = useStores()
  const colorScheme = userStore.mode
  const isDarkMode = colorScheme === 'dark';

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.blueColor,
        tabBarInactiveTintColor: colors.greyColor,
        // tabBarActiveTintColor: '#6200EE', // Purple for active
        //   tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#F9F9F9',
            borderTopWidth: 0,
            elevation: 4, // Add shadow for Android
            height: 70, // Adjust height for design
          },
          tabBarLabelStyle: {
            fontSize: 12,
            // marginBottom: 1,
            // top: 4
          },
          tabBarIconStyle: {
            // marginTop: 8,
          },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ShipTab"
        component={ShipmentDashboard}
        options={{
          tabBarLabel: "Shipments",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="book" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="  "
        component={Book}
        // options={{
        //   // tabBarLabel: "Track",
        //   tabBarIcon: ({ color }) => (
        //     <FontAwesome5 name="truck" size={20} color={color} />
        //   ),

          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={[
                  styles.middleButton,
                  { backgroundColor: colors.blueColor },
                ]}
              >
                <FontAwesome5 name="shipping-fast" size={20} color={colors.background} />
               
              </View>
            ),
            tabBarButton: (props) => (
              <TouchableOpacity {...props} style={styles.middleButtonContainer} />
            ),
          }}
        // }}
      />
      <Tab.Screen
        name="HistoryTab"
        component={ShipmentHistory}
        options={{
          tabBarLabel: "Insights",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="map" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab" 
        component={Profile}
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

const styles = StyleSheet.create({
  middleButtonContainer: {
    top: -10,
    marginHorizontal: spacing.extraLarge,
    backgroundColor: colors.blueColor // Adjust the position of the middle button
  },
  middleButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
});