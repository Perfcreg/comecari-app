import React, { FC } from "react"
import {
  View,
  ViewStyle,
  TextStyle,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { Text } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
import { BookTop } from "../../components/BookTop"
import Chats from "../../utils/Data/Chat.json"
import { useStores } from "../../models"
import { LinearGradient } from "expo-linear-gradient"
import { FontAwesome } from "@expo/vector-icons"
const { height } = Dimensions.get("screen")

export const Chat: FC<DemoTabScreenProps<"Chat">> = function Chat(_props) {
  const { userStore }: any = useStores()

  const mode = userStore.mode

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[
        $BidPage,
        { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
      ]}
    >
      <BookTop title="Chat" />

      <View>
        {Chats.map((message, ind) => {
          return (
            <View style={$Chat} key={ind}>
              {message.Sender === "You" ? (
                <View style={$You}>
                  <Text>{message.Message}</Text>
                </View>
              ) : (
                <LinearGradient
                  colors={["#575454", "#7A7575", "#5A5252"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={$Driver}
                >
                  <Text style={$dText}>{message.Message}</Text>
                </LinearGradient>
              )}
            </View>
          )
        })}
      </View>

      <View
        style={[$message, { backgroundColor: mode === "dark" ? colors.lightBlue : colors.white }]}
      >
        <TextInput placeholder="Type a message" style={$messageInput} />
        <FontAwesome name="paper-plane" size={22} />
      </View>
    </KeyboardAvoidingView>
  )
}

const $BidPage: ViewStyle = {
  backgroundColor: colors.white,
  height,
  position: "relative",
  paddingTop: spacing.medium,
}

const $message: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  elevation: 3,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,
  height: 50,
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
  position: "absolute",
  bottom: 30,
  left: "5%",
  borderRadius: 5
}

const $messageInput: ViewStyle = {
  width: "90%",
}

const $Chat: ViewStyle = {
  // marginTop: spacing.large,
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
}

const $You: ViewStyle = {
  backgroundColor: "#E0E1FB",
  padding: spacing.medium,
  alignSelf: "flex-end",
  borderTopRightRadius: 0,
  borderRadius: 20,
  marginVertical: spacing.large,
}

const $Driver: ViewStyle = {
  padding: spacing.medium,
  alignSelf: "flex-start",
  borderTopLeftRadius: 0,
  borderRadius: 20,
  maxWidth: 204,
}

const $dText: TextStyle = {
  color: colors.white,
  fontWeight: "500",
}
