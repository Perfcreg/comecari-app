import React, { FC, useState } from "react"
import {
  Image,
  ImageStyle,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Dimensions,
} from "react-native"
import { Text } from "../../components"
import { colors, spacing } from "../../theme"
// import { SideBar } from "../../components/SideNav"
import { SafeAreaView } from "react-native-safe-area-context"
import { BookTop } from "../../components/BookTop"
import { AppStackScreenProps } from "../../navigators"
import { FontAwesome } from "@expo/vector-icons"
import { useStores } from "../../models"

// Images
// const drive = require("../../assets/images/comecari/dri.png")
const van = require("../../assets/images/comecari/van3.png")
const back = require("../../assets/icons/comeCariICon/triangle.png")
// const googleLogo = require("../../../assets/icons/comeCariICon/check.png")

const { height } = Dimensions.get("screen")
interface DriverScreenProps extends AppStackScreenProps<"Driver"> {}

export const TruckInfo: FC<DriverScreenProps> = function TruckInfo(_props) {
  //   const { navigation } = _props

  //   const bidder = () => {
  //     navigation.navigate("User", {
  //       screen: "Notification",
  //     })
  //   }

  const [toggleOption, setToggleOption] = useState(0)

  const handleToggle = (index) => {
    setToggleOption(index)
  }

  const [fromText, setFromText] = useState("Nov 15, 2022")
  const [showFrom, setShowFrom] = useState(false)

  const dates = [
    "May 18, 2022",
    "Aug 25, 2022",
    "Sept 12, 2022",
    "Jan 25, 2022",
    "May 14, 2022",
    "Dec 25, 2022",
    "Jun 21, 2022",
  ]
  const { userStore }: any = useStores()
  const mode = userStore.mode
  return (
    <SafeAreaView
      style={[
        $BidPage,
        { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
      ]}
    >
      <BookTop title="Truck Info" />

      <View style={$details}>
        <Image source={van} style={$van} />

        <View style={$option}>
          <TouchableOpacity
            onPress={() => handleToggle(0)}
            style={toggleOption === 0 ? $optionActive : $optionTab}
          >
            <Text tx="Truck.history" style={toggleOption === 0 ? $optionActiveText : $optionText} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleToggle(1)}
            style={toggleOption === 1 ? $optionActive : $optionTab}
          >
            <Text tx="Truck.details" style={toggleOption === 1 ? $optionActiveText : $optionText} />
          </TouchableOpacity>
        </View>
        {toggleOption === 0 ? (
          <View style={$info}>
            <View
              style={[
                $drop,
                { backgroundColor: mode === "dark" ? colors.blueColor : colors.background },
              ]}
            >
              <TouchableOpacity style={$dropTouch} onPress={() => setShowFrom(!showFrom)}>
                <Text style={{ color: mode === "dark" ? colors.darkText : colors.text }}>
                  {fromText}
                </Text>
                <Image source={back} />
              </TouchableOpacity>
              {showFrom ? (
                <View style={$datess}>
                  {dates.map((user, id) => {
                    return (
                      <TouchableOpacity
                        key={id}
                        onPress={() => {
                          setShowFrom(false)
                          setFromText(user)
                        }}
                      >
                        <Text
                          style={[
                            $tedt,
                            { color: mode === "dark" ? colors.darkText : colors.text },
                          ]}
                        >
                          {user}
                        </Text>
                      </TouchableOpacity>
                    )
                  })}
                </View>
              ) : null}
            </View>

            <View style={$map}>
              <View style={$link}>
                <View style={$dot}></View>
                <View style={$line}></View>
                <View style={$dot}></View>
                <View style={$line}></View>
                <View style={$dot}></View>
                <View style={$lines}></View>
              </View>
              <View>
                <View style={$location}>
                  <Text
                    // style={$area}
                    tx="Truck.location"
                    style={[$area, { color: mode === "dark" ? colors.darkText : colors.text }]}
                    preset="authHeading"
                    weight="bold"
                  />
                  <View style={$dat}>
                    <Text
                      tx="Truck.day"
                      style={{ color: mode === "dark" ? colors.darkText : colors.text }}
                      preset="formLabel"
                      weight="light"
                    />
                    <FontAwesome
                      style={{ color: mode === "dark" ? colors.darkText : colors.text }}
                      name="dot-circle-o"
                      size={10}
                    />
                    <Text
                      tx="Truck.time"
                      style={{ color: mode === "dark" ? colors.darkText : colors.text }}
                      preset="formLabel"
                      weight="light"
                    />
                  </View>
                </View>
                <View style={$location}>
                  <Text
                    style={[$area, { color: mode === "dark" ? colors.darkText : colors.text }]}
                    tx="Truck.location"
                    preset="authHeading"
                    weight="bold"
                  />
                  <View style={$dat}>
                    <Text
                      tx="Truck.day"
                      style={{ color: mode === "dark" ? colors.darkText : colors.text }}
                      preset="formLabel"
                      weight="light"
                    />
                    <FontAwesome
                      style={{ color: mode === "dark" ? colors.darkText : colors.text }}
                      name="dot-circle-o"
                      size={10}
                    />
                    <Text
                      tx="Truck.time"
                      style={{ color: mode === "dark" ? colors.darkText : colors.text }}
                      preset="formLabel"
                      weight="light"
                    />
                  </View>
                </View>
                <View style={$location}>
                  <Text
                    style={[$area, { color: mode === "dark" ? colors.darkText : colors.text }]}
                    tx="Truck.location"
                    preset="authHeading"
                    weight="bold"
                  />
                  <View style={$dat}>
                    <Text
                      tx="Truck.day"
                      style={{ color: mode === "dark" ? colors.darkText : colors.text }}
                      preset="formLabel"
                      weight="light"
                    />
                    <FontAwesome
                      style={{ color: mode === "dark" ? colors.darkText : colors.text }}
                      name="dot-circle-o"
                      size={10}
                    />
                    <Text
                      tx="Truck.time"
                      style={{ color: mode === "dark" ? colors.darkText : colors.text }}
                      preset="formLabel"
                      weight="light"
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={$info}>
            <View>
              <Text tx="Book.weight" style={$infoTitle} />
              <View style={$infoView}>
                <Text tx="Book.weightVal" style={$infoText} />
              </View>
            </View>
            <View>
              <Text tx="Book.weight" style={$infoTitle} />
              <View style={$infoView}>
                <Text tx="Book.weightVal" style={$infoText} />
              </View>
            </View>

            <View>
              <Text tx="Bid.offer" style={$infoTitle} />
              <View style={$infoView}>
                <Text tx="history.price" style={$infoText} />
              </View>
            </View>
            <View>
              <Text tx="Book.weight" style={$infoTitle} />
              <View style={$infoView}>
                <Text tx="Book.weightVal" style={$infoText} />
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

const $BidPage: ViewStyle = {
  backgroundColor: colors.white,
  height,
}

const $option: ViewStyle = {
  width: "100%",
  height: 48,
  backgroundColor: "#F9F8F8",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "row",
  marginBottom: spacing.medium,
}

const $optionTab: ViewStyle = {
  width: 146,
  height: 40,
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
const $optionActive: ViewStyle = {
  width: 146,
  height: 40,
  backgroundColor: "#000",
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const $optionText: TextStyle = {
  fontSize: 12,
  fontWeight: "500",
  color: "#707070",
}
const $optionActiveText: TextStyle = {
  fontSize: 12,
  fontWeight: "500",
  color: colors.white,
}

const $details: ViewStyle = {
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
  marginTop: spacing.medium,
}

const $van: ImageStyle = {
  height: 175,
  width: 218,
  marginRight: "auto",
  marginLeft: "auto",
}

const $info: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  flexDirection: "row",
  gap: 10,
  marginTop: spacing.medium,
}

const $drop: ViewStyle = {
  width: "100%",
  height: 38,
  borderRadius: 8,
  backgroundColor: "#E0E1FB",
  opacity: 0.20999999344348907,
  paddingHorizontal: 15,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: spacing.large,
  position: "relative",
}

const $dropTouch: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  width: "100%",
}

const $datess: ViewStyle = {
  width: 317,
  left: "1%",
  position: "absolute",
  zIndex: 1111111111111,
  top: "120%",
  borderRadius: 8,
  backgroundColor: "red",
  paddingHorizontal: 15,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  marginBottom: spacing.medium,
}
const $tedt: TextStyle = {
  color: "#707070",
  marginBottom: 10,
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
  marginBottom: spacing.small,
}

const $infoText: TextStyle = {
  width: "80%",
  marginLeft: "auto",
  marginRight: "auto",
  color: colors.greyColor,
}

const $map: ViewStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "row",
  gap: 10,
  position: "relative",
  zIndex: 1,
}

const $link: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
const $dot: ViewStyle = {
  borderRadius: 15,
  borderWidth: 3,
  borderColor: colors.blueColor,
  backgroundColor: colors.white,
  width: 15,
  height: 15,
}
const $line: ViewStyle = {
  width: 1,
  height: 80,
  backgroundColor: colors.blueColor,
}
const $lines: ViewStyle = {
  borderWidth: 0.3,
  borderStyle: "dashed",
  height: 80,
  borderColor: colors.blueColor,
}

const $location: ViewStyle = {}
const $area: ViewStyle = {}
const $dat: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  gap: 10,
  marginBottom: 46,
}
