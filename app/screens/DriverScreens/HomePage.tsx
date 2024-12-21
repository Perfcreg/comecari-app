import React, { FC, useEffect } from "react"
import { View, ViewStyle, ScrollView, TextStyle } from "react-native"
import { Text } from "../../components"
// import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
// import { DrawerIconButton } from "./DrawerIconButton"
import { TrackingBoard } from "../../components/Tracking"
import { History } from "../../components/ShipmentHistory"
import { Screen } from '../../components'
import { useStores } from "../../models"
import data from "../../utils/Data/ShipmentHistory.json"

import { AppStackScreenProps } from "../../navigators"
import { FontAwesome5 } from "@expo/vector-icons"
// const searchIcon = require("../../../assets/icons/comeCariICon/search.png")

interface DriverScreenProps extends AppStackScreenProps<"Driver"> {}

const van = require("../../assets/images/comecari/van.png")
const van2 = require("../../assets/images/comecari/van3.png")
const van3 = require("../../assets/images/comecari/van2.png")
const truck = require("../../assets/images/comecari/truck.png")

export const DriverHome: FC<DriverScreenProps> = function DriverHome(_props) {
  const { navigation } = _props

  const { userStore }: any = useStores()
  useEffect(() => {
    userStore.getUser()
  }, [])
  const mode = userStore.mode

  const shipmentData = [
    {
      shipmentNumber: "SH001",
      truckType: truck,
      pickupLocation: "Lagos, Nigeria",
      destination: "Abuja, Nigeria",
      status: "In Transit",
    },
    {
      shipmentNumber: "SH002",
      truckType: van,
      pickupLocation: "Port Harcourt, Nigeria",
      destination: "Kano, Nigeria",
      status: "Delivered",
    },
    {
      shipmentNumber: "SH003",
      truckType: van2,
      pickupLocation: "Ibadan, Nigeria",
      destination: "Enugu, Nigeria",
      status: "Pending",
    },
    {
      shipmentNumber: "SH004",
      truckType: van3,
      pickupLocation: "Kaduna, Nigeria",
      destination: "Jos, Nigeria",
      status: "In Transit",
    },
  ]

  return (
 
      <ScrollView>
        <View style={$pending}>
          {/* <Text
            tx="DriverHomePage.Name"
            preset="heading"
            style={[$trackHeading, { color: mode === "dark" ? colors.darkText : colors.text }]}
          /> */}
          <Text
            preset="heading"
            style={[$trackHeading, { color: mode === "dark" ? colors.darkText : colors.text }]}
          >
            Hi,{" "}
            {userStore?.user?.lastName?.charAt(0).toUpperCase() +
              userStore?.user?.lastName?.slice(1)}
          </Text>
          <Text tx="DriverHomePage.pending" preset="small" style={$trackSub} />
        </View>
        <View style={$trackPack}>
          <View style={$searchIcon}>
            <FontAwesome5 name="wallet" size={15} style={$searchIconI} />
          </View>
          <View style={$search}>
            <Text style={$textField} tx="DriverHomePage.balance" preset="small" />
            <Text style={$textFieldt} tx="DriverHomePage.balanceVal" />
          </View>
        </View>
        {/* <TrackingBoard title="" />
        <History title="Recent Shipment" history={null} /> */}
        <TrackingBoard title="On Going Jobs" item={shipmentData} />
        <History title="Recent Shipment" data={data} seeMore={false} action={undefined} />
      </ScrollView>
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
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  height: 87,
}


const $trackHeading: TextStyle = {
  fontSize: 22,
  margin: 0,
}
const $trackSub: TextStyle = {
  color: colors.greyColor,
  marginTop: -8,
}
const $textField: ViewStyle = {}
const $textFieldt: TextStyle = {
  fontSize: 22,
  fontWeight: "700",
  marginTop: spacing.extraSmall,
}
const $search: TextStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "100%",
  borderRadius: 19,
  paddingHorizontal: 5,
  height: 39,
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

// const $ImageStyle: ImageStyle = {
//   width: 13,
//   height: 13,
// }

const $pending: ViewStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
}
