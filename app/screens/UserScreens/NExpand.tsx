import React, { FC } from "react"
import { View, ViewStyle, TextStyle, Dimensions } from "react-native"
import { Text } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { useStores } from "../../models"
import { BookTop } from "../../components/BookTop"
const { height } = Dimensions.get("screen")

export const NExpand: FC<DemoTabScreenProps<"NExpand">> = function NExpand(_props) {
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
        <Text
          tx="Notification.re2"
          weight="bold"
          style={{ color: mode === "dark" ? colors.darkText : colors.text }}
        />
        <Text
          tx="Notification.re2Text"
          style={[$text, { color: mode === "dark" ? colors.darkText : colors.text }]}
        />
        <Text
          tx="Notification.re3Text"
          style={[$text, { color: mode === "dark" ? colors.darkText : colors.text }]}
        />
        <Text
          tx="Notification.re4Text"
          style={[$text, { color: mode === "dark" ? colors.darkText : colors.text }]}

        />
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

const $text: TextStyle = {
  marginTop: spacing.large,
}
