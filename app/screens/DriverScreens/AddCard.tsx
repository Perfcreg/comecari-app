import React, { FC } from "react"
import {
  View,
  ViewStyle,
  //   TouchableOpacity,
  Dimensions,
} from "react-native"
import { Button, TextField } from "../../components"
import { colors, spacing } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { BookTop } from "../../components/BookTop"
import { AppStackScreenProps } from "../../navigators"
// import { FontAwesome5, FontAwesome } from "@expo/vector-icons"

const { height } = Dimensions.get("screen")
interface DriverScreenProps extends AppStackScreenProps<"Driver"> {}

export const AddCard: FC<DriverScreenProps> = function AddCard(_props) {
    const { navigation } = _props

      const next = () => {
    navigation.navigate("Driver", {
      screen: "AddCard",
    })}

  return (
    <SafeAreaView style={$BidPage}>
      <BookTop title="Cards 2"/>

      <View style={$bigs}>
        <TextField
            containerStyle={$textFields}
            autoCapitalize="none"
            autoComplete="name"
            autoCorrect={false}
            keyboardType="default"
            labelTx="card.accountLabel"
            placeholderTx="card.accNum"
          />
            <TextField
            containerStyle={$textFields}
            autoCapitalize="none"
            autoComplete="name"
            autoCorrect={false}
            keyboardType="default"
            labelTx="card.bankLabel"
            placeholderTx="card.backVal"
          />
          <TextField
            containerStyle={$textFields}
            autoCapitalize="none"
            autoComplete="name"
            autoCorrect={false}
            keyboardType="default"
            labelTx="card.name"
            placeholderTx="card.nameVal"
          />
        <Button
          testID="login-button"
          tx="card.add"
          style={$tapButton}
          preset="reversed"
          onPress={next}
        />
      </View>
    </SafeAreaView>
  )
}

const $BidPage: ViewStyle = {
  backgroundColor: colors.white,
  height,
}

const $bigs: ViewStyle = {
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
  marginTop:spacing.large
}

const $tapButton: ViewStyle = {
  height: 45,
  marginTop: spacing.extraSmall,
  marginBottom: spacing.extraLarge,
}

const $textFields: ViewStyle = {
  marginBottom: spacing.small,
}
