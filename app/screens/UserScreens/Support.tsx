import React, { FC } from "react"
import { View, ViewStyle, TextStyle, Dimensions, Image, ImageStyle } from "react-native"
import { Text } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
import { useStores } from "../../models"
import { SafeAreaView } from "react-native-safe-area-context"
import { BookTop } from "../../components/BookTop"
import { LinearGradient } from "expo-linear-gradient"

// Images
const plane = require("../../assets/images/comecari/paperplane.png")
const email = require("../../assets/icons/comeCariICon/email.png")
const phone = require("../../assets/icons/comeCariICon/phone.png")
const arrow = require("../../assets/icons/comeCariICon/arrowleft.png")
const message = require("../../assets/icons/comeCariICon/message.png")

const { height } = Dimensions.get("screen")

export const Suport: FC<DemoTabScreenProps<"Support">> = function Support(_props) {
  const { userStore }: any = useStores()

  const mode = userStore.mode
  return (
    <SafeAreaView
      style={[
        $BidPage,
        { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
      ]}
    >
      <BookTop title="Support" />

      <View style={$support}>
        <Image source={plane} style={$plane} />
        <Text
          tx="support.supportText"
          style={[$text, { color: mode === "dark" ? colors.darkText : colors.text }]}
          weight="bold"
        />

        <View style={$biddersDetails}>
          <View style={$biddersDetailsProfile}>
            <Image source={phone} style={$biddersDetailsImg} />
          </View>
          <View style={$biddersDetailsText}>
            <Text
              tx="support.Phone"
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
              weight="semiBold"
            />

            <Text tx="support.phoneNum" style={$biddersDetailsPrice} weight="medium" />
          </View>
        </View>
        <View style={$biddersDetails}>
          <View style={$biddersDetailsProfile}>
            <Image source={email} style={$biddersDetailsImg} />
          </View>
          <View style={$biddersDetailsText}>
            <Text
              tx="support.Email"
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
              weight="semiBold"
            />
            <Text tx="support.eAddress" style={$biddersDetailsPrice} weight="medium" />
          </View>
        </View>

        <View style={$live}>
          <View style={$liveMessage}>
            <LinearGradient
              colors={["#4c669f", "#3b5998", "#192f6a", "#646DEB", "#0712B1"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={$biddersDetailsProfile}
            >
              <Image source={message} style={$biddersDetailsImg} />
            </LinearGradient>

            <View style={$biddersDetailsText}>
              <Text
                tx="support.live"
                style={{ color: mode === "dark" ? colors.darkText : colors.text }}
                weight="semiBold"
              />
              <Text tx="support.liveChat" style={$biddersDetailsPrice} weight="medium" />
            </View>
          </View>
          <Image source={arrow} style={$biddersDetailsImgg} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const $BidPage: ViewStyle = {
  backgroundColor: colors.white,
  height,
}
const $support: ViewStyle = {
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
}
const $plane: ImageStyle = {
  width: 256,
  height: 256,
  alignSelf: "center",
  marginTop: spacing.large,
}

const $text: TextStyle = {
  textAlign: "center",
  width: 260,
  marginRight: "auto",
  marginLeft: "auto",
  marginBottom: spacing.huge,
}

const $biddersDetails: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  marginBottom: spacing.large,
}
const $biddersDetailsProfile: ViewStyle = {
  backgroundColor: "#ECEDF9",
  borderRadius: 100,
  width: 45,
  height: 45,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const $biddersDetailsImg: ImageStyle = {
  width: 20.49,
  height: 17.42,
}

const $biddersDetailsText: ViewStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  marginLeft: spacing.medium,
}

const $biddersDetailsPrice: TextStyle = {
  color: colors.greyColor,
}

const $live: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  marginTop: spacing.massive,
}
const $liveMessage: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
}
const $biddersDetailsImgg: ImageStyle = {
  width: 10.05,
  height: 17.59,
}
