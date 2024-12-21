import React from "react"
import { TouchableOpacity, View, Image, ImageStyle, TextStyle, ViewStyle } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { Text } from "./Text"
import { useRoute } from "@react-navigation/native"
import { Button } from "./Button"
import { useStores } from "../models"
import { ScrollView } from "react-native-gesture-handler"

const logo = require("../assets/images/comecari/comecari-black.9d6d0d18.png")
const whiteLogo = require("../assets/images/comecari/comecari-white.png")

const sideBarList = [
  {
    name: "Home",
    icons: <FontAwesome name="home" size={20} />,
    link: "Home",
  },
  {
    name: "Book Shipment",
    icons: <FontAwesome name="truck" size={20} />,
    link: "Book",
  },
  {
    name: "Bids",
    icons: <FontAwesome name="building" size={20} />,
    link: "Bids",
  },
  {
    name: "Shipment History",
    icons: <FontAwesome name="rotate-left" size={20} />,
    link: "ShipmentHistory",
  },

  // {
  //   name: "Driver Review",
  //  icons: <FontAwesome name="user" size={20} />,
  //   link: "Chat",
  // },
  {
    name: "Support",
    icons: <FontAwesome name="support" size={20} />,
    link: "Support",
  },
  {
    name: "Setting",
    icons: <FontAwesome name="gear" size={20} />,
    link: "Settings",
  },
  {
    name: "Logout",
    icons: <FontAwesome name="sign-out" size={20} />,
    link: "Auth",
  },
]

const Drawer = ({ navigation }) => {
  const { userStore, authenticationStore } = useStores()
  const handleActive = (index, link) => {
    if (link !== "Auth") {
      navigation.navigate("User", { screen: link })
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
          navigation.navigate("User", {
            screen: "Profile",
          })
        }
        style={$profileContainer}
      >
        <View style={$profile}>
          <Image
            source={{ uri: userStore?.user?.photo?.completedUrl }}
            style={$profileImage}
            resizeMode="contain"
          />
          <View>
            <Text preset="formLabel" style={$profileView}>
              {userStore?.user?.firstName?.charAt(0).toUpperCase() +
                userStore?.user?.firstName?.slice(1)}{" "}
              {userStore?.user?.lastName?.charAt(0).toUpperCase() +
                userStore?.user?.lastName?.slice(1)}
            </Text>
            <Text tx="SideBar.view" preset="formLabel" weight="medium" style={$profileView} />
          </View>
        </View>
        <FontAwesome name="arrow-right" size={20} />
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
          tx="Switch.driver"
          preset="reversed"
          onPress={() =>
            navigation.navigate("Driver", {
              screen: "Homea",
            })
          }
          style={$switch}
        />
      </ScrollView>
    </View>
  )
}

export default Drawer

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
