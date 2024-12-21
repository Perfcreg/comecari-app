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
import { LoginSchema, RegisterSchema } from "app/validation/ValidateSchema"
import { PhoneInputBox } from "app/components/PhoneInput"

// Screen logo
const WhitewelcomeLogo = require("../../assets/images/comecari/comecari-white.png")
const welcomeLogo = require("../../assets/images/comecari/logo.png")

// Geting screen Heigh and Width


interface SignUpScreenProps extends AppStackScreenProps<"Auth"> { }


export const SignUpScreen: FC<SignUpScreenProps> = observer(function SignUpScreen(_props) {
  const { navigation }: any = _props

  function SignUp() {
    navigation.navigate("Auth", {
      screen: "login",
    })
  }
  function Forget() {
    navigation.navigate("Auth", {
      screen: "passwordReset",
    })
  }

  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [loader, setLoader] = useState(true)


  const { authenticationStore, userStore } = useStores()

  const mode = userStore.mode

  return (
    <Screen
      preset="auto"
      // safeAreaEdges={["top"]}
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
        text="Welcome"
        preset="authHeading"
        style={[$signIn, { color: mode === "dark" ? colors.darkText : colors.text }]}
      />
       <Text
        text="It's great to have you here. Kindly fill in the details below to get started."
        style={[$signIn, { color: mode === "dark" ? colors.darkText : colors.greyColor }]}
      />

      <Formik
        initialValues={{ email: '', password: '', fullName: '', phoneNumber: '' }}
        validationSchema={RegisterSchema}
        enableReinitialize={true}
        onSubmit={
          async (values) => {
            await authenticationStore.register(values)
            if(authenticationStore.status == "success"){
              navigation.navigate("Auth", {
                screen: "otp",
                params: {
                  phoneNumber: values.phoneNumber,
                  email: values.email,
                  action: 'register'
                }
              })
            }else{
              if(authenticationStore.status == "error"){
                alert(authenticationStore.error)
              }
            }
           
          }
        }
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (

<View style={{
  marginTop: spacing.extraLarge
}}>
          {/* <Loader visible={loader}/> */}
          <TextField
              onBlur={() => {
                handleBlur('fullName');
              }}
              onChangeText={handleChange('fullName')}
              value={values.fullName}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              label="Full Name"
              placeholder="Enter Your full name"
              renderErrorMessage={touched.fullName == true && errors.fullName !== undefined}
              errorMessage={errors.fullName}
            /> 

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
              placeholder="hello@company.com"
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
              placeholder="**********"
              rightIcon={<Icon name={isAuthPasswordHidden ? "eye" : 'eye-off'} size={20} type="feather" color={mode === "dark" ? colors.blackColor : colors.text} onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)} />}
              
              renderErrorMessage={touched.password == true && errors.password !== undefined}
              errorMessage={errors.password}
            />

            <PhoneInputBox 
              value={values.phoneNumber} 
              onChangeText={handleChange('phoneNumber')}
              error={errors.phoneNumber} 
              // error={touched.phone == true && errors.phone !== undefined}

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
              loading={isSubmitting}
              onPress={() => handleSubmit()}

            >
              Register
            </Button>
          </View>
        )}
      </Formik>
      {/* 
      <View style={$signOpt}>
        <View style={$Line}></View>
        <Text tx="SignUpScreen.signOpt" preset="small" style={$signOptText} />
        <View style={$Line}></View>
      </View>
      
     
      <Button style={$signUpWithGoggle}>
        

        <Text>Continue with Google</Text>
      </Button>

      <Button>
        
        <Text>Continue with Apple</Text>
      </Button> */}


      <View style={$noAcc}>
        <Text text="Already Have an Account?" preset="subheading" style={$noAccText} />
        <Text
          text="Login"
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
  padding: spacing.medium,
  // marginTop: 10
}


const $welcomeLogoStyle: ImageStyle = {
  height: 41,
  width: 64,
  marginVertical: spacing.huge,
}

const $signIn: TextStyle = {
  // marginBottom: spacing.large,
}

const $forgetPass: TextStyle = {
  color: colors.white,
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
  // justifyContent: "center",
  flexDirection: "row",
  margin: spacing.large,
}

const $noAccText: TextStyle = {
  color: colors.greyColor,
}

const $noAccTextLogin: TextStyle = {
  color: colors.background,
  fontWeight: "600",
  left: spacing.medium
}

// const $maxerr: TextStyle = {
//   paddingHorizontal: spacing[3],
//   color: colors.error,
//   fontSize: 12,
//   // fontFamily: "Poppins-Regular",
// }
