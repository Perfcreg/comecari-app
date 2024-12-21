import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { Button, Text, Screen, FormRow } from "../../components"
import { TextStyle, ViewStyle, Image, ImageStyle, Dimensions, View, ActivityIndicator } from "react-native"
import { Controller, useForm } from "react-hook-form"
import { useStores } from "../../models"
import { AppStackScreenProps } from "../../navigators"
import { colors, spacing } from "../../theme"
import PhoneInput from "react-native-phone-number-input"

// Screen logo
const welcomeLogo = require("../../assets/images/comecari/logo.png")
const WhitewelcomeLogo = require("../../assets/images/comecari/comecari-white.png")
// Geting screen Heigh and Width

const { width, height } = Dimensions.get("screen")

interface PhoneScreenProps extends AppStackScreenProps<"Auth"> {}

type FormData = {
  mobileNumber: string
  error: string
}

export const PhoneScreen: FC<PhoneScreenProps> = observer(function PhoneScreen(_props) {
  // Navigation

  const { navigation } = _props

  const [code, setCode] = useState("234")
  const [error, setError] = useState("")

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const { authenticationStore, userStore } = useStores()

  const mode = userStore.mode

  // const [secureTextEntry, setSecureTextEntry] = useState(true)

  const handleVerify = async (data: FormData) => {
    setError("")
    authenticationStore.verifyPhone(`${code}${data.mobileNumber}`).then(() => {
      setError("")
      if (authenticationStore.status === "success") {
        navigation.navigate("Auth", {
          screen: 'otp',
          params: {phone: data.mobileNumber},
        })
      }else {
        setError("Something Went Wrong")
      }
    })
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
      <Text
        testID="login-heading"
        tx="phoneNumScreen.phoneNumberHeader"
        preset="authHeading"
        style={[$signIn, { color: mode === "dark" ? colors.darkText : colors.text }]}
      />
      <Text tx="phoneNumScreen.phoneNumberSubHeader" preset="subheading" style={$enterDetails} />
      <FormRow preset="clear">
        <Controller
          control={control}
          rules={{
            required: true,
            validate: {}
          }}
          name="mobileNumber"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <View
              style={{
                paddingHorizontal: spacing[4],
                // marginTop: spacing[2],
              }}
            >
              <Text
                text="Phone"
                style={[$phLabel, { color: mode === "dark" ? colors.darkText : colors.text }]}
              />
              <PhoneInput
                value={value}
                defaultCode={"NG"}
                onChangeText={onChange}
                // placeholder="Enter your phone number"
                containerStyle={$phInput}
                textContainerStyle={[
                  $textField,
                  {
                    borderColor: colors.blueColor,
                  },
                ]}
                onChangeCountry={(country) => {
                  setCode(country.callingCode[0])
                }}
                // withDarkTheme
                withShadow
                textInputProps={{
                  maxLength: 10,
                }}
              />
            </View>
          )}
        />
        {errors.mobileNumber && <Text style={$emailErr}>Enter a valid Phone number</Text> || error.length > 4 && <Text style={$maxerr}>{error}</Text>}

        
        
        <Button
          testID="login-button"
          style={$tapButton}
          preset="reversed"
          onPress={handleSubmit(handleVerify)}
        >
        {authenticationStore.status === "loading" ? (
          <ActivityIndicator
            size="small"
            color="#fff"
            style={{
              alignContent: "center",
            }}
          />
        ) : (
          <Text
            style={{
              color: colors.white,
            }}
            testID="login-button"
            tx="phoneNumScreen.phoneNumberButton"
          />
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

const $signIn: TextStyle = {
  marginBottom: spacing.tiny,
}

const $enterDetails: TextStyle = {
  marginBottom: spacing.large,
  color: colors.greyColor,
}

// const $hint: TextStyle = {
//   color: colors.tint,
//   marginBottom: spacing.medium,
// }

const $textField: ViewStyle = {
  marginTop: spacing.extraLarge,
  marginBottom: spacing.medium,
}

const $tapButton: ViewStyle = {
  height: 45,
  marginTop: spacing.extraSmall,
  marginBottom: spacing.extraLarge,
}
const $phLabel: TextStyle = {
  marginBottom: spacing[1],
  // fontFamily: "Poppins-Regular",
  fontSize: 14,
  // color: mode === "light" ? color.text : color.darkText,
}

const $phInput: ViewStyle = {
  width: "100%",
  borderRadius: 10,
}
const $maxerr: TextStyle = {
  paddingHorizontal: spacing[3],
  color: colors.error,
  fontSize: 12,
  // fontFamily: "Poppins-Regular",
}

const $emailErr: TextStyle = {
  paddingHorizontal: spacing[3],
  color: colors.error,
  fontSize: 12,
  // fontFamily: "Poppins-Regular",
}
