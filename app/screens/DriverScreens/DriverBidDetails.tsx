import React, { FC } from "react"
import {
  Image,
  ImageStyle,
  View,
  ViewStyle,
  TextStyle,
  //   TouchableOpacity,
  Dimensions,
} from "react-native"
import { Text, Button } from "../../components"
import { colors, spacing } from "../../theme"
// import { SideBar } from "../../components/SideNav"
import { SafeAreaView } from "react-native-safe-area-context"
import { BookTop } from "../../components/BookTop"
import { AppStackScreenProps } from "../../navigators"
import { FontAwesome5 } from "@expo/vector-icons"
import { useStores } from "../../models"
// Images
// const drive = require("../../assets/images/comeCariImage/dri.png")
const van = require("../../assets/images/comecari/van.png")
// const back = require("../../../assets/icons/comeCariICon/arrowhite.png")
// const googleLogo = require("../../../assets/icons/comeCariICon/check.png")

const { height } = Dimensions.get("screen")
interface DriverScreenProps extends AppStackScreenProps<"Driver"> {}

export const DriverBidDetails: FC<DriverScreenProps> = function DriverBidDetails(_props) {
  // const { navigation } = _props

  // const bidder = () => {
  //   navigation.navigate("User", {
  //     screen: "Notification",
  //   })
  // }

  const { userStore }: any = useStores()
  const mode = userStore.mode

  return (
    <SafeAreaView
      style={[
        $BidPage,
        { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
      ]}
    >
      <BookTop title="Bid Details" />

      <View style={$details}>
        <Text tx="User.shipmentNum" preset="default" weight="medium" style={$detailsText} />
        <Text
          tx="User.Numbers"
          style={{ color: mode === "dark" ? colors.darkText : colors.text }}
          preset="heading2"
        />
        <Text tx="Bid.Truck" preset="default" style={$detailsText} />
        <Image source={van} style={$van} />

        <View style={$trackLocation}>
          <View style={$trackLine}>
            <View style={$startDot}></View>
            <View style={$DesLine}></View>
            <View style={$endDot}></View>
          </View>
          <View style={$Location}>
            <View style={$from}>
              <Text tx="User.from" preset="default" style={$fromText} />
              <Text
                tx="User.pickUp"
                style={{ color: mode === "dark" ? colors.darkText : colors.text }}
                preset="formHelper"
                weight="semiBold"
              />
            </View>
            <View style={$to}>
              <Text tx="User.to" preset="default" style={$fromText} />
              <Text
                tx="User.Delivery"
                style={{ color: mode === "dark" ? colors.darkText : colors.text }}
                preset="formHelper"
                weight="semiBold"
              />
            </View>
          </View>
        </View>

        <View style={$info}>
          <View>
            <Text tx="Book.weight" style={$infoTitle} />
            <View style={$infoView}>
              <Text tx="Book.weightVal" style={$infoText} />
            </View>
          </View>
          <View>
            <Text tx="Bid.Document" style={$infoTitle} />
            <View style={[$infoView, { backgroundColor: colors.blueColor }]}>
              <Text
                tx="Bid.Download"
                style={[$infoText, { color: colors.white, marginLeft: spacing.extraLarge }]}
              />
            </View>
          </View>
          <View>
            <Text tx="Bid.offer" style={$infoTitle} />
            <View style={$infoView}>
              <Text tx="history.price" style={$infoText} />
            </View>
          </View>
          <View style={$infoViews}>
            <FontAwesome5 style={$infoViewss} name="messages" size={20} />
          </View>
        </View>

        <View style={$Text}>
          <Text
            tx="Bid.text"
            style={{ color: mode === "dark" ? colors.darkText : colors.text }}
            preset="default"
            weight="bold"
          />
          <Button
            tx="DriverHomePage.accept"
            preset="reversed"
            testID="login-button"
            style={$txtBtn}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const $BidPage: ViewStyle = {
  backgroundColor: colors.white,
  height,
}

const $details: ViewStyle = {
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
  marginTop: spacing.medium,
}
const $detailsText: TextStyle = {
  color: colors.greyColor,
  marginTop: spacing.small,
}

const $van: ImageStyle = {
  height: 111,
  width: 138,
}

const $trackLocation: ViewStyle = {
  height: 100,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: 10,
  marginBottom: spacing.extraLarge,
}
const $trackLine: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
const $startDot: ViewStyle = {
  backgroundColor: colors.blackColor,
  width: 7,
  height: 7,
  borderRadius: 100,
}

const $DesLine: ViewStyle = {
  height: "70%",
  borderWidth: 0.5,
  borderStyle: "dashed",
  backgroundColor: "#000",
  position: "relative",
}
const $endDot: ViewStyle = {
  width: 7,
  height: 7,
  borderWidth: 1,
  borderColor: "#000",
  borderRadius: 100,
}
const $Location: ViewStyle = {
  display: "flex",
  justifyContent: "space-between",
}

const $from: ViewStyle = {
  marginBottom: spacing.large,
}
const $fromText: TextStyle = {
  color: colors.greyColor,
}

const $to: ViewStyle = {}

const $info: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  flexDirection: "row",
  gap: 10,
}

const $infoTitle: TextStyle = {
  color: colors.greyColor,
  marginBottom: spacing.tiny,
}
const $infoView: ViewStyle = {
  width: 151,
  height: 44,
  borderWidth: 1,
  borderRadius: 5,
  borderColor: "#B8B0B0",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
}
const $infoViews: ViewStyle = {
  width: 151,
  height: 44,
  borderWidth: 1,
  borderRadius: 5,
  borderColor: "#B8B0B0",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: colors.blueColor,
}

const $infoViewss: TextStyle = {
  color: colors.white,
}

const $infoText: TextStyle = {
  width: "80%",
  marginLeft: "auto",
  marginRight: "auto",
  color: colors.greyColor,
}

const $Text: ViewStyle = {
  marginTop: spacing.extraLarge,
}

const $txtBtn: ViewStyle = {
  backgroundColor: colors.blueColor,
  borderColor: colors.blueColor,
  marginTop: spacing.large,
}
