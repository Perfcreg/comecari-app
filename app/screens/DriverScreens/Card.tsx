import React, { FC } from "react"
import {
  View,
  ViewStyle,
  TextStyle,
  //   TouchableOpacity,
  Dimensions,
} from "react-native"
import { Text, Button } from "../../components"
import { colors, spacing } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { BookTop } from "../../components/BookTop"
import { AppStackScreenProps } from "../../navigators"
import { FontAwesome5, FontAwesome } from "@expo/vector-icons"

const { height } = Dimensions.get("screen")
interface DriverScreenProps extends AppStackScreenProps<"Driver"> {}

export const Cards: FC<DriverScreenProps> = function Cards(_props) {
  const { navigation } = _props

  const next = () => {
    navigation.navigate("Driver", {
      screen: "AddCard",
    })
  }

  return (
    <SafeAreaView style={$BidPage}>
      <BookTop title="Cards" />

      <View style={$bigs}>
        <View style={$trackPack}>
          <View style={$searchIcon}>
            <FontAwesome5 name="wallet" size={15} style={$searchIconI} />
          </View>
          <View style={$search}>
            <View style={$card}>
              <Text style={$tedt} tx="card.default" preset="small" />
              <FontAwesome style={$tedt} name="dot-circle-o" size={10} />
              <Text style={$tedt} tx="card.uba" preset="small" />
            </View>
            <Text style={$textFieldt} tx="card.cardNum" />
          </View>
        </View>

        <Button testID="login-button" tx="card.add" style={$tapButton} preset="reversed" onPress={next}/>

        <Text tx="card.other" preset="small" />
        <View style={$trackPack}>
          <View style={$searchIcon}>
            <FontAwesome5 name="wallet" size={15} style={$searchIconI} />
          </View>
          <View style={$search}>
            <View style={$card}>
         
              <Text style={$tedt} tx="card.access" preset="small" />
            </View>
            <Text style={$textFieldt} tx="card.cardNum" />
          </View>
        </View>
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
}

const $trackPack: ViewStyle = {
  borderRadius: 27,
  backgroundColor: colors.lightBlue,
  padding: 10,
  paddingLeft: 20,
  marginTop: spacing.extraLarge,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  height: 87,
}

const $searchIcon: ViewStyle = {
  backgroundColor: colors.blackColor,
  height: 35,
  width: 35,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 100,
}

const $searchIconI: TextStyle = {
  color: colors.white,
}
const $search: TextStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "100%",
  borderRadius: 19,
  paddingHorizontal: 5,
  height: 39,
  marginLeft: spacing.medium,
}

const $card: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 10,
  flexDirection: "row",
}
const $tedt: TextStyle = {
  color: colors.greyColor,
}
const $textFieldt: TextStyle = {
  fontSize: 22,
  fontWeight: "700",
  marginTop: spacing.extraSmall,
}

const $tapButton: ViewStyle = {
  height: 45,
  marginTop: spacing.extraSmall,
  marginBottom: spacing.extraLarge,
}
