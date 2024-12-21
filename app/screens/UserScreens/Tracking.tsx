import React, { FC, ReactElement } from "react"
import { View, ViewStyle, TextStyle } from "react-native"

import { TextField, Button } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { spacing, colors } from "../../theme"
import { useStores } from "../../models"

// import { SideBar } from "../../components/SideNav"
import { Controller, useForm } from "react-hook-form"

// Images

export interface Demoa {
  name: string
  description: string
  data: ReactElement[]
}

type FormData = {
  shipmentNumber: string
}

export const Tracking: FC<DemoTabScreenProps<"Tracking">> = function Tracking(_props) {
  const { navigation }: any = _props

  const { userStore } = useStores()

  const mode = userStore.mode

  function trackItem() {
    navigation.navigate("User", {
      screen: "TrackItem",
    })
  }

  const {
    control,
    // handleSubmit,
    // formState: { errors },
  } = useForm<FormData>()

  return (
    
      <View style={$Tracker}>
   
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="shipmentNumber"
          defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              containerStyle={$textField}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              labelTx="Track.trackLabel"
              placeholderTx="Track.trackPlace"
            />
          )}
        />
        <Button
          testID="login-button"
          tx="Track.trackBtn"
          style={$tapButton}
          preset="reversed"
          onPress={trackItem}
        />
      </View>
  )
}

const $Tracker: ViewStyle = {
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
}
// const $trackerHeader: TextStyle = {
//   marginTop: spacing.large,
//   marginBottom: spacing.extraLarge,
// }
const $textField: TextStyle = {
  marginBottom: spacing.large,
}

const $tapButton: ViewStyle = {
  height: 45,
  marginTop: spacing.extraSmall,
  marginBottom: spacing.extraLarge,
}
