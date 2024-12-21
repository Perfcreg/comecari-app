import {
  View,
  ViewStyle,
  Dimensions,
  Image,
  ImageStyle,
  TouchableOpacity,
  TextStyle,
  ScrollView,
} from "react-native"
import { useStores } from "../../models"
import React from "react"
import { colors, spacing } from "../../theme"
import { Text } from "../Text"
import { Icon } from "../Icon"

const { height, width } = Dimensions.get("screen")

const cancel = require("../../../assets/icons/comeCariICon/x.png")
const Bus = require("../../../assets/images/comeCariImage/van.png")

export default function ShipInfo({ 
  shipmentNumber, 
  history, 
  truckType, 
  origin, 
  destination,
  description, 
  weight,
  price,
  image
 }: any) {
  const { userStore }: any = useStores()

  const mode = userStore.mode

  return (
   
    <View style={$Modal}>
      <View
        style={[
          $ModalCon,
          { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
        ]}
      >
        <View style={$ModalTop}>
          <View style={$ModalTopText}>
            <Text
              style={[$ModalTopTexts, { color: mode === "dark" ? colors.darkText : colors.text }]}
            >
              Shipment Number:
            </Text>
            <Text
              text={shipmentNumber}
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
              preset="bold"
            />
          </View>
          <Icon icon="x" color={mode === "dark" ? colors.darkText : colors.text} onPress={history} />
        </View>

        <View style={$ModalMid}>
          <Text
            style={{ color: mode === "dark" ? colors.darkText : colors.text }}
            text={truckType}
            preset="default"
          />
          <Image source={image} style={$bus} resizeMode="contain" />
        </View>
        <View style={$trackLocation}>
          <View style={$trackLine}>
            <View
              style={[
                $startDot,
                { backgroundColor: mode === "dark" ? colors.white : colors.background },
              ]}
            ></View>
            <View
              style={[
                $DesLine,
                { backgroundColor: mode === "dark" ? colors.white : colors.background },
              ]}
            ></View>
            <View
              style={[
                $endDot,
                { backgroundColor: mode === "dark" ? colors.white : colors.background },
              ]}
            ></View>
          </View>
          <View style={$Location}>
            <View style={$from}>
              <Text
                tx="User.from"
                preset="default"
                style={[$fromText, { color: mode === "dark" ? colors.darkText : colors.text }]}
              />
              <Text
                text={origin}
                style={{ color: mode === "dark" ? colors.darkText : colors.text }}
                preset="formHelper"
                weight="semiBold"
              />
            </View>

            <View style={$to}>
              <Text
                tx="User.to"
                preset="default"
                style={[$fromText, { color: mode === "dark" ? colors.darkText : colors.text }]}
              />
              <Text
                text={destination}
                preset="formHelper"
                style={{ color: mode === "dark" ? colors.darkText : colors.text }}
                weight="semiBold"
              />
            </View>
          </View>
        </View>

        <View style={$weight}>
          <Text
            style={[$ModalTopTexts, { color: mode === "dark" ? colors.darkText : colors.text }]}
          >
            Weight:
          </Text>
          <Text
            style={{ color: mode === "dark" ? colors.darkText : colors.text }}
            text={` ${weight} tons`}
            preset="bold"
          />
        </View>
        <View style={$weight}>
          <Text
            style={[$ModalTopTexts, { color: mode === "dark" ? colors.darkText : colors.text }]}
          >
            Price:
          </Text>
          <Text
            style={{ color: mode === "dark" ? colors.darkText : colors.text }}
            text={` ${price} tons`}
            preset="bold"
          />
        </View>
        <Text
          style={{ color: mode === "dark" ? colors.darkText : colors.text }}
          numberOfLines={4}
          text={description}
          preset="default"
          weight="semiBold"
        />
      </View>
    </View>
  )
}

const $Modal: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  justifyContent:"flex-end",
  backgroundColor: "rgba(0,0,0,0.7)",


}

const $ModalCon: ViewStyle = {
  borderTopRightRadius: 22,
  borderTopLeftRadius: 22,
  paddingTop: spacing.large,
  paddingHorizontal: spacing.large,
}

const $cancel: ImageStyle = {
  width: 15,
  height: 15,
}

const $title: TextStyle = {
  fontSize: 30,
  textAlign: 'center',

  alignSelf: "flex-end",
}

const $bus: ImageStyle = {
  width: 128,
  height: 101,
  alignSelf: "center",
  marginBottom: spacing.large,
}
const $ModalTop: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 10,
}

const $ModalTopText: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "90%",
  gap: 5,
  marginBottom: spacing.medium,
}
const $ModalTopTexts: TextStyle = {
  fontWeight: "bold",
}

const $ModalMid: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}

const $trackLocation: ViewStyle = {
  height: 100,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: 40,
  marginBottom: spacing.large,
}
const $trackLine: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
const $startDot: ViewStyle = {
  // backgroundColor: colors.,
  width: 7,
  height: 7,
  borderRadius: 100,
}

const $DesLine: ViewStyle = {
  height: "70%",
  width: 1,
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

const $to: ViewStyle = {
   display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  marginBottom: spacing.medium
}

const $weight: TextStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  marginTop: spacing.large,
  marginBottom: spacing.medium

}
