import React, { FC } from "react"
import { ViewStyle, ScrollView, TextStyle, TouchableOpacity } from "react-native"
import { Text } from "../../components"
import { colors } from "../../theme"
import { useStores } from "../../models"
import { TrackingBoard } from "../../components/Tracking"
import { DriverSideNav } from "../../components/DriverSideNav"
import { AppStackScreenProps } from "../../navigators"
import { FontAwesome } from "@expo/vector-icons"
// import Detailss from "../../components/Modals/Details"

interface DriverScreenProps extends AppStackScreenProps<"Driver"> {}

const truck = require("../../assets/images/comecari/truck.png")
const van = require("../../assets/images/comecari/van.png")
const van2 = require("../../assets/images/comecari/van3.png")
const van3 = require("../../assets/images/comecari/van2.png")
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

export const MarketPlace: FC<DriverScreenProps> = function MarketPlace(_props) {
  // const [details, setDetails] = useState(false)

  // const togDetails = () => {
  //   setDetails(!details)
  // }

  const { navigation } = _props

  const { userStore }: any = useStores()
  const mode = userStore.mode

  return (
    <DriverSideNav
      navigation={navigation}
      mode={mode === "dark" ? colors.darkBackground : colors.background}
    >
      <ScrollView style={$market}>
        <Text style={$trackSub}>MarketPlace</Text>
        <TouchableOpacity style={$filter}>
          <Text style={$filterText}>Filter</Text>
          <FontAwesome name="bar-chart" color="#fff" size={20} />
        </TouchableOpacity>
        <TrackingBoard title="Current Shipment" item={shipmentData} />
      </ScrollView>
            {/* {details ? <Detailss togDetails={togDetails} navigation={navigation} /> : null} */}

    </DriverSideNav>
  )
}

const $trackSub: TextStyle = {
  color: colors.white,
  fontSize: 20,
  fontWeight: "700",
  marginTop: 50,
}

const $market: ViewStyle = {
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
}

const $filter: ViewStyle = {
  width: "90%",
  backgroundColor: colors.drakGrey,
  borderRadius: 8,
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  height: 48,
  gap: 20,
  marginRight: "auto",
  marginTop: 20,
}
const $filterText: TextStyle = {
  color: colors.white,
  fontSize: 16,
  fontWeight: "400",
}
