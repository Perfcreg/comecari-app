import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Button, Text, Screen, FormRow, TextField } from "../../components"
import { TextStyle, ViewStyle, Image, ImageStyle, Dimensions, View, ActivityIndicator } from "react-native"
import { useFormik } from "formik"
import { useStores } from "../../models"
import { AppStackScreenProps } from "../../navigators"
import { colors, spacing } from "../../theme"
import { PhoneInputBox } from "../../components/PhoneInput"
import * as Yup from 'yup'
import { values } from "mobx"

// Screen logo
const welcomeLogo = require("../../assets/images/comecari/logo.png")
const WhitewelcomeLogo = require("../../assets/images/comecari/comecari-white.png")

const { width, height } = Dimensions.get("screen")

interface ForgetPasswordScreenProps extends AppStackScreenProps<"Auth"> { }

export const ForgetPassword: FC<ForgetPasswordScreenProps> = observer(function ForgetPassword(_props) {
  const { navigation } = _props
  const { authenticationStore, userStore } = useStores()
  const mode = userStore.mode

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Here you would typically make an API call to verify the phone number
        await authenticationStore.forgetPassword(values.email)
        if (authenticationStore.status === "success") {
          navigation.navigate("Auth", {
            screen: "otp",
            params: { 
              email: values.email,
              action: 'forgetPassword'
            },
          })
        }
      } catch (error) {
        // formik.setFieldError("email", authenticationStore.error)

        console.log(authenticationStore.error)
      }
    },
  })

  return (
    <Screen
      preset="auto"
      safeAreaEdges={["top", "bottom"]}
      style={[$screenContentContainer, { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background }]}
    >
      {mode === "dark" ? (
        <Image style={$welcomeLogoStyle} source={WhitewelcomeLogo} resizeMode="contain" />
      ) : (
        <Image style={$welcomeLogoStyle} source={welcomeLogo} resizeMode="contain" />
      )}

      <Text
        testID="forget-password-heading"
        text="Forget Password"
        preset="authHeading"
        style={[$heading, { color: mode === "dark" ? colors.darkText : colors.text }]}
      />

      <Text
        text="Please enter your email address to reset your password"
        preset="subheading"
        style={$subHeading}
      />

      <FormRow preset="clear">
        {/* <PhoneInputBox
          value={formik.values.phone}
          onChangeText={formik.handleChange("phone")}
          error={formik.touched.phone && formik.errors.phone}
        /> */}

        <TextField
          onBlur={() => {
            formik.handleBlur('email');
          }}
          onChangeText={formik.handleChange('email')}
          value={formik.values.email}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          keyboardType="email-address"
          label="Email Address"
          placeholder="mail@mail.com"
          errorMessage={formik.errors.email}
        />

        <Button
          testID="verify-button"
          style={$tapButton}
          preset="reversed"
          onPress={() => formik.handleSubmit()}
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <ActivityIndicator size="small" color="#fff" style={{ alignContent: "center" }} />
          ) : (
            <Text style={{ color: colors.white }} text="Verify Phone Number" />
          )}
        </Button>
      </FormRow>
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

const $heading: TextStyle = {
  marginBottom: spacing.tiny,
}

const $subHeading: TextStyle = {
  marginBottom: spacing.large,
  color: colors.greyColor,
}

const $tapButton: ViewStyle = {
  height: 45,
  marginTop: spacing.extraSmall,
  marginBottom: spacing.extraLarge,
}