import React, { FC } from "react"
import { Image, ImageStyle, View, ViewStyle, TextStyle, TouchableOpacity } from "react-native"
import { Text } from "../../components"
import { colors, spacing } from "../../theme"
// import { DrawerIconButton } from "./DrawerIconButton"

// import { FontAwesome } from "@expo/vector-icons"
import data from "../../utils/Data/Bids.json"
import { AppStackScreenProps } from "../../navigators"
import { DriverSideNav } from "../../components/DriverSideNav"
import { useStores } from "../../models"

// Images
const box = require("../../../assets/icons/comeCariICon/box.png")
interface DriverScreenProps extends AppStackScreenProps<"Driver"> {}

export const DriverBids: FC<DriverScreenProps> = function DriverBids(_props) {
  const { navigation }: any = _props
  function bidder() {
    navigation.navigate("Driver", {
      screen: "DriverBidDetails",
    })
  }

  const { userStore }: any = useStores()

  const mode = userStore.mode

  return (
    <DriverSideNav
      navigation={navigation}
      mode={mode === "dark" ? colors.darkBackground : colors.background}
    >
      <View
        style={[
          $history,
          { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
        ]}
      >
        <View style={$trackingTop}>
          <Text
            preset="authHeading"
            style={{ color: mode === "dark" ? colors.darkText : colors.text }}
          >
            Pending Bids
          </Text>
        </View>
        {data.map((data, inx) => {
          return (
            <TouchableOpacity
              onPress={bidder}
              style={[
                $HisCon,
                { backgroundColor: mode === "dark" ? colors.lightBlue : colors.white },
              ]}
              key={inx}
            >
              <View style={$box}>
                <Image source={box} style={$boxImage} />
              </View>

              <View style={$text}>
                <Text preset="formLabel" weight="bold">
                  {data.location}
                </Text>
                <Text
                  style={[
                    $locationText,
                    { color: data.Status === "Pending" ? colors.yellow : colors.red },
                  ]}
                >
                  {data.Status}
                </Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </DriverSideNav>
  )
}

const $history: ViewStyle = {
  marginTop: spacing.large,
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: 27,
  padding: 10,
}

const $trackingTop: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  marginBottom: spacing.medium,
}

const $HisCon: ViewStyle = {
  paddingRight: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 10,
  flexDirection: "row",
  backgroundColor: colors.lightGrey,
  width: "100%",
  height: 75,
  borderRadius: 27,
  marginBottom: spacing.medium,
}

const $box: ViewStyle = {
  width: 35,
  backgroundColor: colors.white,
  borderRadius: 100,
  height: 35,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
}
const $boxImage: ImageStyle = {
  width: 16,
  height: 16,
}

const $locationText: TextStyle = {
  color: colors.greyColor,
}

const $text: TextStyle = {}
