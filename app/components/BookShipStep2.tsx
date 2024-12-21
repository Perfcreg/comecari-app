import React, { useEffect, useState } from "react"
import { View, ViewStyle, TextInput, Image, ImageStyle, Alert } from "react-native"
import { useStores } from "../models"
import { Text, TextField, Button } from "."
// import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { colors, spacing } from "../theme"
import ModalSelector from "react-native-modal-selector"
import { UserApi } from  "../services/api/user-api"
import { getDistanceMatrix } from "../utils/distance"
// import { BookTop } from "../../components/BookTop"

const Naira = require("../assets/images/comecari/naira.png")

export const BookShipStep2 = (props) => {
  const [data, setData] = useState()
  const [setting , setSetting] = useState(0)
  const [search, setSearch] = useState("")
  // const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([])

  const { userStore }: any = useStores()
  const [state, setState] = useState({
    driver: "",
    description: "",
    proposedFee: "",
  })
  const mode = userStore.mode
  useEffect(() => {
    const fetchUser = async () => {
      await userStore.getAllUser()
      const filteredArray = userStore.users.filter((item) => item.username)
      setMasterDataSource(
        filteredArray.map((item) => ({
          key: item._id,
          label: item.username,
        })),
      )
    }
    fetchUser()
  }, [])

  function extractNumericValue(valueWithUnit: string): number | null {
    const numericPart = parseInt(valueWithUnit, 10);
  
    // Check if the parsed numeric part is a valid number
    if (!isNaN(numericPart)) {
      return numericPart;
    }
  
    return null; // Return null if the value couldn't be parsed as a number
  }

  React.useEffect(() => {
    const { getState } = props
    const state: any = getState()
    async function fetchData() {
      async function fetchData() {
        setData(state)
      }
      fetchData()
    }


    async function fetchPrice() {
      try {
        const request = new UserApi()
        const {data} = await request.getSetting();
       const price = data?.data.find((price)=> price.name === "Fuel")
       const km = await getDistanceMatrix(state.originName, state.destinationName)
      const litresPerKilometer = 40 / 100;
       const numericDistance = extractNumericValue(km.rows[0].elements[0].distance?.text);
       const fuel = numericDistance * litresPerKilometer * price?.value
       const workManship = numericDistance * 2000
      const truckMaintance = numericDistance * 300
      const totalPrice = workManship + fuel + truckMaintance
       setSetting(Math.ceil(totalPrice / 1000) * 1000)
      } catch (error) {
        console.error('Error fetching dynamic values:', error);
      }
    }
    fetchPrice()
    fetchData()
  }, [])


  const nextStep = async () => {
    if(state.proposedFee === ""
    ){
      Alert.alert("Error", "Offer can't be empty")
      return;
    }

    if(Number(state.proposedFee) < setting
    ){
      Alert.alert("Error", "Kindly Increase your offer")
      return;
    }
    const { next, saveState } = props
    saveState({
      data,
      ...state,
    })
    next()
  }

  // const goback = () => {
  //   const { back } = props
  //   back()
  // }

  return (
    <View style={$shipCon}>
      <ModalSelector
        data={masterDataSource}
        initValue="Select a preferred carrier!"
        supportedOrientations={["portrait"]}
        accessible={true}
        scrollViewAccessibilityLabel={"Scrollable options"}
        cancelButtonAccessibilityLabel={"Cancel Button"}
        onChange={(option) => {
          setSearch(option.label)
          setState({
            ...state,
            driver: option._id,
          })
        }}
      >
        <TextField
          containerStyle={$textField}
          autoCapitalize="none"
          autoCorrect={false}
          labelTx="Book.tagDrive"
          placeholder="@username"
          value={search}
        />
      </ModalSelector>

      <TextField
        labelTx="Book.intructions"
        multiline
        // style={$textField}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newText) =>
          setState({
            ...state,
            description: newText,
          })
        }
        placeholder="Enter A full Description of your load"
      />

      <Text
        tx="Book.offer"
        style={[$text, { color: mode === "dark" ? colors.darkText : colors.text }]}
        preset="subheading"
        weight="medium"
      />

      <View style={$price}>
        <TextInput
          style={$textFieldd}
          keyboardType="number-pad"
          placeholder="200,000"
          onChangeText={(newText) =>
            setState({
              ...state,
              proposedFee: newText,
            })
          }
        />
        <View style={$nairaBox}>
          <Image source={Naira} style={$naira} />
        </View>
      </View>

      <Text
        style={{ color: mode === "dark" ? colors.darkText : colors.text }}
        // tx="Book.priceLimit"
        text= {`* Offer cannot go below \u20A6 ${setting}`}
        preset="smallThick"
      />

      <Button
        testID="login-button"
        tx="Book.button"
        style={$tapButton}
        preset="reversed"
        onPress={nextStep}
      />
    </View>
  )
}

const $shipCon: ViewStyle = {
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: spacing.extraLarge,
}

const $textField: ViewStyle = {
  marginTop: spacing.medium,
}
const $text: ViewStyle = {
  marginTop: spacing.medium,
  marginBottom: spacing.extraSmall,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.extraLarge,
  borderColor: colors.greyColor,
}

const $textFieldd: ViewStyle = {
  width: "86%",
}
const $price: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  justifyContent: "flex-start",
  borderWidth: 1,
  borderRadius: 5,
  paddingLeft: 10,
  backgroundColor: colors.white,
}
const $nairaBox: ViewStyle = {
  height: 44,
  width: 44,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderTopStartRadius: 0,
  borderTopEndRadius: 5,
  borderBottomEndRadius: 5,
  borderBottomStartRadius: 0,
  backgroundColor: "#EBECFC",
}
const $naira: ImageStyle = {
  height: 20,
  width: 18,
}
