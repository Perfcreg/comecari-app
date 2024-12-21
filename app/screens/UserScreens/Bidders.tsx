import React, { FC, useCallback, useEffect, useState } from "react"
import {
  Image,
  ImageStyle,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Dimensions,
} from "react-native"
import { Text, Button } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
// import { SideBar } from "../../components/SideNav"
import { SafeAreaView } from "react-native-safe-area-context"
import { useStores } from "../../models"
import { FontAwesome } from "@expo/vector-icons"
import { Trucks } from "../../utils/trucks"
import { ScrollView } from "react-native-gesture-handler"

// Images
const drive = require("../../assets/images/comecari/dri.png")
const van = require("../../assets/images/comecari/van3.png")
const back = require("../../assets/icons/comeCariICon/arrowhite.png")
const googleLogo = require("../../assets/icons/comeCariICon/check.png")

const { height } = Dimensions.get("screen")

export const Bidders: FC<DemoTabScreenProps<"Bidders">> = function Bidders(_props) {
  
  const { userStore }: any = useStores()
  const {mode} = userStore
  const { navigation, route }: any = _props

  const {id} = route?.params
  const bidder = () => {
    navigation.navigate("User", {
      screen: "BidDetails",
    })
  }

  const [rdata, setData] = useState(null)
  const fetchData = useCallback(async () => {
    await userStore.getLoadById(id)
    setData(userStore.data?._doc);
  }, [])
  const truckImage = Trucks.find((truck) => truck.name = rdata?.type)

  useEffect(()=>{
    fetchData()
  }, [fetchData, route])




  return (
    
    <SafeAreaView
      style={[
        $BidPage,
        { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
      ]}
    >
    <ScrollView style={{
      flex: 1
    }}>
      
      <View style={$bidDetails}>
        <View style={$ModalTop}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={back} style={$cancel} />
          </TouchableOpacity>
          <View style={$ModalTopText}>
            <Text style={$ModalTopTexts} text={rdata?.shipmentNumber} preset="bold" />
          </View>
        </View>

      <View style={$Tracker}>
        <View style={$trackCon}>
          <View style={$trackConTop}>
            <Text
              tx="Track.shipmentNum"
              preset="default"
              weight="light"
              style={$trackConTopText}
            />
            <Text text={rdata?.shipmentNumber} preset="formLabel" weight="bold" />
          </View>
          <Image source={truckImage} style={$BusImage} />
        </View>
        <View style={$border}></View>
        <View style={$trackLocation}>
          <View style={$trackLine}>
            <View style={$startDot}></View>
            <View style={$moveLine}></View>
            <View style={$DesLine}></View>
            <View style={$endDot}></View>
          </View>
          <View style={$Location}>
            <View style={$from}>
              <Text tx="User.from" preset="default" style={$fromText} />
              <Text text={rdata?.origin?.name} preset="formHelper" weight="semiBold" />
            </View>
            <View style={$to}>
              <Text tx="User.to" preset="default" style={$fromText} numberOfLines={1} />
              <Text text={rdata?.destination?.name} preset="formHelper" weight="semiBold" numberOfLines={1} />
            </View>
          </View>
        </View>
      </View>

      <Button onPress={bidder} style={$signUpWithGoggle}>
        <Text text="View Load" style={$signUpWithGoggleText} weight="semiBold" />
       
      </Button>
    </View>
    <View style={$bidBottom}>
      <Text tx="Bid.bidder" weight="bold"  style={[$bidBottomText, { color: mode == 'dark' ? colors.darkText : colors.text , marginLeft: spacing.extraLarge }]} />

      <View style={$bidder}>
        <View style={$biddersDetails}>
          <View style={$biddersDetailsProfile}>
            <Image source={drive} style={$biddersDetailsImg} />
          </View>
          <View style={$biddersDetailsText}>
            <Text tx="Bid.name" weight="semiBold" />
            <View style={$biddersDetailsText2}>
              <Text style={$biddersDetailsBid}>Bid:</Text>
              <Text tx="Bid.price" style={$biddersDetailsPrice} />
            </View>
          </View>
        </View>

        <View style={$bidView}>
          <Button onPress={bidder} style={[$bidderBtn, { backgroundColor: colors.green }]}>
            <FontAwesome name="check-circle-o" size={20} style={$bidderBtnIcon} />

            <Text tx="Bid.acceptBtn" style={$bidderBtnText} weight="semiBold" />
          </Button>
          <Button onPress={bidder} style={[$bidderBtn, { backgroundColor: colors.blackColor }]}>
            <FontAwesome name="ban" size={20} style={$bidderBtnIcon} />
            <Text tx="Bid.RejectBtn" style={$bidderBtnText} weight="semiBold" />
          </Button>
        </View>
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

const $border: ViewStyle = {
  borderWidth: 0.5,
  borderColor: colors.midGrey,
  marginVertical: spacing.extraSmall,
}

const $bidDetails: ViewStyle = {
  backgroundColor: colors.blueColor,
  borderBottomRightRadius: 22,
  borderBottomLeftRadius: 22,
  height: 379,
}
const $ModalTop: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 10,
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: spacing.large,
  marginBottom: spacing.small,
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
  color: colors.white,
  marginTop: spacing.medium,
}

const $cancel: ImageStyle = {
  width: 15,
  height: 15,
  alignSelf: "flex-end",
}

const $Tracker: ViewStyle = {
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
  backgroundColor: colors.white,
  padding: 10,
  paddingVertical: 15,
  borderRadius: 27,
}
const $trackCon: ViewStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexDirection: "row",
}

const $trackConTopText: TextStyle = {
  marginBottom: spacing.extraSmall,
  color: colors.greyColor,
}

const $trackConTop: ViewStyle = {}
const $BusImage: ImageStyle = {
  width: 114,
  height: 44,
}

const $trackLocation: ViewStyle = {
  height: 100,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: 40,
}
const $trackLine: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
const $startDot: ViewStyle = {
  backgroundColor: colors.blueColor,
  width: 7,
  height: 7,
  borderRadius: 100,
}
const $moveLine: ViewStyle = {
  position: "absolute",
  height: "55%",
  width: 1,
  backgroundColor: colors.blueColor,
  top: 0,
  zIndex: 111,
}
const $DesLine: ViewStyle = {
  height: "70%",
  width: 1,
  backgroundColor: "#E9E5E5",
  position: "relative",
}
const $endDot: ViewStyle = {
  width: 7,
  height: 7,
  borderWidth: 1,
  borderColor: "#FF0000",
  borderRadius: 100,
}
const $Location: ViewStyle = {
  display: "flex",
  justifyContent: "space-between",
}
const $fromText: TextStyle = {
  color: colors.greyColor,
}
const $from: ViewStyle = {
  marginBottom: spacing.medium,
}
const $to: ViewStyle = {}

const $signUpWithGoggle: ViewStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  gap: 30,
  height: 45,
  borderWidth: 1,
  borderColor: colors.placeholderGry,
  borderRadius: 5,
  marginTop: spacing.large,
}
const $signUpWithGoggleText: TextStyle = {
  color: colors.blackColor,
  paddingRight: spacing.medium,
}

