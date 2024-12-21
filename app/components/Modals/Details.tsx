import { View, ViewStyle, Dimensions, Image, ImageStyle, TouchableOpacity } from "react-native"

import React from "react"
import { colors, spacing } from "../../theme"
import { TextField } from "../TextField"
import { Button } from "../Button"
const { width } = Dimensions.get("screen")

const cancel = require("../../../assets/icons/comeCariICon/x.png")
const Bus = require("../../assets/images/comeCariImage/van.png")

export function Details({ togDetails, navigation }: any) {

  const next = () => {
    navigation.navigate("Driver", {
      screen: "Cards",
    })
  }

  return (
    <View style={$Modal}>
      <View style={$ModalCon}>
        <View style={$ModalTop}>
          <TouchableOpacity onPress={togDetails}>
            <Image source={cancel} style={$cancel} />
          </TouchableOpacity>
        </View>

        <TextField
          containerStyle={$textField}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          labelTx="Book.pickupPlaceHolder"
          placeholderTx="Book.pickup"
        />
        <TextField
          containerStyle={$textField}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          labelTx="Book.desPlaceHolder"
          placeholderTx="Book.destination"
        />
        <TextField
          containerStyle={$textField}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          labelTx="market.truckType"
          placeholderTx="market.truck"
        />
        <Image source={Bus} style={$bus} />
        <Button
          testID="login-button"
          tx="market.show"
          style={$tapButton}
          preset="reversed"
          onPress={next}
        />
      </View>
    </View>
  )
}

const $Modal: ViewStyle = {
  height: "100%",
  width,
  position: "absolute",
  zIndex: 11,
  backgroundColor: "rgba(0,0,0,0.7)",
}

const $ModalCon: ViewStyle = {
  width: 317,
  top: "15%",
  left: "2.9%",
  height: 515,
  borderRadius: 22,
  position: "absolute",
  zIndex: 111,
  backgroundColor: colors.white,
  paddingTop: spacing.large,
  paddingHorizontal: spacing.large,
}

const $cancel: ImageStyle = {
  width: 15,
  height: 15,
  alignSelf: "flex-end",
}
const $ModalTop: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 10,
}

const $textField: ViewStyle = {
  marginTop: spacing.medium,
}

const $bus: ImageStyle = {
  width: 217,
  height: 174,
  marginLeft: "auto",
  marginRight: "auto",
}

const $tapButton: ViewStyle = {
  height: 45,
  marginTop: spacing.extraSmall,
  marginBottom: spacing.extraLarge,
}
