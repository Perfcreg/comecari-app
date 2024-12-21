import React, { useState } from "react"
import { TextStyle, View, ViewStyle, Image, ImageStyle, TouchableOpacity, Modal } from "react-native"
import { colors, spacing } from "../theme"
// import { Text } from "./Text"
import { useStores } from "../models"
import ShipInfo from "./Modals/ShipmentInfo"
import { Text } from '@rneui/themed'
import { CircleProgress } from "./CircleProgress"
import ShipmentList from "./ShipmentList"

interface HistoryProps {
  title: string
  data: any
  seeMore: boolean
  action: any
}
const box = require("../../assets/icons/comeCariICon/box.png")

export const History = ({ title, data, seeMore, navigation }) => {
  const { userStore }: any = useStores()

  const [modalContent, setModalContent] = useState()
  const [showModal, setShowModal] = useState(false)

  const mode = userStore.mode

  return (
    <View style={$history}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // paddingHorizontal: spacing.medium,
        marginTop: spacing.medium
      }}>
        <Text h4 h4Style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: spacing.medium,
          color: mode === "dark" ? colors.darkText : colors.text
        }}>{title}</Text>

        <Text h4 h4Style={{
          fontSize: 14,
          fontWeight: "bold",
          marginBottom: spacing.medium,
          color: colors.blueColor
        }}
          onPress={() => navigation.navigate("User", { screen: "ShipmentHistory" })}>See more</Text>
      </View>

      {data?.length > 0 && data.map((data, inx) => {
        return (
          <View key={inx}>
            <TouchableOpacity onPress={() => {
              setModalContent(data)
              setShowModal(true)
            }}>
              <ShipmentList data={data} />
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={showModal}
              onRequestClose={() => {
                setShowModal(!showModal);
              }}>
              <ShipInfo
                shipmentNumber={modalContent?.shipmentNumber}
                truckType={modalContent?.truckType}
                origin={modalContent?.origin.name}
                destination={modalContent?.destination.name}
                description={modalContent?.description}
                weight={modalContent?.weight}
                price={modalContent?.proposedFee}
                image={modalContent?.truckImage}

                history={() => setShowModal(!showModal)}
              />
            </Modal>

          </View>
        )
      })}
    </View>
  )
}

const $history: ViewStyle = {
  flex: 1,
  borderRadius: 27,
  padding: spacing.medium,
}

const $trackingTop: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  // marginBottom: spacing.medium,
  padding: spacing.medium,

}

const $seeMore: TextStyle = {
  textDecorationLine: 'underline',
}



const $box: ViewStyle = {
  width: 35,
  backgroundColor: colors.white,
  borderRadius: 100,
  height: 35,
  alignItems: "center",
  justifyContent: "space-around",
}
const $boxImage: ImageStyle = {
  width: 20,
  height: 20,
}

const $locationText: TextStyle = {
  color: colors.greyColor,
  flex: 1
}

const $text: TextStyle = {
  marginLeft: spacing.medium
}
