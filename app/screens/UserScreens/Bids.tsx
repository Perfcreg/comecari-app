import React, { FC, useEffect } from "react"
import { Image, ImageStyle, View, ViewStyle, TextStyle, TouchableOpacity, ScrollView } from "react-native"
import { Text } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
import { useStores } from "../../models"
import data from "../../utils/Data/Bids.json"

// Images
const box = require("../../../assets/icons/comeCariICon/box.png")

export const Bids: FC<DemoTabScreenProps<"Bids">> = function Bids(_props) {
  const { navigation }: any = _props
  function bidder(id) {
    navigation.navigate("User", {
      screen: "Bidders",
      params: { id: id },
    })
  }

  const { userStore }: any = useStores()

  const mode = userStore.mode

  useEffect(()=> {
    userStore.getLoad()
  }, [])
  const filteredLoads = userStore.load.filter(load => {
    return load.status === 'PENDING' || load.status === 'Bid Accepted';
  });
  

  return (

      <View style={$history}>
        <View style={$trackingTop}>
          <Text
            preset="authHeading"
            style={{ color: mode === "dark" ? colors.darkText : colors.text }}
            text= "Shipment's for Bidder"
          />
        </View>
        <ScrollView 
          style={{
            marginBottom: spacing.large
          }}
        >
        {filteredLoads?.map((data, inx) => {
          return (
            <TouchableOpacity
              style={[
                $HisCon,
                { backgroundColor: mode === "dark" ? colors.lightBlue : colors.white },
              ]}
              onPress={()=>bidder(data._id)}
              key={inx}
            >
            <View style={{
              alignItems: "center",
              flexDirection: "row",
              padding: spacing.medium
            }}>
              <View style={$box}>
                <Image source={box} style={$boxImage} />
              </View>
              </View>

              <View style={$text}>
                <Text preset="formLabel" weight="bold" numberOfLines={1}>
                  {data.destination.name}
                </Text>
                <Text
                  style={[
                    $locationText,
                    { color: data.status === "PENDING" ? colors.red : colors.yellow },
                  ]}
                >
                  {data.status}
                </Text>
              </View>
            </TouchableOpacity>
          )
        })}
        </ScrollView>
      </View>
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
