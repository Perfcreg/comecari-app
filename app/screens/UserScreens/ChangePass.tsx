import React, { FC, useState, useMemo } from "react"
import { View, ViewStyle, Dimensions, Text, TextStyle, ActivityIndicator } from "react-native"
import { TextField, Button, Icon, TextFieldAccessoryProps } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { BookTop } from "../../components/BookTop"
import { Controller, useForm } from "react-hook-form"
import { useStores } from "../../models"

const { height } = Dimensions.get("screen")

type FormData = {
  newPassword: string
  oldPassword: string
}

export const ChangePassword: FC<DemoTabScreenProps<"ChangePassword">> = function ChangePassword() {


  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)

  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral800}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  const [isAuthPasswordHidden1, setIsAuthPasswordHidden1] = useState(true)

  const PasswordRightAccessory1 = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden1 ? "view" : "hidden"}
            color={colors.palette.neutral800}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthPasswordHidden1(!isAuthPasswordHidden1)}
          />
        )
      },
    [isAuthPasswordHidden1],
  )

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const { userStore }: any = useStores()
  const mode = userStore.mode
  const handleChangePassword = async (data: FormData) => {

    userStore
      .resetPassword(data.newPassword, data.oldPassword)
      .then(() => {
        if (userStore.status === "success") {
          console.log("success", userStore.user)
        } else {
          console.log("kkkk", userStore.user)
        }
      })
      .catch((err) => {
        console.log("test", err)
      })
  }
  return (
    <SafeAreaView
      style={[
        $BidPage,
        { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
      ]}
    >
      <BookTop title="Change Password" />
      <View style={$profileC}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="oldPassword"
          defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              containerStyle={$textField}
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect={false}
              label="Old Password"
              placeholder="**********"
              secureTextEntry={isAuthPasswordHidden}
              RightAccessory={PasswordRightAccessory}
            />
          )}
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="newPassword"
          defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              containerStyle={$textField}
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect={false}
              label="New Password"
              placeholderTx="passwordReset.confirmPlaceHolder"
              secureTextEntry={isAuthPasswordHidden1}
              RightAccessory={PasswordRightAccessory1}
            />
          )}
        />

        {errors.newPassword && <Text style={$emailErr}>Enter a valid email</Text>}

        <Button
          onPress={handleSubmit(handleChangePassword)}
          preset="reversed"
          testID="login-button"
          style={$txtBtn}
        >
          {userStore.status === "loading" ? (
            <ActivityIndicator
              size="small"
              color="#fff"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                alignContent: "center",
              }}
            />
          ) : (
            <Text
              style={{
                color: colors.white,
              }}
              testID="login-button"
            >
              Update
            </Text>
          )}
        </Button>
      </View>
    </SafeAreaView>
  )
}

const $BidPage: ViewStyle = {
  backgroundColor: colors.white,
  height,
}

const $profileC: ViewStyle = {
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
  marginTop: spacing.large,
}

const $textField: ViewStyle = {
  marginBottom: spacing.medium,
}
const $txtBtn: ViewStyle = {
  backgroundColor: colors.blueColor,
  borderColor: colors.blueColor,
  marginTop: spacing.large,
}
const $emailErr: TextStyle = {
  paddingHorizontal: spacing[3],
  color: colors.error,
  fontSize: 12,
  // fontFamily: "Poppins-Regular",
}
