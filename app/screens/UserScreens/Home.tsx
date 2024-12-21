import React, { FC, useEffect, useState } from "react"
import {
  Image,
  ImageStyle,
  View,
  ViewStyle,
  ScrollView,
  TextStyle,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native"
import { Screen } from "../../components"
import { UserTabScreenProps } from "../../navigators/UserNavigator"
import { colors, spacing } from "../../theme"
import { TrackingBoard } from "../../components/Tracking"
import { History } from "../../components/ShipmentHistory"
import { useStores } from "../../models"
import data from "../../utils/Data/ShipmentHistory.json"
import load from "../../utils/Data/loads.json"

import { Trucks } from "../../utils/trucks"
import { Avatar, Icon, Text } from "@rneui/themed"
import { FeatureTab } from "../../components/FeatureTab"

const searchIcon = require("../../../assets/icons/comeCariICon/search.png")

export const Home: FC<UserTabScreenProps<"Home">> = function Home(_props) {
  const { navigation }: any = _props
  const { userStore }: any = useStores()
  let { mode, tracking } = userStore
  const [data, setData] = useState([])
  const [trackingNo, setTrackingNo] = useState("")

  const track = async () => {
    if (trackingNo === "") {
      Alert.alert("Error", "Tracking Number cannot be empty")
    } else {
      await userStore.trackShipment(trackingNo)
      if (userStore.status === "success") {
        navigation.navigate("User", {
          screen: "TrackItem",
        })
      } else {
        Alert.alert("Error", "Invalid Tracking Number")
      }
    }
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // await userStore.getLoad();
        if (load && Trucks) {
          const updatedData = load.map((asset) => {
            const matchingTruck = Trucks.find((truck) => truck.value === asset.truckType);
            if (matchingTruck) {
              return {
                ...asset,
                truckImage: matchingTruck.image,
                truckType: matchingTruck.type,
              };
            } else {
              return asset;
            }
          });
          setData(updatedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const getTimeBasedGreeting = (name: string): string => {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
      return `Good Morning ${name} 🌅`;
    } else if (hour >= 12 && hour < 17) {
      return `Good Afternoon ${name} ☀️`;
    } else {
      return `Good Evening ${name} 🌙`;
    }
  };
  
  

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} backgroundColor={mode === "dark" ? colors.darkBackground : colors.background}>
      <ScrollView style={{ marginBottom: spacing.large }}>
        {/* A header with welcome and with your name on the left and a notification and user profile image to the right  */}

        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",  margin: spacing.large }}>
          <View>
            <Text 
            h4
            h4Style={{ fontSize: 18, fontWeight: "normal" }}
            style={{ 
              fontSize: 16,
              
              color: mode === "dark" ? colors.darkText : colors.text }} 
            >

              {getTimeBasedGreeting("John")}

            </Text>
            {/* <Text tx="User.name" preset="authHeading" style={{ fontSize: 16 }} /> */}
          </View>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>

            <Icon
                // raised
                name="bell-o"
                type="font-awesome"
                color={colors.palette.secondary200}
                containerStyle={{
                  right: 10,
                  // top: -10,
                }}
                onPress={() => navigation.navigate("User", { screen: "Notification" })}
                />

                <Avatar
                   size={30}
                   rounded
                   source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
                />
            
          </View>
        </View>
        <View
          style={[
            $trackPack,
            { backgroundColor: mode === "dark" ? colors.overBlue : colors.lightBlue },
          ]}
        >
          <Text h4 h4Style={{
             fontSize: 16, fontWeight: "bold" 
          }} style={$trackHeading} >
            Track your shipment
          </Text>
          <Text style={$trackSub} >
            Please enter your shipment number
          </Text>
          <View style={$search}>
            <TextInput
              style={$textField}
              placeholder="Shipment Number..."
              keyboardType="default"
              autoCorrect={false}
              placeholderTextColor={mode === "dark" ? colors.darkText : colors.text}
              onChangeText={(newText) => setTrackingNo(newText)}
            />
            <TouchableOpacity style={$searchIcon} onPress={() => track()}>
              <Image style={$ImageStyle} source={searchIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <TrackingBoard title="Current Shipment" item={data} />
        <FeatureTab navigation={navigation} />
        <History title="Recent Shipment" data={data} seeMore={undefined} navigation={navigation}  />
      </ScrollView>
    </Screen>
  )
}

const $trackPack: ViewStyle = {
  borderRadius: 20,
  width: "90%",
  marginRight: "auto",
  marginLeft: "auto",
  padding: spacing.medium,
}

const $trackHeading: TextStyle = {
  fontSize: 16,
}

const $trackSub: TextStyle = {
  color: colors.greyColor,
  marginBottom: spacing.extraLarge,
}

const $textField: ViewStyle = {
  width: "85%",
  borderWidth: 0,
  borderColor: "transparent",
  marginLeft: "auto",
  height: "100%",
}

const $search: ViewStyle = {
  // display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: colors.white,
  borderRadius: 10,
  paddingHorizontal: 5,
  height: 39,
}

const $searchIcon: ViewStyle = {
  backgroundColor: colors.blueColor,
  height: 35,
  width: 35,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 100,
}

const $ImageStyle: ImageStyle = {
  width: 13,
  height: 13,
}