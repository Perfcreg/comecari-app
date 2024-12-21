import { View, ViewStyle, TextStyle, ImageStyle, TouchableOpacity } from "react-native"
import { colors, spacing } from "../theme"
import React from "react"
import { Text } from "."
import { FontAwesome } from "@expo/vector-icons"

interface goBackProps {
  title: string
//   color: string
}

export const GoBack = (_props, {title}: goBackProps) => {
  const { navigation } = _props

  return (
    <View style={$ModalTop}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={19} style={$cancel} />
      </TouchableOpacity>
      <View style={$ModalTopText}>
        <Text style={$ModalTopTexts} tx="User.Numbers" preset="bold"  >{title}</Text>

      </View>
    </View>
  )
}

const $ModalTop: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 10,
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: spacing.large,
  marginBottom: spacing.small,
}

const $ModalTopText: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "90%",
  gap: 5,
  marginBottom: spacing.medium,
}
const $ModalTopTexts: TextStyle = {
  fontWeight: "bold",
  color: colors.white,
  marginTop: spacing.medium,
}
const $cancel: ImageStyle = {
  width: 15,
  height: 15,
  alignSelf: "flex-end",
}
