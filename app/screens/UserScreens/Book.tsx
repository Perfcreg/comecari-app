import React, { FC } from "react"
import { ScrollView } from "react-native"

import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
import { useStores } from "../../models"
import AnimatedMultistep from "react-native-animated-multistep"
import { BookShipStep1 } from "../../components/BookShipStep1"
// import * as DocumentPicker from "expo-document-picker"
// import { CompleteBook } from "./CompleteBook"
import { BookShipStep2 } from "../../components/BookShipStep2"
import { BookShipmentStep3 } from "../../components/BookShipmentStep3"
// import { SideBar } from "../../components/SideNav"

export const Book: FC<DemoTabScreenProps<"Book">> = function Book(_props) {
  const { navigation }: any = _props
  const { userStore }: any = useStores()

  const allSteps = [
    { name: "step 1", component: BookShipStep1 },
    { name: "step 2", component: BookShipStep2 },
    { name: "step 3", component: BookShipmentStep3 },


  ];

  const onNext = (state) => {
    console.log(state)
  }

  /* define the method to be called when you go on back step */

  const onBack = () => {
    console.log("Back")
  }

  /* define the method to be called when the wizard is finished */

  const finish = () => {
    // navigation.navigate("success")
  }
  const mode = userStore.mode

  return (
 
      <ScrollView style={{
        marginBottom: spacing.large
      }} keyboardShouldPersistTaps="handled">
        <AnimatedMultistep
          steps={allSteps}
          duration={4}
          onFinish={finish}
          onBack={onBack}
          onNext={onNext}
          comeInOnNext="bounceInUp"
          OutOnNext="bounceOutDown"
          comeInOnBack="bounceInDown"
          OutOnBack="bounceOutUp"
          defaultState={{
            truck: "",
            pickup: "",
            destination: "",
          }}

          // onFinish: PropTypes.func,
          // onNext: PropTypes.func,
          // onBack: PropTypes.func,
          // comeInOnNext: PropTypes.string,
          // OutOnNext: PropTypes.string,
          // comeInOnBack: PropTypes.string,
          // OutOnBack: PropTypes.string,
          // duration: PropTypes.number,
          // defaultState: PropTypes.object,
        />
      </ScrollView>
  )
}
