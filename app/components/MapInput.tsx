import React from "react"
import { FlatList, ScrollView } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import GOOGLE_MAP_API from '../config'

export const MapInput = (props) => {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{
        flexDirection: "column",
        justifyContent: "space-around",
        width: "100%",
      }}
      keyboardShouldPersistTaps={"handled"}
    >
      <GooglePlacesAutocomplete
        placeholder={props.placeholder}
        minLength={2} // minimum length of text to search
        listViewDisplayed={false} // true/false/undefined
        fetchDetails={true}
        onPress={(data, details: any = null) => {
          // 'details' is provided when fetchDetails = true
          props.notifyChange(details.geometry.location, data)
        }}
        query={{
          key: GOOGLE_MAP_API.GOOGLE_MAP_API,
          language: "en",
          components: "country:ng",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={300}
        onFail={(error) => console.error(error)}
        disableScroll={false}
      />
    </ScrollView>
  )
}
