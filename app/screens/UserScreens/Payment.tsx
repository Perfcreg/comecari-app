import React, { FC, useState } from "react"
import { View, ViewStyle } from "react-native"

import { Screen, Button } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
import { useStores } from "../../models"
import { BookTop } from "../../components/BookTop"
import PaymentModal from "../../components/PaymentModal"

export const Payment: FC<DemoTabScreenProps<"Payment">> = function Payment(_props) {
  //   const { navigation } = _props

  const [paymentModal, setPaymentModal] = useState(false)

  function Pay() {
    setPaymentModal(!paymentModal)
  }
  const { userStore }: any = useStores()

  const mode = userStore.mode

  return (
    <Screen
      preset="fixed"
      style={[
        $screenContainer,
        { backgroundColor: mode === "dark" ? colors.darkBackground : colors.background },
      ]}
      safeAreaEdges={["top"]}
    >
      {paymentModal ? <PaymentModal Pay={Pay} /> : null}
      <BookTop title="Payments" />
      <View style={$shipCon}>
        <Button
          testID="login-button"
          tx="Book.Pay"
          style={$tapButton}
          preset="reversed"
          onPress={Pay}
        />
      </View>
    </Screen>
  )
}

const $screenContainer: ViewStyle = {
  flex: 1,
  backgroundColor: colors.white,
  position: "relative",
}

const $shipCon: ViewStyle = {
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: spacing.extraLarge,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.extraLarge,
  borderColor: colors.greyColor,
}
