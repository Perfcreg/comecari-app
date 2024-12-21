import React, { FC } from "react"
import { Image, ImageStyle, View, ViewStyle, ScrollView, TextStyle, TextInput } from "react-native"
import { Text } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
// import { DrawerIconButton } from "./DrawerIconButton"
import { TrackingBoard } from "../../components/Tracking"
import { History } from "../../components/ShipmentHistory"
// import { FontAwesome } from "@expo/vector-icons"
// import { Drawer } from "../../components/Drawer"

import { SideBar } from "../../components/SideNav"
const searchIcon = require("../../../assets/icons/comeCariICon/search.png")

export const DemoShowroomScreen: FC<DemoTabScreenProps<"DemoShowroom">> =
  function DemoShowroomScreen(_props) {
    // const { navigation } = _props

    return (
      <SideBar>
        <ScrollView>
          <View style={$trackPack}>
            <Text tx="User.trackHeadr" preset="authHeading" style={$trackHeading} />
            <Text tx="User.trackSub" preset="small" style={$trackSub} />

            <View style={$search}>
              <TextInput
                style={$textField}
                placeholder="Tracking Number..."
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
              />
              <View style={$searchIcon}>
                <Image style={$ImageStyle} source={searchIcon} />
              </View>
            </View>
          </View>
          <TrackingBoard title="Current Shipment" />
          <History title="Recent Shipment" history={null} />
        </ScrollView>
      </SideBar>
    )
  }
const $trackPack: ViewStyle = {
  borderRadius: 27,
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
  backgroundColor: colors.lightBlue,
  padding: 10,
  paddingLeft: 20,
  marginTop: spacing.extraLarge,
}

const $trackHeading: TextStyle = {
  fontSize: 16,
}
const $trackSub: TextStyle = {
  color: colors.greyColor,
  marginBottom: spacing.extraLarge,
}
const $textField: ViewStyle = {
  width: "85%",
  borderWidth: 0,
  borderColor: "transparent",
  marginLeft: "auto",
  height: "100%",
}
const $search: TextStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  backgroundColor: colors.white,
  borderRadius: 19,
  paddingHorizontal: 5,
  height: 39,
}
const $searchIcon: ViewStyle = {
  backgroundColor: colors.blueColor,
  height: 35,
  width: 35,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 100,
}

const $ImageStyle: ImageStyle = {
  width: 13,
  height: 13,
}
