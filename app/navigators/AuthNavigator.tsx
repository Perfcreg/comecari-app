import React from "react"
import { NavigatorScreenParams } from "@react-navigation/native"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  LoginScreen,
  PhoneScreen,
  ResetScreen,
  PasswordReset,
  SignUpScreen,
  OtpScreen,
  ForgetPassword,
  SplashScreen,
  PasswordLoginScreen
} from "../screens"
import { CompositeScreenProps } from "@react-navigation/core"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { AppStackParamList, AppStackScreenProps } from "."

export type AuthNavigatorParamList = {
  login: undefined,
  phone: undefined,
  reset: undefined,
  passwordReset: undefined,
  signUp: undefined,
  otp: any,
  forgetPassword: undefined,
  splash: undefined,
  passwordLogin: { customerName: string }
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AuthTabScreenProps<T extends keyof AuthNavigatorParamList> = CompositeScreenProps<
  BottomTabScreenProps<AuthNavigatorParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Stack = createNativeStackNavigator<AuthNavigatorParamList>()
export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="splash"
    >
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="phone" component={PhoneScreen} />
      <Stack.Screen name="reset" component={ResetScreen} />
      <Stack.Screen name="signUp" component={SignUpScreen} />
      <Stack.Screen name="passwordReset" component={PasswordReset} />
      <Stack.Screen name="otp" component={OtpScreen} />
      <Stack.Screen name="forgetPassword" component={ForgetPassword} />
      <Stack.Screen name="passwordLogin" component={PasswordLoginScreen} />
    </Stack.Navigator>
  )
}