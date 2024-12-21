import { View, ViewStyle, Image, ImageStyle } from "react-native"
import React from "react"
import { DrawerIconButton } from "../screens/DemoShowroomScreen/DrawerIconButton"
import { Icon } from "./Icon"
import { colors, spacing } from "../theme"
import { useStores } from "../models"

// Getting profile Image
// const profileImage = require("../../assets/images/comeCariImage/profileImg.png")

const TopNav = ({ toggleDrawer, open, progress }: any) => {
  const { userStore }: any = useStores()

  const mode = userStore.mode

  return (
    <View style={[$TopNav, { backgroundColor: mode === "dark" ? colors.drakGrey : colors.white }]}>
      <DrawerIconButton onPress={toggleDrawer} {...{ open, progress }} />
      <View style={$proAndNoti}>
        <Icon icon="bells" color={mode === "dark" ? colors.white : colors.blackColor} size={20} />
        <Image source={{ uri: userStore?.user?.photo?.completedUrl }} style={$profileImg} />
      </View>
    </View>
  )
}

export default TopNav

const $TopNav: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderWidth: 1,
  borderColor: colors.navBorderGrey,
  width: "90%",
  height: 34,
  borderRadius: 31,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: spacing.medium,
  marginBottom: spacing.small,
}

const $profileImg: ImageStyle = {
  width: 33,
  height: 33,
  borderRadius: 100,
}
const $proAndNoti: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
}
