import React, { useEffect, useState } from "react"
import {
  Image,
  View,
  ViewStyle,
  ScrollView,
  TextStyle,
  TouchableOpacity,
  ImageStyle,
  Modal,
  Alert,
} from "react-native"
import { Details } from "./Modals/Details"
import { Text, TextField, Button, MapInput, MyMapView } from "."
import { colors, spacing } from "../theme"
import { useStores } from "../models"
import { getCurrentLocation, getPlaceNameFromCoordinates } from "../utils/locationService"
import { FontAwesome } from "@expo/vector-icons"
import * as DocumentPicker from "expo-document-picker"
// import {Trucks} from "../utils/Data/Trucks"
import { Trucks } from "../utils/trucks"
import { GOODTYPES } from "../utils/Data/Goods"
import DropDownPicker from 'react-native-dropdown-picker';


import PaymentModal from "./PaymentModal"

export const BookShipStep1 = (props) => {
  const { userStore }: any = useStores()
  const mode = userStore.mode

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState(GOODTYPES)
  const [state, setState] = useState({
    originName: "",
    originLat: "",
    originLng: "",
    destinationName: "",
    destinationLat: "",
    destinationLng: "",
    truckType: "",
    truckValue: "",
    weight: 0,
    selectTruck: 0,
    modalData: {},
    modal: false,
  })

  const getInitialLocation = async () => {
    const location: any = await getCurrentLocation()
    setState({
      ...state,
      region: {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      },
    })
  }

  const nextStep = () => {
    if (
      state.originName === "" ||
      state.weight === 0 ||
      state.originLat === "" ||
      state.originLng === "" ||
      state.destinationName === "" ||
      state.destinationLat === "" ||
      state.destinationLng === "" ||
      state.truckType === "" ||
      value  === ""
    ) {
      Alert.alert("Error", "All field is required")
    } else {
      const { next, saveState } = props
      // Save state for use in other steps
      const {
        originName,
        originLat,
        originLng,
        destinationName,
        destinationLat,
        destinationLng,
        truckType,
        weight,
        truckValue
      } = state
      saveState({
        originName,
        originLat,
        originLng,
        destinationName,
        destinationLat,
        destinationLng,
        truckType,
        weight,
        truckValue,
        goodType : value
      })
      // Go to next step
      next()
    }
  }

  const getCoordsFromName = async (loc) => {
    setState({
      ...state,
      region: {
        latitude: loc.lat,
        longitude: loc.lng,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      },
    })
  }

  const onMapRegionChange = (region) => {
    setState({ ...state, region })
  }

  useEffect(() => {
    getInitialLocation()
  }, [])
  const handleTruckSelction = (index) => {
    setState({
      ...state,
      selectTruck: index,
    })
  }
  const [selectedFile, setSelectedFile] = useState(null)

  const handleDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync()

      if (result.output) {
        setSelectedFile(result)
        console.log(selectedFile)
      } else {
        // Handle document picking cancellation or error
      }
    } catch (error) {
      // Handle document picking error
    }
  }

  const $select: TextStyle = {
    color: mode === "dark" ? colors.darkText : colors.text,
  }

  return (
    <View
      style={{
        marginTop: spacing.medium,
        padding: spacing.medium,
        marginBottom: spacing.extraLarge
      }}
    >
      <Text preset="default" style={$select}>
        Select Truck -{" "}
        <Text
          tx="Book.select"
          preset="formHelper"
          weight="bold"
          style={{
            color: mode === "dark" ? colors.darkText : colors.text,
          }}
        />
      </Text>
      <Modal visible={state.modal}>
        <PaymentModal
          description={state.modalData.description}
          close={() => {
            setState({
              ...state,
              modal: false,
            })
          }}
          truck={state.modalData.image}
        />
      </Modal>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={$trucks}>
        {Trucks.map((data, i) => (
          <TouchableOpacity
            key={i}
            onPressIn={() => handleTruckSelction(i)}
            style={state.selectTruck === i ? $truckActive : $truck}
            onLongPress={() => {
              setState({
                ...state,
                modal: true,
                modalData: data,
              })
            }}
            onPress={() => {
              setState({
                ...state,
                truckType: data.type,
                truckValue: data.value
              })
            }}
          >
            <FontAwesome
              name="exclamation-circle"
              style={state.selectTruck === i ? $exclShow : $exclNone}
            />
            <Image
              source={data.image}
              style={$truckImage}
              resizeMode="contain"
              onError={(error) => console.error("Image Error:", error)}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TextField
        containerStyle={$textField}
        autoCorrect={false}
        label="Truck Type"
        placeholder="select a truck"
        editable={false}
        value={state.truckType}
      />

      <Text
        text="Pickup Location"
        preset="formHelper"
        weight="normal"
        style={[$doc, { color: mode === "dark" ? colors.darkText : colors.text }]}
      />
      <MapInput
        notifyChange={(data, details) => {
          console.log(data)
          setState({
            ...state,
            originName: details.description,
            originLat: data.lat,
            originLng: data.lng,
          })
        }}
        placeholder="Ikeja, Lagos"
      />

      <Text
        text="Select Destination"
        preset="formHelper"
        weight="normal"
        style={[$doc, { color: mode === "dark" ? colors.darkText : colors.text }]}
      />
      <MapInput
        notifyChange={(data, details) => {
          setState({
            ...state,
            destinationName: details.description,
            destinationLat: data.lat,
            destinationLng: data.lng,
          })
        }}
        placeholder="Port Harcourt, Rivers State"
      />
      
      <TextField
        containerStyle={$textField}
        keyboardType="number-pad"
        autoCorrect={false}
        label="Weight (tons)"
        placeholder="50"
        onChangeText={(newText) => setState({ ...state, weight: Number(newText) })}
      />

      <View style={{

      }}>
      <Text
      text="Consignment Type"
      preset="formHelper"
      weight="normal"
      style={[$doc, { color: mode === "dark" ? colors.darkText : colors.text }]}
    /> 
   
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          listMode="SCROLLVIEW"
          placeholder="Select a cargo type"
         />
      </View>

      <Button
        testID="login-button"
        tx="Book.nextBtn"
        style={$tapButton}
        preset="reversed"
        onPress={() => nextStep()}
      />
    </View>
  )
}

const $trucks: ViewStyle = {
  marginTop: spacing.small,
}

const $truckActive: ViewStyle = {
  backgroundColor: colors.lightBlue,
  borderRadius: 8,
  width: 115,
  height: 86,
  position: "relative",
  marginRight: spacing.medium,
}
const $truck: ViewStyle = {
  width: 115,
  height: 86,
  position: "relative",
  marginRight: spacing.medium,
}

const $exclShow: TextStyle = {
  color: colors.blueColor,
  position: "absolute",
  right: 5,
  top: 4,
  zIndex: 11,
}
const $exclNone: TextStyle = {
  display: "none",
}

const $textField: ViewStyle = {
  alignContent: "center",
  marginTop: spacing.small,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.medium,
  borderColor: colors.greyColor,
}

const $doc: TextStyle = {
  marginTop: spacing.small,
}

const $truckImage: ImageStyle = {
  minWidth: 100,
  maxWidth: 115,
  flex: 1,
}
