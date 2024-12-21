import React from "react"
// , { ComponentType, forwardRef, Ref, useImperativeHandle, useRef }
import { Dimensions, TextStyle, View, ViewStyle } from "react-native"
import { colors, spacing, typography } from "../theme"
// import { Text } from "./Text"
import {Text} from '@rneui/themed'
import { useStores } from "../models"
import { ShipmentCard } from "./ShipmentCard"
import { CarouselCards } from "./Carousel"

interface TrackingProps {
  title: string
  item: Array<object>
}

export const TrackingBoard = ({ title, item }: TrackingProps) => {
  const { userStore }: any = useStores()

  const mode = userStore.mode

  const accountSlide = ({item}) => {
    return (
      <ShipmentCard
        shipmentNum ={item.shipmentNumber}
        from={item.origin?.name}
        to={item.destination?.name}
        status={item.status}
        truck={item.truckImage}
      />
    )
  }
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window")


  return (
    <View style={$trackingBoard}>
        <Text
          h4
          h4Style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: spacing.medium,
          }}
          style={{ color: mode === "dark" ? colors.darkText : colors.text }}
        >
          {title}
        </Text>
      {item?.length > 0 ? (
        
        <CarouselCards 
          data={item} 
          renderItem={accountSlide}  
          height={200}
          width={screenWidth - spacing.extraLarge}
          scrollAnimationDuration={3000}
          // mode="parallax"
          pagingEnabled= {true}
          snapEnabled= {true}
          vertical= {false}
          autoPlay= {false}
          autoPlayInterval= {2000}
          autoPlayReverse = {false}
          
        />
      ) : (
        <Text style={{}}>No Data Yet</Text>
      )}
    </View>
  )
}

const $trackingBoard: ViewStyle = {
  // marginTop: spacing.large,
  padding: spacing.large,
  // flex: 1,
}

const $trackingTop: ViewStyle = {
  flex: 1,
  justifyContent: "space-between",
  flexDirection: "row",
}

const $seeMore: TextStyle = {
  fontWeight: '500'
}
