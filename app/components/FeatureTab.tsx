import React from "react"
import { View, ViewStyle, TouchableOpacity, StyleSheet } from "react-native"
import { Icon, Text } from "@rneui/themed"
import { colors, spacing } from "../theme"
import { useStores } from "../models"

interface FeatureButtonProps {
  title: string
  iconName: string
  iconType?: string
  onPress: () => void
  color?: string
}

const FeatureButton = ({ title, iconName, iconType = "font-awesome", onPress, color = colors.palette.primary100 }: FeatureButtonProps) => {
  const { userStore }: any = useStores()
  const mode = userStore.mode
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.circularButton, { backgroundColor: color }]} onPress={onPress}>
        <Icon
          name={iconName}
          type={iconType}
          color={colors.palette.neutral100}
          size={24}
        />
      </TouchableOpacity>
      <Text style={[styles.buttonText, {
        color: mode === "dark" ? colors.darkText : colors.text
      }]}>{title}</Text>
    </View>
  )
}

export const FeatureTab = ({ navigation }) => {
  const { userStore }: any = useStores()
  const mode = userStore.mode

  return (
    <View style={styles.container}>
      <Text h4 h4Style={[styles.sectionTitle, {
        color: mode === "dark" ? colors.darkText : colors.text
      }]}>Quick Actions</Text>
      <View style={styles.buttonGrid}>
        <FeatureButton
          title="Book Freight"
          iconName="truck"
          onPress={() => navigation.navigate("User", { screen: "Book" })}
          color={colors.palette.accent500}
          
        />
        <FeatureButton
          title="Shipping Cost"
          iconName="calculator"
          onPress={() => navigation.navigate("User", { screen: "ShippingCalculator" })}
          color={colors.palette.secondary500}
        />
        <FeatureButton
          title="Support"
          iconName="headphones"
          onPress={() => navigation.navigate("User", { screen: "Support" })}
          color={colors.palette.angry500}
        />
        <FeatureButton
          title="Receipts"
          iconName="file-text-o"
          onPress={() => navigation.navigate("User", { screen: "ShipmentHistory" })}
          color={colors.palette.tertiary500}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.medium,
    // marginBottom: spacing.medium,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: spacing.medium,
  },
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    width: "25%",
    marginBottom: spacing.medium,
  },
  circularButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.tiny,
  },
  buttonText: {
    fontSize: 12,
    textAlign: "center",
    top: spacing.extraSmall
  },
})