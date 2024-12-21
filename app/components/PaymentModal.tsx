import { View, ViewStyle, Dimensions, Image, ImageStyle, TouchableOpacity } from "react-native"

import React from "react"
import { useStores } from "../models"
import { colors, spacing } from "../theme"
import { Text } from "./Text"
import { Icon } from "./Icon"
import { ScrollView } from "react-native-gesture-handler"
const { height, width } = Dimensions.get("screen")

const cancel = require("../../assets/icons/comeCariICon/x.png")
const cancelW = require("../assets/icons/comeCariICon/x-solid.png")

const Bus = require("../../assets/images/comeCariImage/van.png")
export default function PaymentModal(props) {
  const { userStore }: any = useStores()

  const mode = userStore.mode

  return (
    <View style={$Modal}>
      <View
        style={[
          $ModalCon,
          { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
        ]}
      >
        <Icon icon="x" color={mode === "dark" ? colors.darkText : colors.text} onPress={props.close} />
        <Image source={props.truck} style={$bus} resizeMode="contain" />
        <ScrollView>
        <Text
          style={{ color: mode === "dark" ? colors.darkText : colors.text }}
          text={props.description}
          preset="default"
          weight="normal"
        />
        </ScrollView>
      </View>
    </View>
  )
}

const $Modal: ViewStyle = {
  height,
  width,
  position: "absolute",
  left: 0,
  top: 0,
  zIndex: 11,
  backgroundColor: "rgba(0,0,0,0.7)",
}

const $ModalCon: ViewStyle = {
  borderTopRightRadius: 22,
  borderTopLeftRadius: 22,
  position: "absolute",
  // zIndex: 111,
  backgroundColor: colors.white,
  bottom: 0,
  paddingTop: spacing.large,
  paddingHorizontal: spacing.large,
}

const $cancel: ImageStyle = {
  width: 15,
  height: 15,
  alignSelf: "flex-end",
}

const $bus: ImageStyle = {
  width: 170,
  height: 130,
  alignSelf: "center",
  // marginBottom: spacing.large,
}
