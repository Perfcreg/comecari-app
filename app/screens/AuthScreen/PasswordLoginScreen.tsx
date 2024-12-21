import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import {
  TextStyle,
  ViewStyle,
  Image,
  ImageStyle,
  View,
} from "react-native"
import { Screen, Text, TextField } from "../../components"
import { useStores } from "../../models"
import { AppStackScreenProps } from "../../navigators"
import { colors, spacing } from "../../theme"
import { Icon, Button } from '@rneui/themed'
import { Formik } from "formik"
import * as Yup from 'yup'

// Screen logo
const WhitewelcomeLogo = require("../../assets/images/comecari/comecari-white.png")
const welcomeLogo = require("../../assets/images/comecari/logo.png")

interface PasswordLoginScreenProps extends AppStackScreenProps<"Auth"> { }

const PasswordLoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
})

export const PasswordLoginScreen: FC<PasswordLoginScreenProps> = observer(function PasswordLoginScreen(_props) {
  const { navigation, route }: any = _props
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const { authenticationStore, userStore } = useStores()
  const mode = userStore.mode
  const customerName = route.params?.customerName || "Customer"

  function Forget() {
    navigation.navigate("Auth", {
      screen: "forgetPassword",
    })
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
        testID="welcome-heading"
        text={`Welcome back, ${customerName}`}
        preset="authHeading"
        style={[$heading, { color: mode === "dark" ? colors.darkText : colors.text }]}
      />

      <Text
        text="Please enter your password to continue"
        style={[$subheading, { color: mode === "dark" ? colors.darkText : colors.greyColor }]}
      />

      <Formik
        initialValues={{ password: '' }}
        validationSchema={PasswordLoginSchema}
        enableReinitialize={true}
        onSubmit={async (values) => {
          // Here we would typically call a password-only login endpoint
          await authenticationStore.login(customerName, values.password)
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={{ marginTop: spacing.extraLarge }}>
            <TextField
              onBlur={() => handleBlur('password')}
              onChangeText={handleChange('password')}
              value={values.password}
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect={false}
              secureTextEntry={isAuthPasswordHidden}
              label="Password"
              placeholder="Enter your password"
              rightIcon={
                <Icon
                  name={isAuthPasswordHidden ? "eye" : 'eye-off'}
                  size={20}
                  type="feather"
                  onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
                />
              }
              renderErrorMessage={touched.password && errors.password !== undefined}
              errorMessage={errors.password}
            />

            <Text
              text="Forgot Password?"
              preset="smallThick"
              style={[
                $forgetPass,
                { color: mode === "dark" ? colors.white : colors.blueColor },
              ]}
              onPress={Forget}
            />

            <Button
              buttonStyle={{
                backgroundColor: colors.blueColor,
                borderRadius: 5,
              }}
              containerStyle={{
                marginHorizontal: spacing.small,
                marginTop: spacing.large
              }}
              onPress={() => handleSubmit()}
              loading={authenticationStore.status === "loading"}
            >
              Sign in
            </Button>
          </View>
        )}
      </Formik>
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  flex: 1,
  padding: spacing.medium
}

const $welcomeLogoStyle: ImageStyle = {
  height: 41,
  width: 64,
  marginBottom: spacing.huge,
}

const $heading: TextStyle = {
  fontWeight: "bold",
}

const $subheading: TextStyle = {
  marginTop: spacing.small,
}

const $forgetPass: TextStyle = {
  alignSelf: "flex-end",
  marginTop: spacing.small,
  marginRight: spacing.small,
  marginBottom: spacing.large,
}