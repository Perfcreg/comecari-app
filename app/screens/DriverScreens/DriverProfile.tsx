import React, { FC, useState } from "react"
import { View, ViewStyle, ImageStyle, TextStyle, Image, TouchableOpacity } from "react-native"
import { colors, spacing } from "../../theme"
import { Text, Button, TextField } from "../../components"
import { AppStackScreenProps } from "../../navigators"
import Star from "react-native-star-view"

// import { FontAwesome } from "@expo/vector-icons"
import { DriverSideNav } from "../../components/DriverSideNav"

interface DriverScreenProps extends AppStackScreenProps<"Driver"> {}

const profile = require("../../assets/images/comecari/profileImg.png")

export const DriverProfile: FC<DriverScreenProps> = function DriverProfile(_props) {
  const { navigation } = _props

  //   function history() {
  //     setOpenModal(!openModal)
  //   }

  const [toggleOption, setToggleOption] = useState(0)

  const handleToggle = (index) => {
    setToggleOption(index)
  }

  return (
    <DriverSideNav navigation={navigation}>
      <View style={$profileC}>
        <View style={$profileContainer}>
          <View style={$profile}>
            <Image source={profile} style={$profileImage} resizeMode="contain" />
            <View>
              <Text tx="SideBar.name" preset="formLabel" weight="bold" />
              <Text tx="SideBar.view" preset="formLabel" weight="medium" style={$profileView} />
              <Button
                onPress={() => navigation.navigate("User", { screen: "EditProfile" })}
                style={$proBtn}
              >
                <Text style={$proBtnText} tx="profile.edit" preset="default" weight="semiBold" />
              </Button>
            </View>
          </View>
        </View>

        <View style={$option}>
          <TouchableOpacity
            onPress={() => handleToggle(0)}
            style={toggleOption === 0 ? $optionActive : $optionTab}
          >
            <Text tx="Truck.general" style={toggleOption === 0 ? $optionActiveText : $optionText} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleToggle(1)}
            style={toggleOption === 1 ? $optionActive : $optionTab}
          >
            <Text tx="Truck.Stat" style={toggleOption === 1 ? $optionActiveText : $optionText} />
          </TouchableOpacity>
        </View>

        {toggleOption === 0 ? (
          <View style={$withdrawText}>
            <TextField
              containerStyle={$textField}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect={false}
              keyboardType="default"
              labelTx="loginScreen.emailFieldLabel"
              placeholderTx="Truck.email"
            />

            <TextField
              containerStyle={$textField}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect={false}
              labelTx="support.Phone"
              placeholderTx="support.phoneNum"
            />
            <TextField
              containerStyle={$textField}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect={false}
              labelTx="Truck.name"
              placeholderTx="Truck.nameVal"
            />
          </View>
        ) : (
          <View>
            <View style={$info}>
              <View style={$Rating}>
                <View style={$infoView}>
                  <Text tx="Truck.rating" preset="heading" weight="bold" style={$infoTitle} />
                  <Star score={4.8} style={$star} />
                </View>
                <Text tx="Truck.ride" weight="medium" style={$infoText} />
              </View>
            </View>
            <View style={$comment}>
              <Text tx="Truck.comment" style={$conText} />
              <Text tx="Truck.commenterName" style={$conText2} />
              <Text tx="Truck.recommendation" style={$conText3} />
            </View>
          </View>
        )}
      </View>
    </DriverSideNav>
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

const $textField: ViewStyle = {
  marginBottom: spacing.small,
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

const $withdrawText: ViewStyle = {
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
}

const $profileView: TextStyle = {
  color: colors.greyColor,
}

const $proBtn: ViewStyle = {
  height: 31,
  width: 97,
  backgroundColor: colors.blueColor,
  borderRadius: 16,
  borderColor: colors.blueColor,
  paddingVertical: 0,
  paddingHorizontal: 0,
}

const $proBtnText: TextStyle = {
  color: colors.white,
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
  marginTop: spacing.large,
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
  backgroundColor: "#707070",
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

const $info: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  gap: 10,
  marginTop: spacing.medium,
  backgroundColor: "#F9F8F8",
  borderRadius: 8,
  height: 97,
  paddingLeft: 10,
}

const $infoTitle: TextStyle = {
  color: colors.blackColor,
  //   marginBottom: spacing.tiny,
}
const $infoView: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
}

const $infoText: TextStyle = {}

const $star: TextStyle = {
  width: 90,
  height: 15,
}

const $Rating: ViewStyle = {
  display: "flex",
  alignItems: "flex-start",
}

const $comment: ViewStyle = {
  marginTop: spacing.medium,
  backgroundColor: "#F9F8F8",
  borderRadius: 8,
  paddingHorizontal: 10,
  paddingBottom: 10
}
const $conText: TextStyle = {
  marginBottom: spacing.medium,
}
const $conText2: TextStyle = {
  marginBottom: spacing.large,
}

const $conText3: TextStyle = {
    color: colors.blueColor,
    textAlign: "center", 
    fontWeight: "500"
}