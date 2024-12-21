import React, { FC } from "react"
import { View, ViewStyle, TextStyle, TouchableOpacity, Dimensions } from "react-native"
import { Text } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
import { useStores } from "../../models"
import { SafeAreaView } from "react-native-safe-area-context"
import { BookTop } from "../../components/BookTop"

const { height } = Dimensions.get("screen")

export const Notification: FC<DemoTabScreenProps<"Notification">> = function Notification(_props) {
  const { navigation }: any = _props

  const bidder = () => {
    navigation.navigate("User", {
      screen: "NExpand",
    })
  }

  const { userStore }: any = useStores()

  const mode = userStore.mode
  return (
    <SafeAreaView
      style={[
        $BidPage,
        { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
      ]}
    >
      <BookTop title="Notifications" />

      <View style={$notification}>
        <Text tx="Notification.today" preset="default" style={$date} />
        <TouchableOpacity style={$requ} onPress={bidder}>
          <View style={$dot}></View>
          <View style={$requ}>
            <Text style={[$requText, { color: mode === "dark" ? colors.darkText : colors.text }]}>
              Re:
            </Text>
            <Text
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
              tx="Notification.re"
              preset="default"
              weight="bold"
            />
          </View>
        </TouchableOpacity>
        <View style={$border}></View>
        <TouchableOpacity style={$requ} onPress={bidder}>
          <View style={$dot}></View>
          <View style={$requ}>
            <Text style={[$requText, { color: mode === "dark" ? colors.darkText : colors.text }]}>
              Re:
            </Text>
            <Text
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
              tx="Notification.re2"
              preset="default"
              weight="bold"
            />
          </View>
        </TouchableOpacity>
        <View style={$border}></View>

        <Text
          tx="Notification.support"
          weight="bold"
          style={[$supp, { color: mode === "dark" ? colors.darkText : colors.text }]}
        />
        <Text tx="Notification.supportText" style={$suppText} />
        <View style={$border}></View>

        <Text tx="Notification.last" preset="default" style={$date} />
        <Text
          tx="Notification.support2"
          weight="bold"
          style={[$supp, { color: mode === "dark" ? colors.darkText : colors.text }]}
        />
        <Text tx="Notification.supportText" style={$suppText} />
        <View style={$border}></View>
        <TouchableOpacity style={$requ} onPress={bidder}>
          <View style={$dot}></View>
          <View style={$requ}>
            <Text style={[$requText, { color: mode === "dark" ? colors.darkText : colors.text }]}>
              Re:
            </Text>
            <Text
              tx="Notification.re2"
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
              preset="default"
              weight="bold"
            />
          </View>
        </TouchableOpacity>
        <View style={$border}></View>
      </View>
    </SafeAreaView>
  )
}

const $BidPage: ViewStyle = {
  backgroundColor: colors.white,
  height,
}

const $notification: ViewStyle = {
  marginTop: spacing.large,
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
}

const $date: TextStyle = {
  color: colors.greyColor,
  marginBottom: spacing.medium,
}

const $dot: ViewStyle = {
  width: 6,
  height: 6,
  backgroundColor: "#979AF8",
  borderRadius: 100,
}
const $requ: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 5,
  width: "100%",
}

const $requText: TextStyle = {
  fontWeight: "bold",
  fontSize: 15,
}

const $border: ViewStyle = {
  borderWidth: 0.3,
  borderColor: "#707070",
  marginVertical: spacing.medium,
}

const $supp: TextStyle = {
  marginBottom: spacing.medium,
}
const $suppText: TextStyle = {
  width: "85%",
  color: colors.greyColor,
}
