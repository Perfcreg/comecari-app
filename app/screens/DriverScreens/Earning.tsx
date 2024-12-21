import React, { FC, useState } from "react"
import { View, ViewStyle, TextStyle, Image, TouchableOpacity } from "react-native"
import { colors, spacing } from "../../theme"
import { Text, TextField, Button } from "../../components"
import { AppStackScreenProps } from "../../navigators"
import { useStores } from "../../models"
import { DriverSideNav } from "../../components/DriverSideNav"

const withIcon = require("../../assets/images/comecari/export.png")

interface DriverScreenProps extends AppStackScreenProps<"Driver"> {}

export const Earning: FC<DriverScreenProps> = function Earning(_props) {
  const { navigation } = _props
  //   const [openModal, setOpenModal] = useState(false)

  //   function history() {
  //     setOpenModal(!openModal)
  //   }

  const [widthdraw, setWithdraw] = useState(false)

  const toggleWidthdraw = () => {
    setWithdraw(!widthdraw)
  }
  const { userStore }: any = useStores()
  const mode = userStore.mode

  return (
    <DriverSideNav
      navigation={navigation}
      mode={mode === "dark" ? colors.darkBackground : colors.background}
    >
      <View style={$trackPack}>
        <View style={$search}>
          <Text style={$textFieldtt} tx="DriverHomePage.balance" preset="small" />
          <Text style={$textFieldt} tx="DriverHomePage.balanceVal" />
        </View>
      </View>
      {widthdraw ? (
        <View style={$withdrawText}>
          <TextField
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="name"
            autoCorrect={false}
            keyboardType="default"
            labelTx="Truck.accNum"
            placeholderTx="User.Numbers"
          />

          <TextField
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="name"
            autoCorrect={false}
            labelTx="Truck.bank"
            placeholderTx="Truck.bankVal"
          />
          <TextField
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="name"
            autoCorrect={false}
            labelTx="Truck.name"
            placeholderTx="Truck.nameVal"
          />

          <Button testID="login-button" tx="Truck.withDraw" style={$tapButton} preset="reversed" />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => toggleWidthdraw()}
          style={[
            $widthdraw,
            { backgroundColor: mode === "dark" ? colors.lightBlue : colors.background },
          ]}
        >
          <Text tx="Truck.withDraw" style={$widthdrawText} />
          <Image source={withIcon} alt="" />
        </TouchableOpacity>
      )}
    </DriverSideNav>
  )
}
const $trackPack: ViewStyle = {
  borderRadius: 27,
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
  backgroundColor: colors.lightBlue,
  padding: 10,
  paddingLeft: 20,
  marginTop: spacing.extraLarge,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  height: 87,
}

const $search: TextStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "100%",
  borderRadius: 19,
  paddingHorizontal: 5,
  height: 39,
}

const $withdrawText: ViewStyle = {
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
}
const $textFieldtt: TextStyle = {}

const $textField: ViewStyle = {
  marginBottom: spacing.small,
}
const $textFieldt: TextStyle = {
  fontSize: 22,
  fontWeight: "700",
  marginTop: spacing.extraSmall,
}

const $widthdraw: ViewStyle = {
  borderRadius: 8,
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
  backgroundColor: "rgba(224, 225, 251, 0.2)",
  marginTop: spacing.medium,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: 10,
  height: 38,
}

const $widthdrawText: TextStyle = {
  color: colors.blackColor,
}

const $tapButton: ViewStyle = {
  height: 45,
  marginTop: spacing.extraSmall,
  marginBottom: spacing.extraLarge,
}
