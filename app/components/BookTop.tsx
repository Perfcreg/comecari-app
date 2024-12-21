import React from "react"
import { View, ViewStyle, Image, ImageStyle, TouchableOpacity, TextStyle } from "react-native"
import { spacing, colors } from "../theme"
import { Text } from "./Text"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../models"

const arrowLeft = require("../../assets/icons/comeCariICon/chevron-right-solid.png")
const arrowLeftW = require("../assets/icons/comeCariICon/whi.png")


interface TopProps {
  title: string
}

export const BookTop = ({ title }: TopProps, _props) => {
  const navigation = useNavigation()
  const goBackFuc = () => {
    navigation.goBack()
  }

  const { userStore }: any = useStores()
  const mode = userStore.mode

  return (
    <View style={$top}>
      <TouchableOpacity onPress={goBackFuc}>
        {mode === "dark" ? (
          <Image source={arrowLeftW} style={$arrow} />
        ) : (
          <Image source={arrowLeft} style={$arrow} />
        )}
      </TouchableOpacity>
      <Text
        preset="authHeading"
        weight="bold"
        style={[$textSy, { color: mode === "dark" ? colors.darkText : colors.text }]}
      >
        {title}
      </Text>
    </View>
  )
}

const $top: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: spacing.large,
}
const $arrow: ImageStyle = {
  width: 15,
  height: 15,
  alignSelf: "flex-start",
}

const $textSy: TextStyle = {
  width: "90%",
  textAlign: "center",
}
