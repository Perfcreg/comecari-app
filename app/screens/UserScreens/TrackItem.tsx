import React, { FC, useEffect, useState } from "react"
import {
  Image,
  ImageStyle,
  View,
  ViewStyle,
  TextStyle,
  Dimensions,
  TouchableOpacity,
} from "react-native"
import { Text } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
// import { SideBar } from "../../components/SideNav"
import { useStores } from "../../models"
import MapView, { Marker, Polyline } from "react-native-maps"
import { FontAwesome } from "@expo/vector-icons"
import MapViewDirections from 'react-native-maps-directions';
import GOOGLE_API_KEY from "../../config"
import { ShipmentCard } from "../../components/ShipmentCard"


// Images
const profile = require("../../assets/images/comecari/profileImg.png")
const van = require("../../assets/images/comecari/van3.png")
const Icon = require("../../assets/images/comecari/message.png")
const arrowLeft = require("../../assets/icons/comeCariICon/chevron-right-solid.png")

const { height, width } = Dimensions.get("screen")
export const TrackItem: FC<DemoTabScreenProps<"TrackItem">> = function TrackItem(_props) {
  const { navigation }: any = _props
  const { userStore } = useStores()


  const {mode, tracking} = userStore

  const [data, setData] = useState(tracking.data)
  
  useEffect(()=> {
    console.log(data)
  }, [])

  function Chat() {
    navigation.navigate("User", {
      screen: "Chat",
    })
  }

  const goBackFuc = () => {
    navigation.goBack()
  }

const MAP_API_KEY = GOOGLE_API_KEY.GOOGLE_MAP_API;

const [truckPosition, setTruckPosition] = useState(data.origin.cordinates);
useEffect(() => {
  // Simulate the truck's movement (you can implement your logic here)
  const interval = setInterval(() => {
    setTruckPosition((prevPosition) => ({
      latitude: prevPosition.latitude + 0.001,
      longitude: prevPosition.longitude + 0.001,
    }));
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);

  return (
    <>
    


     <MapView
     style={$map}
     region={{...data.origin.cordinates, latitudeDelta: 2, longitudeDelta: 2}}>
     <Marker description="Origin" coordinate={data.origin.cordinates} title={data.origin.name}> 
       <FontAwesome name="map-pin" size={30} color="#000" />
     </Marker>
     <Marker description="Destination" coordinate={data.destination.cordinates} title={data.destination.name}> 
       <FontAwesome name="map-pin" size={30} color="#000" />
     </Marker>

     <Marker coordinate={truckPosition} title="Truck">
     <FontAwesome name="truck" size={30} color="#000" />
     </Marker>

     <MapViewDirections
     origin={data.origin.cordinates}
     destination={data.destination.cordinates}
     apikey={MAP_API_KEY}
     strokeWidth={3}
     strokeColor="blue"
   />
   </MapView>

   <TouchableOpacity onPress={goBackFuc} style={{
    position: 'absolute',
    top: 5, left: 15, backgroundColor:'#fff'
    
  }}>
    <Image source={arrowLeft} style={$arrow} />
  </TouchableOpacity>
      <View style={$Tracke}>
        <View style={$tracon}>
          <View
            style={[$board, { backgroundColor: mode === "dark" ? colors.lightBlue : colors.white }]}
          >
              <ShipmentCard 
              shipmentNum ={data.shipmentNumber}
              from={data.origin?.name}
              to={data.destination?.name}
              status={data.status}
              truck={data.truckImage}
              />

          
              
            </View>
            {
              // data.driver ==! '' &&

              <TouchableOpacity onPress={Chat} style={$chat}>
            <View style={$chatIcoon}>
              <Image source={profile} style={$profileImg} />
              <View>
                <Text style={$chatText} text={data?.driver?.name} preset="default" weight="bold" />
                <Text style={$chatText} tx="chat.Occupation" preset="default" weight="light" />
              </View>
            </View>

            <View style={$ChatIcon}>
              <Image source={Icon} style={$ChatIconImg} />
            </View>
          </TouchableOpacity>
            }
          </View>
        </View>
    </>
  )
}
const $map: ViewStyle = {
  flex: 1
}

const $arrow: ImageStyle = {
  width: 15,
  height: 15,
  top: 40,
  zIndex:111,
  alignSelf: "flex-start",
  position: 'absolute'
}

const $Tracke: ViewStyle = {
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
}
const $tracon: ViewStyle = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  // zIndex: 1111
}

const $chat: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#000",
  borderRadius: 30,
  paddingHorizontal: 5,
  height: 60,
  marginBottom: spacing.large,
}
const $profileImg: ImageStyle = {
  height: 49,
  width: 49,
}
const $chatIcoon: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 15,
}
const $chatText: TextStyle = {
  color: colors.white,
}
const $ChatIcon: ViewStyle = {
  width: 49,
  height: 49,
  borderRadius: 100,
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}

const $ChatIconImg: ImageStyle = {
  width: 19,
  height: 19,
}

const $board: ViewStyle = {
  flex: 1,
  borderRadius: 27,
  marginBottom: spacing.small
}

const $boardTop: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
}

const $boardNum: ViewStyle = {
  flex: 1,
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: 5,
}
const $truck: ImageStyle = {
  width: 114,
  height: 44,
}

const $fromText: TextStyle = {
  color: colors.greyColor,
}

const $Status: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  gap: 10,
  marginBottom: spacing.medium,
}
const $StatusText: TextStyle = {
  color: colors.greyColor,
}
const $border: ViewStyle = {
  borderWidth: 0.5,
  borderColor: colors.midGrey,
  marginVertical: spacing.extraSmall,
}
