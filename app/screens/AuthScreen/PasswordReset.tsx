import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { Button, Text, TextField, Screen, Loader } from "../../components"
import { TextStyle, ViewStyle, Image, ImageStyle, View } from "react-native"
import { Icon } from '@rneui/themed'
import { Formik } from "formik"
import { ResetPasswordSchema } from "../../validation/ResetPasswordSchema"
import { useStores } from "../../models"
import { AppStackScreenProps } from "../../navigators"
import { colors, spacing } from "../../theme"

// Screen logo
const welcomeLogo = require("../../assets/images/comecari/logo.png")
const WhitewelcomeLogo = require("../../assets/images/comecari/comecari-white.png")

interface PasswordResetProps extends AppStackScreenProps<"Auth"> {}

export const PasswordReset: FC<PasswordResetProps> = observer(function PasswordReset(_props) {
  const { navigation }: any = _props
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true)
  const { userStore, authenticationStore } = useStores()
  const mode = userStore.mode

  const handleResetPassword = async (values: { password: string; confirmPassword: string }) => {
    try {
      // Call reset password API through auth store
      await authenticationStore.resetPassword(values.password)
      navigation.navigate("Auth", { screen: "login" })
    } catch (error) {
      console.error('Failed to reset password:', error)
    }
  }

  return (
    <Screen
      preset="auto"
      safeAreaEdges={["top"]}
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
      <Text
        testID="reset-heading"
        text="Reset Password"
        preset="authHeading"
        style={[$heading, { color: mode === "dark" ? colors.darkText : colors.text }]}
      />

      <Text
        text="Please enter your new password"
        style={[$subHeading, { color: mode === "dark" ? colors.darkText : colors.greyColor }]}
      />

      <Loader visible={authenticationStore.status === "pending"} />
      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={ResetPasswordSchema}
        onSubmit={handleResetPassword}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={$formContainer}>
            <TextField
              onBlur={() => handleBlur('password')}
              onChangeText={handleChange('password')}
              value={values.password}
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect={false}
              secureTextEntry={isPasswordHidden}
              label="New Password"
              placeholder="Enter new password"
              rightIcon={
                <Icon 
                  name={isPasswordHidden ? "eye" : "eye-off"} 
                  size={20} 
                  type="feather"
                  onPress={() => setIsPasswordHidden(!isPasswordHidden)}
                />
              }
              renderErrorMessage={touched.password && errors.password !== undefined}
              errorMessage={errors.password}
            />

            <TextField
              onBlur={() => handleBlur('confirmPassword')}
              onChangeText={handleChange('confirmPassword')}
              value={values.confirmPassword}
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect={false}
              secureTextEntry={isConfirmPasswordHidden}
              label="Confirm Password"
              placeholder="Confirm your new password"
              rightIcon={
                <Icon 
                  name={isConfirmPasswordHidden ? "eye" : "eye-off"} 
                  size={20} 
                  type="feather"
                  onPress={() => setIsConfirmPasswordHidden(!isConfirmPasswordHidden)}
                />
              }
              renderErrorMessage={touched.confirmPassword && errors.confirmPassword !== undefined}
              errorMessage={errors.confirmPassword}
            />

            <Button
              buttonStyle={$buttonStyle}
              containerStyle={$buttonContainer}
              onPress={() => handleSubmit()}
            >
              Reset Password
            </Button>
          </View>
        )}
      </Formik>
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  flex: 1,
  padding: spacing.medium,
}

const $welcomeLogoStyle: ImageStyle = {
  height: 41,
  width: 64,
  marginBottom: spacing.huge,
}

const $heading: TextStyle = {
  marginBottom: spacing.tiny,
  fontWeight: "bold",
}

const $subHeading: TextStyle = {
  marginTop: spacing.small,
  marginBottom: spacing.large,
}

const $formContainer: ViewStyle = {
  marginTop: spacing.large,
}

const $buttonStyle: ViewStyle = {
  backgroundColor: colors.blueColor,
  borderRadius: 5,
}

const $buttonContainer: ViewStyle = {
  marginHorizontal: spacing.small,
  marginTop: spacing.medium,
}