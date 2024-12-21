import React, { FC, useCallback, useEffect, useState } from "react"
import { Image, ImageStyle, View, ViewStyle, TextStyle, Dimensions } from "react-native"
import { Text, Button } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { BookTop } from "../../components/BookTop"
import { useStores } from "../../models"
import { Trucks } from '../../utils/trucks'
import { id } from "date-fns/locale"
import { ScrollView } from "react-native-gesture-handler"

const van = require("../../../assets/images/comeCariImage/van.png")

const { height } = Dimensions.get("screen")

export const BidDetails: FC<DemoTabScreenProps<"BidDetails">> = function BidDetails(_props) {
  const { navigation }: any = _props

  const bidder = () => {
    navigation.navigate("User", {
      screen: "Home",
    })
  }

  const { userStore }: any = useStores()
  const mode = userStore.mode
  const [data, setData] = useState(null)
  const fetchData = useCallback(async () => {
    setData(userStore.data?._doc);
  }, [])

  const truckImage = Trucks.find((truck) => truck.name = data?.type)

  useEffect(()=>{
    fetchData()
  }, [fetchData])

  return (
    <SafeAreaView
      style={[
        $BidPage,
       { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
      ]}
    >
   
      <BookTop title="Bid Details" />
      <ScrollView style={{
        flex: 1
      }}>
      <View style={$details}>
        <Text tx="User.shipmentNum" preset="default" weight="medium" style={$detailsText} />
        <Text
          text={data?.shipmentNumber}
          preset="heading2"
        style={{ color: mode === "dark" ? colors.darkText : colors.text }}
        />
        <Text tx="Bid.Truck" preset="default" style={$detailsText} />
        <Image source={truckImage} style={$van} />

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
                text={data?.origin.name}
                preset="formHelper"
                weight="semiBold"
                style={{ color: mode === "dark" ? colors.darkText : colors.text }}
              />
            </View>
            <View style={$to}>
              <Text tx="User.to" preset="default" style={$fromText} />
              <Text
                text={data?.destination.name}
                preset="formHelper"
                weight="semiBold"
                style={{ color: mode === "dark" ? colors.darkText : colors.text }}
              />
            </View>
          </View>
        </View>

        <View style={$info}>
          <View>
            <Text text="Weight" style={$infoTitle} />
            <View
              // style={$infoView}
              style={[
                $infoView,
                { backgroundColor: mode === "dark" ? colors.darkText : colors.text },
              ]}
            >
              <Text text={data?.weight} style={$infoText} />
            </View>
          </View>
          <View>
            <Text tx="Bid.Document" style={$infoTitle} />
            <View
              style={[
                $infoView,
                {
                  backgroundColor: mode === "dark" ? colors.darkText : colors.text,
                  borderColor: colors.blueColor,
                },
              ]}
            >
              <Text
                tx="Bid.Download"
                style={[$infoText, { color: colors.blueColor, marginLeft: spacing.extraLarge }]}
              />
            </View>
          </View>
          <View>
            <Text text="Proposed fee" style={$infoTitle} />
            <View
              style={[
                $infoView,
                { backgroundColor: mode === "dark" ? colors.darkText : colors.text },
              ]}
            >
              <Text text={'\u20A6 ' +data?.proposedFee} style={$infoText} />
            </View>
          </View>
        </View>

        <View style={$Text}>
          <Text
            text={data?.description}
            preset="default"
            style={{ color: mode === "dark" ? colors.darkText : colors.text }}
            weight="bold"
          />
          <Button
            onPress={bidder}
            text="Go Home"
            preset="reversed"
            testID="login-button"
            style={$txtBtn}
          />
        </View>
      </View>
      </ScrollView>
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
