import React from "react";
import { View, StyleSheet, Image, ImageStyle } from "react-native";
import { Screen } from "../../components/Screen";
import { colors, spacing } from "../../theme";
import { Text } from "../../components/Text";
import { FontAwesome5 } from "@expo/vector-icons";
import { useStores } from "../../models"

const menuItems = [
  {
    title: "Shipment History",
    icon: "history",
    screen: "ShipmentHistory",
  },
  {
    title: "Active Shipments",
    icon: "shipping-fast",
    screen: "ActiveShipments",
  },
  {
    title: "Shipment Analytics",
    icon: "chart-line",
    screen: "ShipmentAnalytics",
  },
  {
    title: "Shipment Calculator",
    icon: "calculator",
    screen: "ShipmentCalculator",
  }
];

const WhitewelcomeLogo = require("../../assets/images/comecari/comecari-white.png")
const welcomeLogo = require("../../assets/images/comecari/logo.png")


export const ShipmentDashboard = ({ navigation }) => {
  const { authenticationStore, userStore } = useStores()
  const colorScheme = userStore.mode
  const isDarkMode = colorScheme === 'dark';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? colors.palette.neutral900 : colors.palette.neutral100,
    },
    menuGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 16,
      justifyContent: 'space-between',
    },
    menuItem: {
      width: '45%',
      aspectRatio: 1,
      backgroundColor: isDarkMode ? colors.darkBackground : colors.background,
      borderRadius: 12,
      padding: 16,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    menuIcon: {
      marginBottom: 12,
    },
    menuText: {
      fontSize: 14,
      fontWeight: '600',
      textAlign: 'center',
      color: isDarkMode ? colors.palette.neutral100 : colors.palette.neutral800,
    },
  });

  const handleMenuPress = (screenName) => {
    navigation.navigate(screenName);
  };
  const $welcomeLogoStyle: ImageStyle = {
    height: 41,
    width: 64,
    margin: spacing.medium,
  }
  return (
    // <Screen
    // preset="auto"
    //   style={styles.container}
    //   statusBarStyle={isDarkMode ? "light" : "dark"}
    //   backgroundColor={isDarkMode ? colors.palette.neutral900 : colors.palette.neutral100}
    // >
    <Screen 
      preset="scroll" 
      safeAreaEdges={["top"]} 
      statusBarStyle={isDarkMode ? "light" : "dark"}
      backgroundColor={isDarkMode ? colors.darkBackground : colors.background}>
         {isDarkMode ? (
        <Image style={$welcomeLogoStyle} source={WhitewelcomeLogo} resizeMode="contain" />
      ) : (
        <Image style={$welcomeLogoStyle} source={welcomeLogo} resizeMode="contain" />
      )}
      <View style={styles.menuGrid}>
        {menuItems.map((item, index) => (
          <View
            key={index}
            style={styles.menuItem}
            onTouchEnd={() => handleMenuPress(item.screen)}
          >
            <FontAwesome5
              name={item.icon}
              size={32}
              color={isDarkMode ? colors.palette.neutral100 : colors.blueColor}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>{item.title}</Text>
          </View>
        ))}
      </View>
    </Screen>
  );
};