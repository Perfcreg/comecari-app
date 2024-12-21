import React, { FC } from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { colors, spacing } from "../../theme"
import { TextField, Text, Button } from "../../components"
import { AppStackScreenProps } from "../../navigators"
import { useStores } from "../../models"

import { DriverSideNav } from "../../components/DriverSideNav"

interface DriverScreenProps extends AppStackScreenProps<"Driver"> {}

export const DriverRegistration1: FC<DriverScreenProps> = function DriverRegistration1(_props) {
  const { navigation }: any = _props

  function Next() {
    navigation.navigate("Driver", {
      screen: "DriverRegistration2",
    })
  }
  const { userStore }: any = useStores()

  const mode = userStore.mode
  return (
    <DriverSideNav
      navigation={navigation}
      mode={mode === "dark" ? colors.darkBackground : colors.background}
    >
      <View style={$reg}>
        <Text
          tx="registration.reg"
          preset="authHeading"
          weight="bold"
          style={[$driverReg, { color: mode === "dark" ? colors.darkText : colors.text }]}
        />

        <View style={$names}>
          <TextField
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="name"
            autoCorrect={false}
            keyboardType="default"
            labelTx="registration.firstNameLabel"
            placeholderTx="registration.firstName"
          />
          <TextField
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="name"
            autoCorrect={false}
            keyboardType="default"
            labelTx="registration.lastNameLabel"
            placeholderTx="registration.lastName"
          />
        </View>
        <TextField
          containerStyle={$textFields}
          autoCapitalize="none"
          autoComplete="name"
          autoCorrect={false}
          keyboardType="default"
          labelTx="registration.license"
          placeholderTx="registration.licenseNum"
        />
        <TextField
          containerStyle={$textFields}
          autoCapitalize="none"
          autoComplete="name"
          autoCorrect={false}
          keyboardType="default"
          labelTx="registration.companyLabel"
          placeholderTx="registration.company"
        />
        <Text tx="registration.err" preset="small" style={$err} />

        <Button
          testID="login-button"
          tx="registration.next"
          style={$tapButton}
          preset="reversed"
          onPress={Next}
        />
      </View>
    </DriverSideNav>
  )
}
const $textField: ViewStyle = {
  marginBottom: spacing.small,
  width: "48%",
}

const $textFields: ViewStyle = {
  marginBottom: spacing.small,
}

const $reg: ViewStyle = {
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
}

const $driverReg: TextStyle = {
  marginBottom: spacing.large,
}

const $names: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
}
const $err: TextStyle = {
  color: colors.red,
  marginBottom: spacing.large,
}

const $tapButton: ViewStyle = {
  height: 45,
  marginTop: spacing.extraSmall,
  marginBottom: spacing.extraLarge,
}
