import React, { FC } from "react"
import { View, ViewStyle, Dimensions, Text, TextStyle } from "react-native"
import { TextField, Button } from "../../components"
import { colors, spacing } from "../../theme"
// import { SideBar } from "../../components/SideNav"
import { SafeAreaView } from "react-native-safe-area-context"
import { BookTop } from "../../components/BookTop"
import { AppStackScreenProps } from "../../navigators"
import { useStores } from "../../models"
import { Controller, useForm } from "react-hook-form"

const { height } = Dimensions.get("screen")
interface DriverScreenProps extends AppStackScreenProps<"Driver"> {}

type FormData = {
  email: string
  password: string
  error: string
}

export const AddTruck: FC<DriverScreenProps> = function AddTruck(_props) {
  //   const { navigation } = _props

  //   const bidder = () => {
  //    navigation.navigate("User", {
  //       screen: "Notification",
  //     })
  //   }
  const { userStore }: any = useStores()
  const mode = userStore.mode

  const {
    control,
    // handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  return (
    <SafeAreaView
      style={[
        $BidPage,
        { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
      ]}
    >
      <BookTop title="Add Truck" />

      <View style={$details}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="email"
          defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              containerStyle={$textField}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              labelTx="Truck.truckModel"
              placeholderTx="Truck.modelNum"
            />
          )}
        />
        {errors.email && <Text style={$emailErr}>Email is Required</Text>}
        <View style={$info}>
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              name="email"
              defaultValue=""
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  containerStyle={$infoView}
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect={false}
                  keyboardType="default"
                  labelTx="Truck.height"
                  placeholderTx="Truck.heightNum"
                />
              )}
            />
            {errors.email && <Text style={$emailErr}>Email is Required</Text>}
          </View>
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              name="email"
              defaultValue=""
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  containerStyle={$infoView}
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect={false}
                  keyboardType="default"
                  labelTx="Truck.height"
                  placeholderTx="Truck.heightNum"
                />
              )}
            />
            {errors.email && <Text style={$emailErr}>Email is Required</Text>}
          </View>
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              name="email"
              defaultValue=""
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  containerStyle={$infoView}
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect={false}
                  keyboardType="default"
                  labelTx="Truck.height"
                  placeholderTx="Truck.heightNum"
                />
              )}
            />
            {errors.email && <Text style={$emailErr}>Email is Required</Text>}
          </View>
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              name="email"
              defaultValue=""
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  containerStyle={$infoView}
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect={false}
                  keyboardType="default"
                  labelTx="Truck.length"
                  placeholderTx="Truck.heightNum"
                />
              )}
            />
            {errors.email && <Text style={$emailErr}>Email is Required</Text>}
          </View>
        </View>

        <Button
          testID="login-button"
          style={$tapButton}
          tx="Truck.add"
          preset="reversed"
          // onPress={handleSubmit()}
        ></Button>
      </View>
    </SafeAreaView>
  )
}

const $tapButton: ViewStyle = {
  height: 45,
  marginTop: spacing.extraSmall,
  marginBottom: spacing.extraLarge,
}

const $BidPage: ViewStyle = {
  backgroundColor: colors.white,
  height,
}

const $details: ViewStyle = {
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
  marginTop: spacing.medium,
}

const $info: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  flexDirection: "row",
  marginTop: spacing.medium,
}
const $infoView: ViewStyle = {
  width: 151,
  height: 44,
  //   borderWidth: 1,
  borderRadius: 5,
  //   borderColor: "#B8B0B0",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  marginBottom: spacing.extraLarge,
  paddingLeft: 10,
}

const $textField: ViewStyle = {
  marginBottom: spacing.medium,
}
const $emailErr: TextStyle = {
  color: colors.error,
  fontSize: 12,
}
