import React from "react"
import { TouchableOpacity, View, Image, ImageStyle, TextStyle, ViewStyle } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { Text } from "./Text"
import { Button } from "./Button"
import { useRoute } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"
import { useStores } from "../models"

const logo = require("../assets/images/comecari/comecari-black.9d6d0d18.png")
const profile = require("../assets/images/comecari/profileImg.png")
const whiteLogo = require("../assets/images/comecari/comecari-white.png")

const sideBarList = [
  {
    name: "Home",
    icons: <FontAwesome name="home" size={20} />,
    link: "Home",
  },
  {
    name: "Bids",
    icons: <FontAwesome name="building" size={20} />,
    link: "DriverBids",
  },

  {
    name: "Job History",
    icons: <FontAwesome name="rotate-left" size={20} />,
    link: "JobHistory",
  },
  {
    name: "Truck",
    icons: <FontAwesome name="truck" size={20} />,
    link: "Truck",
  },
  {
    name: "Earning ",
    icons: <FontAwesome name="money" size={20} />,
    link: "Earning",
  },
  {
    name: "Marketplace",
    icons: <FontAwesome name="tencent-weibo" size={20} />,
    link: "MarketPlace",
  },
  {
    name: "Support",
    icons: <FontAwesome name="support" size={20} />,
    link: "DriverSuport",
  },
  {
    name: "Setting",
    icons: <FontAwesome name="gear" size={20} />,
    link: "Settings",
  },
  {
    name: "Driver Registration",
    icons: <FontAwesome name="user" size={20} />,
    link: "DriverRegistration1",
  },
  {
    name: "LogOut",
    icons: <FontAwesome name="sign-out" size={20} />,
    link: "Auth",
  },
]

const DriverDrawer = ({ navigation }) => {
  const { userStore, authenticationStore } = useStores()
  const handleActive = (index, link) => {
    if (link !== "Auth") {
      navigation.navigate("Driver", { screen: link })
    } else {
      authenticationStore.logout()
    }
  }
  const $drawerInsets = useSafeAreaInsetsStyle(["top"])

  const route = useRoute()

  const mode = userStore.mode

  const $profileView: TextStyle = {
    color: mode === "dark" ? colors.darkText : colors.text,
    // fontSize: ""
  }

  return (
    <>
      <View
        style={[
          $drawer,
          $drawerInsets,
          { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
        ]}
      >
        <View style={$logoContainer}>
          {mode === "dark" ? (
            <Image source={whiteLogo} style={$logoImage} resizeMode="contain" />
          ) : (
            <Image source={logo} style={$logoImage} resizeMode="contain" />
          )}
        </View>

        <View style={$border}></View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Driver", {
              screen: "DriverProfile",
            })
          }
          style={$profileContainer}
        >
          <View style={$profile}>
            <Image source={profile} style={$profileImage} resizeMode="contain" />
            <View>
              <Text preset="formLabel" style={$profileView}>
                {userStore?.user?.firstNam?.charAt(0).toUpperCase() +
                  userStore?.user?.firstName?.slice(1)}{" "}
                {userStore?.user?.lastName?.charAt(0).toUpperCase() +
                  userStore?.user?.lastName?.slice(1)}
              </Text>
              <Text tx="SideBar.view" preset="formLabel" weight="medium" style={$profileView} />
            </View>
          </View>
          <FontAwesome
            name="arrow-right"
            size={20}
            style={{ color: mode === "dark" ? colors.darkText : colors.text }}
          />
        </TouchableOpacity>
        <View style={$border}></View>

        <ScrollView style={$flatListContentContainer}>
          {sideBarList.map((list, inx) => {
            const isActive = list.link === route.name
            return (
              <TouchableOpacity onPress={() => handleActive(inx, list.link)} key={inx}>
                <View style={isActive ? $activeLink : $linkList}>
                  <Text
                    style={[
                      isActive ? $activemenuContainer : $menuContainer,
                      { color: mode === "dark" ? colors.darkText : colors.text },
                    ]}
                  >
                    {list.icons}
                  </Text>
                  <Text
                    preset="bold"
                    style={[
                      isActive ? $activemenuContainer : $menuContainer,
                      { color: mode === "dark" ? colors.darkText : colors.text },
                    ]}
                  >
                    {list.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          })}
          <Button
            tx="Switch.user"
            preset="reversed"
            onPress={() =>
              navigation.navigate("User", {
                screen: "Home",
              })
            }
            style={$switch}
          />
        </ScrollView>
      </View>
    </>
  )
}

export default DriverDrawer

const $drawer: ViewStyle = {
  backgroundColor: colors.white,
  flex: 1,
  marginTop: spacing.extraLarge,
}

const $flatListContentContainer: ViewStyle = {
  paddingHorizontal: spacing.large,
}
const $linkList: ViewStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "flex-start",
  gap: 20,
  paddingLeft: spacing.medium,

  marginTop: spacing.large,
  height: 36,
}

const $activeLink: ViewStyle = {
  backgroundColor: "rgba(224, 225, 251, 0.639216)",
  height: 36,
  borderRadius: 5,
  paddingLeft: spacing.medium,
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "flex-start",
  gap: 20,
  marginTop: spacing.large,
}
const $logoImage: ImageStyle = {
  height: 41,
  width: 68,
}

const $logoContainer: ViewStyle = {
  alignSelf: "flex-start",
  justifyContent: "center",
  height: 41,
  width: 68,
  paddingHorizontal: spacing.large,
}

const $menuContainer: TextStyle = {
  // paddingBottom: spacing.extraSmall,
  // paddingTop: spacing.large,
  color: colors.white,
}

const $activemenuContainer: TextStyle = {
  color: colors.blackColor,
}

const $border: ViewStyle = {
  borderWidth: 0.5,
  borderColor: colors.midGrey,
  marginVertical: spacing.small,
}
const $profileContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: spacing.large,
}

const $profile: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 10,
}
const $profileImage: ImageStyle = {
  borderRadius: 100,
  width: 67,
  height: 67,
}

const $switch: ViewStyle = {
  height: 45,
  marginTop: spacing.large,
  marginBottom: spacing.extraLarge,
}
