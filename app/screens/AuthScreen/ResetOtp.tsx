import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { Button, Text, Screen, FormRow } from "../../components"
import { TextStyle, ViewStyle, Image, ImageStyle, Dimensions, View, ActivityIndicator, Pressable, Alert } from "react-native"
import { Controller, useForm } from "react-hook-form"
import { useStores } from "../../models"
import { AppStackScreenProps } from "../../navigators"
import { colors, spacing } from "../../theme"
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useFormik } from "formik"
import * as Yup from 'yup'

// Screen logo
const welcomeLogo = require("../../assets/images/comecari/logo.png")
const WhitewelcomeLogo = require("../../assets/images/comecari/comecari-white.png")
// Geting screen Heigh and Width

const { width, height } = Dimensions.get("screen")

interface OtpScreenProps extends AppStackScreenProps<"Auth"> { }

type FormData = {
  token: string
}

interface VerifyData {
  code: string
}
export const OtpScreen: FC<OtpScreenProps> = observer(function OtpScreen(_props) {
  const { navigation, route }: any = _props

  const {email, phoneNumber} = route.params

  // console.log(email)
  // const [code, setCode] = useState("234")
  const [error, setError] = useState("")

  const { authenticationStore, userStore } = useStores()


  const mode = userStore.mode

  const validationSchema = Yup.object().shape({
    token: Yup.string()
      .required("token is required")
    // .min(6, "Phone number must be at least 10 digits")
  })

  const formik = useFormik({
    initialValues: {
      token: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Here you would typically make an API call to verify the phone number
        await authenticationStore.verify({
          email, 
          token: values.token
        })
        if (authenticationStore.status === "success") {
          Alert.alert("Success", "OTP verified successfully")
        }
      } catch (error) {
        formik.setFieldError("token", authenticationStore.error)
      }
    },
  })

  const [countdown, setCountdown] = useState(120);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handleResend = async () => {
    if (canResend) {
      try {
        // Call resend OTP API here
        await authenticationStore.resendOTP(email);
        setCountdown(120);
        setCanResend(false);
      } catch (error) {
        console.error('Failed to resend OTP');
      }
    }
  };
  return (

    <Screen
      preset="auto"
      // safeAreaEdges={["top", "bottom"]}
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
        text="Enter OTP"
        preset="authHeading"
        style={[{ color: mode === "dark" ? colors.darkText : colors.text }]}
      />


      <FormRow preset="clear">
        <OTPInputView
          style={$otpInput}
          pinCount={6}
          // autoFocusOnLoad
          codeInputFieldStyle={[
            $otpCell,
            {
              backgroundColor: mode === "dark" ? colors.ligthNavy : colors.background,
              borderColor: mode === "dark" ? colors.ligthNavy : colors.palette.drakGrey,
              color: colors.blackColor
            }
          ]}
          codeInputHighlightStyle={$otpCellFocused}
          onCodeFilled={(code) => {
            formik.setFieldValue('token', code)
          }}
          onCodeChanged={formik.handleChange("token")}
          keyboardType="number-pad"
          secureTextEntry={true}
          editable={true}
          keyboardAppearance={mode === "dark" ? "dark" : "light"}
        />
        {/* </View> */}
        {<Text style={$maxerr}>{formik.touched.token && formik.errors.token}</Text>}
        <Button
          testID="login-button"
          style={$tapButton}
          preset="reversed"
          onPress={() => formik.handleSubmit()}
        >
          {formik.isSubmitting ? (
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
              text="Verify Token"
            />
          )}
        </Button>



        <View style={{
          flexDirection: "row",
          marginBottom: spacing.medium
        }}>
          <Text
            text="Didn't get an OTP ? "
            style={{
              color: colors.greyColor
            }}
          />
          <Pressable
            onPress={handleResend}
            disabled={!canResend}
          >
            <Text
              text={canResend ? "Click to resend." : `Wait ${Math.floor(countdown / 60)}:${(countdown % 60).toString().padStart(2, '0')}`}
              style={[
                $noAccTextLogin,
                {
                  color: canResend
                    ? mode === "dark" ? colors.white : colors.blueColor
                    : colors.greyColor
                },
              ]}
              // text='send'
            />
          </Pressable>
        </View>
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

const $noAccTextLogin: TextStyle = {
  fontWeight: "600",
  left: spacing.medium
}

const $welcomeLogoStyle: ImageStyle = {
  height: 41,
  width: 64,
  marginBottom: spacing.huge,
}

// const $signIn: TextStyle = {
//   marginBottom: spacing.tiny,
// }

const $enterDetails: TextStyle = {
  marginBottom: spacing.large,
  color: colors.greyColor,
}

// const $hint: TextStyle = {
//   color: colors.tint,
//   marginBottom: spacing.medium,
// }

const $otpContainer: ViewStyle = {
  marginTop: spacing.extraLarge,
  marginBottom: spacing.medium,
  alignItems: 'center',
  width: '100%'
}

const $otpInput: ViewStyle = {
  height: 100,
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  marginBottom: spacing.medium,
}

const $otpCell: ViewStyle = {
  width: 40,
  height: 40,
  borderWidth: 1,
  borderRadius: 8,
  backgroundColor: colors.background,
  borderColor: colors.palette.drakGrey,

}

const $otpCellFocused: ViewStyle = {
  borderColor: colors.blueColor,
  borderWidth: 2,
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

// const $phInput: ViewStyle = {
//   width: "100%",
//   borderRadius: 10,
// }
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
