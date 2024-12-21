import React, { FC } from "react"
import { Image, ImageStyle, View, ViewStyle, TextStyle, TouchableOpacity } from "react-native"
import { Text } from "../../components"
import { spacing, colors } from "../../theme"
import { LinearGradient } from "expo-linear-gradient"
// import { DrawerIconButton } from "./DrawerIconButton"
import { useStores } from "../../models"
// import { FontAwesome } from "@expo/vector-icons"
import { AppStackScreenProps } from "../../navigators"
import { DriverSideNav } from "../../components/DriverSideNav"
import { FontAwesome } from "@expo/vector-icons"

// Images
const box = require("../../assets/images/comecari/van3.png")
interface DriverScreenProps extends AppStackScreenProps<"Driver"> {}

export const Truck: FC<DriverScreenProps> = function Truck(_props) {
  const { navigation }: any = _props
  function info() {
    navigation.navigate("Driver", {
      screen: "TruckInfo",
    })
  }
  function addTruck() {
    navigation.navigate("Driver", {
      screen: "AddTruck",
    })
  }

  const { userStore }: any = useStores()

  const mode = userStore.mode
  return (
    <DriverSideNav
      navigation={navigation}
      mode={mode === "dark" ? colors.darkBackground : colors.background}
    >
      <View style={$truck}>
        <Text
          tx="Bid.Document"
          style={{ color: mode === "dark" ? colors.darkText : colors.text }}
        />

        <TouchableOpacity onPress={addTruck} style={$signUpWithGoggle}>
          <Text tx="Truck.add" style={$btnText} />
          <FontAwesome name="plus" size={15} style={$btnText} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={info} style={$truckPhoto}>
        <LinearGradient
          colors={["rgba(255, 255, 255, 0)", "rgba(10, 10, 10, 0.239216)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={$truckPhotos}
        >
          <Image source={box} style={$truckStyle} />
          <Text tx="Truck.truckType" style={$truckType} />
        </LinearGradient>
      </TouchableOpacity>
    </DriverSideNav>
  )
}

const $truck: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  marginTop: spacing.medium,
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
  marginBottom: spacing.large,
}
// const $truckBtn: TextStyle = {}
const $truckPhoto: ViewStyle = {
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
  borderWidth: 1,
  borderColor: "#B9BAC2",
  backgroundColor: "#FCFCFC",
  height: 187,
}
const $truckPhotos: ViewStyle = {
  width: "100%",
  marginRight: "auto",
  marginLeft: "auto",
  backgroundColor: "#FCFCFC",
  height: 161,
  marginTop: "auto",
  position: "relative",
}

const $truckStyle: ImageStyle = {
  width: 218,
  height: 175,
  marginRight: "auto",
  marginLeft: "auto",
}

const $signUpWithGoggle: ViewStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  gap: 5,
  height: 45,
  width: 113,
  borderRadius: 5,
  backgroundColor: colors.blueColor,
}
const $truckType: TextStyle = {
  color: colors.white,
  marginLeft: spacing.medium,
  position: "absolute",
  bottom: 9,
  left: 10,
}

const $btnText: TextStyle = {
  color: colors.white,
  // marginRight: 10,
}
