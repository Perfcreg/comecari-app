import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import {
  TextStyle,
  ViewStyle,
  Image,
  ImageStyle,
  View,
} from "react-native"
import { Loader, Screen, Text, TextField } from "../../components"
import { useStores } from "../../models"
import { AppStackScreenProps } from "../../navigators"
import { colors, spacing } from "../../theme"
import { Icon, Button } from '@rneui/themed'
import { Formik } from "formik"
import { LoginSchema } from "app/validation/ValidateSchema"
import { color } from "@rneui/base"

// Screen logo
const WhitewelcomeLogo = require("../../assets/images/comecari/comecari-white.png")
const welcomeLogo = require("../../assets/images/comecari/logo.png")

// Geting screen Heigh and Width


interface LoginScreenProps extends AppStackScreenProps<"Auth"> { }


export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  const { navigation }: any = _props

  function SignUp() {
    navigation.navigate("Auth", {
      screen: "signUp",
    })
  }
  function Forget() {
    navigation.navigate("Auth", {
      screen: "forgetPassword"
    })
  }

  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [loader, setLoader] = useState(true)
  const [remember, setRemember] = useState(false)


  const { authenticationStore, userStore } = useStores()
  const mode = userStore.mode
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
        testID="login-heading"
        text="Sign In"
        preset="authHeading"
        style={[$signIn, { color: mode === "dark" ? colors.darkText : colors.text }]}
      />

      <Text
        text="Enter your email and password to sign in"
        style={[$signIn, { color: mode === "dark" ? colors.darkText : colors.greyColor }]}
      />

      <Formik
        initialValues={{ email: 'oyewo.oluwafemi@gmail.com', password: 'Power007$$' }}
        validationSchema={LoginSchema}
        enableReinitialize={true}
        onSubmit={
          async (values) => {
            await authenticationStore.login(values)
            navigation.navigate("User", {
              screen: "home",
            })
          }
        }
      >
        {({ handleChange, handleBlur, handleSubmit, isSubmitting, values, errors, touched }) => (

          <View style={{
            marginTop: spacing.extraLarge
          }}>
          {/* <Loader visible={authenticationStore.status === "loading"}/> */}
            <TextField
              onBlur={() => {
                handleBlur('email');
              }}
              onChangeText={handleChange('email')}
              value={values.email}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
              keyboardType="email-address"
              label="Email Address"
              placeholder="mail@mail.com"
              renderErrorMessage={touched.email == true && errors.email !== undefined}
              errorMessage={errors.email}
            />

            <TextField
              onBlur={() => {
                handleBlur('password');
              }}
              onChangeText={handleChange('password')}
              value={values.password}
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect={false}
              secureTextEntry={isAuthPasswordHidden}
              label="Password"
              placeholder="Your Password"
              rightIcon={<Icon name={isAuthPasswordHidden ? "eye" : 'eye-off'} size={20} type="feather" color={mode === "dark" ? colors.blackColor : colors.text} onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)} />}
              renderErrorMessage={touched.password == true && errors.password !== undefined}
              errorMessage={errors.password}
            />


            <View style={$keepUp}>
              <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Icon name="check-circle" 
              size={20} type="feather" 
              onPress={() => setRemember(!remember)}
              color={
                remember ? 
                  mode === "dark" ? colors.blueColor : colors.white
                  :
                  mode === "dark" ? colors.blueColor : colors.blackColor
                } />
              <Text text="Keep me loggged in" preset="smallThick" style={{ color: mode === "dark" ? colors.darkText : colors.text, paddingLeft: spacing.small }} />
              </View>
               <Text
                tx="loginScreen.forgetPass"
                preset="smallThick"
                style={[
                  $forgetPass,
                  { color: mode === "dark" ? colors.white : colors.blueColor },
                ]}
              
                onPress={Forget}
              />
            </View>

            <Button
              buttonStyle={{
                backgroundColor: colors.blueColor,
                borderRadius: 5,
              }}
              containerStyle={{
                marginHorizontal: spacing.small
              }}
              loading={isSubmitting}
              onPress={()=> handleSubmit()}
            >
              Sign in
            </Button>
          </View>
        )}
      </Formik>
      {/* 
      <View style={$signOpt}>
        <View style={$Line}></View>
        <Text tx="loginScreen.signOpt" preset="small" style={$signOptText} />
        <View style={$Line}></View>
      </View>
      
     
      <Button style={$signUpWithGoggle}>
        

        <Text>Continue with Google</Text>
      </Button>

      <Button>
        
        <Text>Continue with Apple</Text>
      </Button>
       */}


      <View style={$noAcc}>
        <Text tx="loginScreen.dontHaveAnAcc" preset="subheading" style={$noAccText} />
        <Text
          tx="loginScreen.signUp"
          preset="subheading"
          style={[
            $noAccTextLogin,
            { color: mode === "dark" ? colors.white : colors.blueColor },
          ]}
          onPress={SignUp}
        />
      </View>
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
  marginVertical: spacing.huge,
}

const $signIn: TextStyle = {
  // fontSize: 12,
  fontWeight: "bold",
  // marginBottom: spacing.medium,
}

const $forgetPass: TextStyle = {
  // color: colors.blueColor,
}

const $keepUp: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  margin: spacing.medium,
}

const $noAcc: ViewStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "row",
  marginTop: spacing.extraLarge,
}

const $noAccText: TextStyle = {
  color: colors.greyColor,
}

const $noAccTextLogin: TextStyle = {
 
  fontWeight: "600",
}

// const $maxerr: TextStyle = {
//   paddingHorizontal: spacing[3],
//   color: colors.error,
//   fontSize: 12,
//   // fontFamily: "Poppins-Regular",
// }
