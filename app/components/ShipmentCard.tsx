import React, {  } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, Image } from "react-native"
import { colors, spacing } from "../theme"
import { Icon, Text } from "@rneui/themed"
import { useStores } from "../models"
import { CircleProgress } from "./CircleProgress"
import ShipmentMapView from "./ShipmentMapView"
export const ShipmentCard = (prop) => {
  const { userStore }: any = useStores()
  const mode = userStore.mode
  const shipmentData = {
    origin: {
      cordinates: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
      name: "Origin Point"
    },
    destination: {
      cordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
      name: "Destination Point"
    }
  };

  const truckPosition = {
    latitude: 36.1699,
    longitude: -120.6013,
  };

  const handleRegionChange = (region) => {
    console.log('Region changed:', region);
  };

  console.log(prop.data)

  return (
    <View style={[$board]}>
      <ShipmentMapView
        data={shipmentData}
        truckPosition={truckPosition}
        onRegionChange={handleRegionChange}
      />
      <View style={$contentContainer}>
        <View style={$boardTop}>
          <View>
            <Text h4 h4Style={{
              color: colors.white,
              zIndex: 3,
              fontWeight: 'bold',
              fontSize: 16
            }}>
              #COME01-{prop.data.shipmentNumber}
            </Text>
          </View>
          <View style={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)', // assuming colors.white is white
            borderRadius: 50,
            padding: 5,
          }}>
            <Image source={prop.data.truckImage} resizeMode="contain" style={$truck} />
          </View>


        </View>

        <View style={$trackLocation}>
          <View style={$Location}>
            <View style={$from}>
              <Text style={$fromText} >Current Location</Text>
              <View style={{

                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                paddingVertical: spacing.small
              }}>
                <Icon size={15} type="entypo" name="location" color={colors.white} />
                <Text style={{
                  color: colors.white,
                  fontSize: 14,
                  left: 10

                }}>{prop.data.currentLocation.address}</Text>

              </View>
            </View>
            <View style={$to}>
              <Text style={$fromText} >Status</Text>
              <View style={{

                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                paddingVertical: spacing.small
              }}>
                <CircleProgress color={colors.blueColor} size={25} percentage={50} />
                <Text style={{
                  color: colors.white,
                  fontSize: 16,
                  left: 10

                }}>{prop.data.status}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const $board: ViewStyle = {
  
  // flex: 1,
  marginBottom: spacing.medium,
  borderRadius: 27,
  overflow: 'hidden'
}

const $mapContainer: ViewStyle = {
  height: 200,
  width: '100%',
  position: 'absolute'
}

const $contentContainer: ViewStyle = {
  padding: spacing.medium,
  position: 'relative',
  zIndex: 4
}

const $boardTop: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}

const $boardNum: ViewStyle = {
  flex: 1,
  // alignItems: "flex-start",
  // justifyContent: "flex-start",
  // gap: 5,
}
const $truck: ImageStyle = {
  width: 100,
  height: 44,
  zIndex: 3,
}
const $border: ViewStyle = {
  borderWidth: 1,
  borderColor: colors.greyColor,
  marginVertical: spacing.medium,
}
const $border2: ViewStyle = {
  // borderWidth: 1,
  // borderColor: colors.greyColor,
  // marginVertical: spacing.small,
}
const $trackLocation: ViewStyle = {
  // flex: 1,
  flexDirection: "row",
}

const $Location: ViewStyle = {
  flex: 1,
}

const $from: ViewStyle = {
  marginBottom: spacing.medium,
}

const $fromText: TextStyle = {
  color: colors.drakGrey,
  fontSize: 12,
  fontWeight: 'bold',
  // marginBottom: spacing.small
}

const $to: ViewStyle = {}

const $Status: ViewStyle = {
  // flex: 1,
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  gap: 10,
}
const $StatusText: TextStyle = {
  color: colors.blackColor,
}
