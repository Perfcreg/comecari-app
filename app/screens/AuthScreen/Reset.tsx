import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { Button, Text, TextField, Screen } from "../../components"
import { TextStyle, ViewStyle, Image, ImageStyle, Dimensions } from "react-native"

import { useStores } from "../../models"
import { AppStackScreenProps } from "../../navigators"
import { colors, spacing } from "../../theme"

// Screen logo
const welcomeLogo = require("../../assets/images/comecari/logo.png")
const WhitewelcomeLogo = require("../../assets/images/comecari/comecari-white.png")

// Geting screen Heigh and Width

const { width, height } = Dimensions.get("screen")

interface ResetScreenProps extends AppStackScreenProps<"Reset"> {}

export const ResetScreen: FC<ResetScreenProps> = observer(function ResetScreen(_props) {
  // Navigation

  //   const { navigation } = _props

  //     function SignUp() {
  //     navigation.navigate("Demo")
  //   }

  // const authPasswordInput = useRef<TextInput>()

  const [attemptsCount, setAttemptsCount] = useState(0)
  const { userStore }: any = useStores()

  const mode = userStore.mode

  function login() {
    setAttemptsCount(attemptsCount + 1)
  }

  return (
    <Screen
      preset="auto"
      safeAreaEdges={["top", "bottom"]}
      style={[
        $screenContentContainer,
        { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
      ]}
    >
      {mode === "dark" ? (
        <Image style={$welcomeLogoStyle} source={WhitewelcomeLogo} resizeMode="contain" />
      ) : (
        <Image style={$welcomeLogoStyle} source={welcomeLogo} resizeMode="contain" />
      )}
      <Text testID="login-heading" tx="Reset.heading" preset="authHeading" style={$signIn} />
      <Text tx="Reset.subHeading" preset="subheading" style={$enterDetails} />
      {attemptsCount > 2 && <Text tx="loginScreen.hint" size="sm" weight="light" style={$hint} />}

      <TextField
        // value={phoneNumber}
        // onChangeText={setPhoneNumber}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
        labelTx="phoneNumScreen.phoneNumberLabel"
        placeholderTx="phoneNumScreen.phoneNumberPlaceHolder"

        // onSubmitEditing={() => authPasswordInput.current?.focus()}
      />

      <Button
        testID="login-button"
        tx="signUpProfile.profileButton"
        style={$tapButton}
        preset="reversed"
        onPress={login}
      />
      {/* <View>
        <Text tx="loginScreen.dontHaveAnAcc" />
      </View> */}
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
  backgroundColor: colors.white,
  height,
  width,
}

const $welcomeLogoStyle: ImageStyle = {
  height: 41,
  width: 64,
  marginBottom: spacing.huge,
}

const $signIn: TextStyle = {
  marginBottom: spacing.tiny,
}

const $enterDetails: TextStyle = {
  marginBottom: spacing.large,
  color: colors.greyColor,
}

const $hint: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.medium,
}

const $textField: ViewStyle = {
  // marginTop: spacing.extraLarge,
  marginBottom: spacing.medium,
}

const $tapButton: ViewStyle = {
  height: 45,
  marginTop: spacing.extraSmall,
  marginBottom: spacing.extraLarge,
}
