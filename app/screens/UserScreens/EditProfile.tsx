import React, { FC } from "react"
import { View, ViewStyle, Dimensions } from "react-native"
//  Image, ImageStyle ,TextStyle,
import { TextField, Button } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { BookTop } from "../../components/BookTop"
import { useStores } from "../../models"
import { useNavigation } from "@react-navigation/native"

const { height } = Dimensions.get("screen")

export const EditProfile: FC<DemoTabScreenProps<"EditProfile">> = function EditProfile() {
  const { navigate }: any = useNavigation()

  // const { testt }: any = route.params

  // console.log("llloo", testt)
  const bidder = () => {
    navigate("User", {
      screen: "ShipmentBooked",
    })
  }

  const { userStore }: any = useStores()

  const mode = userStore.mode

  return (
    <SafeAreaView
      style={[
        $BidPage,
        { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
      ]}
    >
      <BookTop title="Edit Profile" />

      <View style={$profileC}>
        <TextField
          value="olamquadri1@gmail.com"
          containerStyle={$textField}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          keyboardType="email-address"
          labelTx="loginScreen.emailFieldLabel"
          placeholderTx="loginScreen.emailFieldPlaceholder"
        />
        <TextField
          value="olamquadri1@gmail.com"
          containerStyle={$textField}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          keyboardType="email-address"
          labelTx="loginScreen.emailFieldLabel"
          placeholderTx="loginScreen.emailFieldPlaceholder"
       />
        <TextField
          value="olamquadri1@gmail.com"
          containerStyle={$textField}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          keyboardType="email-address"
          labelTx="loginScreen.emailFieldLabel"
          placeholderTx="loginScreen.emailFieldPlaceholder"
        />
        <Button
          onPress={bidder}
          tx="Bid.update"
          preset="reversed"
          testID="login-button"
          style={$txtBtn}
        />
      </View>
    </SafeAreaView>
  )
}

const $BidPage: ViewStyle = {
  backgroundColor: colors.white,
  height,
}

const $profileC: ViewStyle = {
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
  marginTop: spacing.large,
}

const $textField: ViewStyle = {
  marginBottom: spacing.medium,
}
const $txtBtn: ViewStyle = {
  backgroundColor: colors.blueColor,
  borderColor: colors.blueColor,
  marginTop: spacing.large,
}
