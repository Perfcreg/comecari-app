import React, { FC, useState } from "react"
import { View, ViewStyle, TextStyle } from "react-native"
//  ImageStyle, , Image, TouchableOpacity
import { colors, spacing } from "../../theme"
import { Text, Button } from "../../components"
import { AppStackScreenProps } from "../../navigators"
import { useStores } from "../../models"
import { DriverSideNav } from "../../components/DriverSideNav"
import * as DocumentPicker from "expo-document-picker"

interface DriverScreenProps extends AppStackScreenProps<"Driver"> {}

export const DriverRegistration3: FC<DriverScreenProps> = function DriverRegistration3(_props) {
  const { navigation }: any = _props

  const [selectedFile, setSelectedFile] = useState(null)

  const handleDocumentPicker = async () => {
    try {
      const result: any = await DocumentPicker.getDocumentAsync()

      if (result.type === "success") {
        setSelectedFile(result)
        console.log(selectedFile)
      } else {
        // Handle document picking cancellation or error
      }
    } catch (error) {
      // Handle document picking error
    }
  }
  const { userStore }: any = useStores()

  const mode = userStore.mode
  function Next() {
    navigation.navigate("Driver", {
      screen: "DriverRegistration3",
    })
  }
  return (
    <DriverSideNav
      navigation={navigation}
      mode={mode === "dark" ? colors.darkBackground : colors.background}
    >
      <View style={$reg}>
        <Text
          tx="registration.road"
          preset="formHelper"
          weight="normal"
          style={[$doc, { color: mode === "dark" ? colors.darkText : colors.text }]}
        />
        <Button onPress={handleDocumentPicker}>
          <Text tx="Book.documentBtn" preset="small" style={$docText} />
        </Button>

        <View style={$btnns}>
          <Button
            testID="login-button"
            tx="registration.previos"
            style={$tapPrev}
            preset="filled"
            onPress={() => navigation.goBack()}
          />

          <Button
            testID="login-button"
            tx="registration.next"
            style={$tapButton}
            preset="reversed"
            onPress={Next}
          />
        </View>
      </View>
    </DriverSideNav>
  )
}

const $reg: ViewStyle = {
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
}

const $btnns: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  marginTop: spacing.large,
}

const $tapPrev: ViewStyle = {
  height: 45,
  marginTop: spacing.extraSmall,
  marginBottom: spacing.extraLarge,
  width: "48%",
  backgroundColor: "#E0E1FB",
}

const $tapButton: ViewStyle = {
  height: 45,
  marginTop: spacing.extraSmall,
  marginBottom: spacing.extraLarge,
  width: "48%",
}
const $doc: TextStyle = {
  marginTop: spacing.medium,
}

const $docText: TextStyle = {
  color: colors.blueColor,
}