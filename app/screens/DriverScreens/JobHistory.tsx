import React, { FC, useState } from "react"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "../../navigators"
import { useStores } from "../../models"
import { colors } from "../../theme"
// import { FontAwesome } from "@expo/vector-icons"
import data from "../../utils/Data/ShipmentHistory.json"
import { History } from "../../components/ShipmentHistory"
import ShipInfo from "../../components/Modals/ShipmentInfo"
import { DriverSideNav } from "../../components/DriverSideNav"

interface DriverScreenProps extends AppStackScreenProps<"Driver"> {}

export const JobHistory: FC<DriverScreenProps> = function JobHistory(_props) {
  const { navigation } = _props
  const [openModal, setOpenModal] = useState(false)

  function history() {
    setOpenModal(!openModal)
  }

  const { userStore }: any = useStores()

  const mode = userStore.mode
  return (
    <DriverSideNav
      navigation={navigation}
      mode={mode === "dark" ? colors.darkBackground : colors.background}
    >
      <View style={$shipment}>
        <History title="Shipment History" data={data} />
        {openModal ? <ShipInfo history={history} /> : null}
      </View>
    </DriverSideNav>
  )
}
const $shipment: ViewStyle = {}