const $googleImage: ImageStyle = {
  width: 14,
  height: 14,
  marginLeft: spacing.medium,
}

const $bidBottom: ViewStyle = {
  marginTop: spacing.large,
}

const $bidBottomText: TextStyle = {
  textAlign: "center",
  marginBottom: spacing.medium,
  
}
const $bidder: ViewStyle = {
  backgroundColor: colors.lightGrey,
  borderRadius: 27,
  height: 144,
  padding: 20,
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
}
const $biddersDetails: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
}
const $biddersDetailsProfile: ViewStyle = {
  backgroundColor: colors.white,
  borderRadius: 12,
  width: 52,
  height: 52,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const $biddersDetailsImg: ImageStyle = {
  width: 45,
  height: 45,
}

const $biddersDetailsText: ViewStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  marginLeft: spacing.medium,
}

const $biddersDetailsText2: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
}

const $biddersDetailsBid: TextStyle = {
  color: colors.greyColor,
}

const $biddersDetailsPrice: TextStyle = {
  fontWeight: "bold",
  color: "#1BCE33",
  marginLeft: spacing.small,
}

const $bidView: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  marginTop: spacing.medium,
}

const $bidderBtn: ViewStyle = {
  width: 129,
  height: 35,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: 10,
  borderWidth: 0,
  borderRadius: 22,
}

const $bidderBtnText: TextStyle = {
  color: colors.white,
}

const $bidderBtnIcon: TextStyle = {
  color: colors.white,
  marginRight: spacing.extraLarge,
}
