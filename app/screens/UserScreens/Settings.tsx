import React, { FC, useState, useEffect } from "react"
import { View, ViewStyle, Dimensions, Switch, TouchableOpacity } from "react-native"
import { Text } from "../../components"
import { UserTabScreenProps } from "../../navigators/UserNavigator"
import { colors, spacing } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { BookTop } from "../../components/BookTop"
import { FontAwesome } from "@expo/vector-icons"
import { useStores } from "../../models"

const { height, width } = Dimensions.get("screen")

export const Settings: FC<UserTabScreenProps<"Settings">> = function Settings(_props) {
  const { userStore }: any = useStores()
  const { mode } = userStore
  const [isEnabled, setIsEnabled] = useState(false)


  useEffect(() => {
    userStore.setMode(isEnabled ? "white" : "dark");
  }, [isEnabled]);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  
  console.log("mode", isEnabled)
  console.log("setting", mode)

  const { navigation }: any = _props
  return (
    <SafeAreaView
      style={[
        $BidPage,
        { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
      ]}
    >
      <BookTop title="Settings" />
      <View style={$setting}>
        <View style={$settingCon}>
          <View style={$settingConFir}>
            <FontAwesome
              name="mobile-phone"
              size={20}
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
            />
            <Text
              tx="setting.push"
              preset="default"
              weight="semiBold"
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
            />
          </View>
          {/* <Switch
            trackColor={{ false: "#918C8C", true: "#0712B1" }}
            thumbColor={isEnabled ? "#f5f5f5" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          /> */}
        </View>
        <View style={$line}></View>
        <View style={$settingCon}>
          <View style={$settingConFir}>
            <FontAwesome
              name="mobile-phone"
              size={20}
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
            />
            <Text
              tx="setting.dark"
              preset="default"
              weight="semiBold"
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
            />
          </View>
          <Switch
            trackColor={{ false: "#918C8C", true: "#0712B1" }}
            thumbColor={isEnabled ? "#f5f5f5" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={$line}></View>

        <View style={$settingCon}>
          <View style={$settingConFir}>
            <FontAwesome
              name="credit-card"
              size={15}
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
            />
            <Text
              tx="setting.push"
              preset="default"
              weight="semiBold"
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
            />
          </View>
          <View style={$Hh}>
            <FontAwesome
              name="arrow-right"
              size={15}
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
            />
          </View>
        </View>
        <View style={$line}></View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ChangePassword")
          }}
          style={$settingCon}
        >
          <View style={$settingConFir}>
            <FontAwesome
              name="lock"
              size={15}
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
            />
            <Text
              preset="default"
              style={{ color: mode === "dark" ? colors.darkText : colors.text }}
              weight="semiBold"
            >
              Change Password
            </Text>
          </View>
          <View style={$Hh}></View>
        </TouchableOpacity>
        <View style={$line}></View>
      </View>
    </SafeAreaView>
  )
}

const $BidPage: ViewStyle = {
  backgroundColor: colors.white,
  height,
}

const $line: ViewStyle = {
  width,
  height: 2,
  backgroundColor: "rgba(206, 201, 201, 0.46)",
}
const $Hh: ViewStyle = {
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
const $setting: ViewStyle = {
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: spacing.medium,
}

const $settingCon: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
}

const $settingConFir: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  gap: 20,
}
