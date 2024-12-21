/* eslint-disable react-native/no-inline-styles */
import { Image, ImageStyle, View, ViewStyle, TextStyle, ActivityIndicator } from "react-native"
import React, { useState } from "react"
import { Text, Button } from "."
import { colors, spacing } from "../theme"
import { useStores } from "../models"
import { Trucks } from "../utils/trucks"

const van = require("../../assets/images/comeCariImage/van.png")

export const BookShipmentStep3 = (props) => {
  const { userStore }: any = useStores()
  const { mode, status } = userStore
  const [data, setData] = useState({})
  const [truck, setTruck] = useState({})

  React.useEffect(() => {
    async function fetchData() {
      const { getState } = props
      const state: any = getState()
      const truck = Trucks.find((truck) => truck.value === state.truckType)
      async function fetchData() {
        console.log(truck)
        setData(state)
        setTruck(truck)
      }
      fetchData()
    }
    fetchData()
  }, [])
  const dimension = {
    length: 50,
    width: 120,
    height: 139,
  }
  const submitShipment = async () => {
    await userStore.submitShipment(
      data?.originName,
      data?.originLat,
      data?.originLng,
      data?.destinationName,
      data?.destinationLat,
      data?.destinationLng,
      data?.weight,
      dimension,
      data?.description,
      data?.proposedFee,
    )

    console.log("checking status", status)
  }
  return (
    // <BookTop title="Bid Details" />

    <View style={$details}>
      <Text tx="Bid.Truck" preset="default" style={$detailsText} />
      <Image source={truck?.image} style={$van} />

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
              text={data.originName}
              preset="formHelper"
              weight="semiBold"
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
              numberOfLines={1}
            />
          </View>
          <View style={$to}>
            <Text tx="User.to" preset="default" style={$fromText} />
            <Text
              text={data.destinationName}
              preset="formHelper"
              weight="semiBold"
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
              numberOfLines={1}
            />
          </View>
        </View>
      </View>

      <View style={$info}>
        <View>
          <Text tx="Book.weight" style={$infoTitle} />
          <View
            // style={$infoView}
            style={[
              $infoView,
              { backgroundColor: mode === "dark" ? colors.darkText : colors.text },
            ]}
          >
            <Text text={data.weight} style={$infoText} />
          </View>
        </View>

        <View>
          <Text tx="Bid.offer" style={$infoTitle} />
          <View
            style={[
              $infoView,
              { backgroundColor: mode === "dark" ? colors.darkText : colors.text },
            ]}
          >
            <Text text={data.proposedFee} style={$infoText} />
          </View>
        </View>
      </View>

      <View style={$Text}>
        <Text
          text={data.description}
          numberOfLines={4}
          preset="default"
          style={{ color: mode === "dark" ? colors.darkText : colors.text }}
          weight="bold"
        />
        <Button
          onPress={() => submitShipment()}
          preset="reversed"
          testID="login-button"
          style={$txtBtn}
        >
          {status === "loading" ? (
            <ActivityIndicator
              size="small"
              color="#fff"
              style={{
                alignContent: "center",
              }}
            />
          ) : (
            <Text
              style={{
                color: colors.white,
              }}
              testID="login-button"
              text="Confirm"
            />
          )}
        </Button>
      </View>
    </View>
  )
}

// const $BidPage: ViewStyle = {
//     backgroundColor: colors.white,
//     // height,÷
//   }

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
  marginBottom: spacing.large,
}
