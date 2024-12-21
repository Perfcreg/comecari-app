import React, { FC } from "react"
import { View, ViewStyle, TextStyle, Dimensions, Image, ImageStyle } from "react-native"
import { Text } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"


// Images
const ride = require("../../assets/images/comecari/bycycle.png")


const { height } = Dimensions.get("screen")

export const ShipmentBooked: FC<DemoTabScreenProps<"ShipmentBooked">> = function ShipmentBooked(
  _props,
) {
  return (
    <SafeAreaView style={$BidPage}>
      <View style={$support}>
        <Image source={ride} style={$plane} />
        <Text tx="Book.booked" style={$text} weight="bold" />
      </View>
    </SafeAreaView>
  )
}

const $BidPage: ViewStyle = {
  backgroundColor: colors.white,
  height,
}
const $support: ViewStyle = {
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
}
const $plane: ImageStyle = {
  width: 313,
  height: 313,
  alignSelf: "center",
  marginTop: spacing.large,
}

const $text: TextStyle = {
  textAlign: "center",
  width: 260,
  marginRight: "auto",
  marginLeft: "auto",
  marginBottom: spacing.huge,
}