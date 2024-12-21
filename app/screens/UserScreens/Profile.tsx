import React, { FC, useEffect } from "react"
import { Image, ImageStyle, View, ViewStyle, TextStyle } from "react-native"
import { Text, TextField, Button } from "../../components"
import { UserTabScreenProps } from "../../navigators/UserNavigator"
import { colors, spacing } from "../../theme"
import { useStores } from "../../models"
// const profile = require("../../assets/images/comeCariImage/profileImg.png")

export const Profile: FC<UserTabScreenProps<"Profile">> = function Profile(_props) {
  const { userStore }: any = useStores()
  const { navigation }: any = _props

  useEffect(() => {
    userStore.getUser()
  }, [])

  // const testt = profileDetails.user
  // const { navigation } = _props

  const mode = userStore.mode
  return (
 
      <View style={$profileC}>
        <View style={$profileContainer}>
          <View style={$profile}>
            <Image
              source={{ uri: userStore?.user?.photo?.completedUrl }}
              style={$profileImage}
              resizeMode="contain"
            />
            <View>
              <Text
                preset="formLabel"
                weight="bold"
                style={{ color: mode === "dark" ? colors.darkText : colors.text }}
              >
                {userStore.user.username}
              </Text>
              <Text tx="SideBar.view" preset="formLabel" weight="medium" style={$profileView} />
              <View style={$bth}>
                <Button
                  onPress={() => navigation.navigate("EditProfile")}
                  style={$proBtn}
                  preset="transparentBack"
                >
                  <Text style={$proBtnText} tx="profile.edit" preset="default" weight="semiBold" />
                </Button>
                {/* <Button
                  onPress={() => navigation.navigate("ChangePassword", { testt })}
                  style={$proBtn}
                  preset="transparentBack"
                >
                  <Text style={$proBtnText} preset="default" weight="semiBold" >Change Password</Text>
                </Button> */}
              </View>
            </View>
          </View>
        </View>

        <View style={$info}>
          <TextField
            value={userStore.user.firstName}
            containerStyle={$textField}
            label="FirstName"
            placeholderTx="loginScreen.emailFieldPlaceholder"
          />
          <TextField
            value={userStore.user.lastName}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            label="Last Name"
            placeholderTx="loginScreen.emailFieldPlaceholder"
          />
          <TextField
            value={userStore.user.email}
            containerStyle={$textField}
            autoCapitalize="none"
            keyboardType="default"
            label="Email"
            placeholderTx="loginScreen.emailFieldPlaceholder"
          />
        </View>
      </View>
  )
}

const $profileC: ViewStyle = {
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
}

const $profileContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: spacing.large,
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
  width: 85,
  height: 85,
}

const $profileView: TextStyle = {
  color: colors.greyColor,
}

const $proBtn: ViewStyle = {
  height: 11,
  width: 160,
  backgroundColor: colors.blueColor,
  borderRadius: 26,
}

const $textField: ViewStyle = {
  marginBottom: spacing.medium,
}

const $info: ViewStyle = {
  marginTop: spacing.huge,
}
const $proBtnText: TextStyle = {
  color: colors.white,
}
const $bth: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
}
