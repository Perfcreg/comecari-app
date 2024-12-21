/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from "react"
import Carousel, { } from "react-native-reanimated-carousel"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Dimensions } from "react-native"
// import { color } from 'react-native-reanimated';
import { colors } from "../theme"
import { Text } from "./Text"
import { useStores } from "../models"

const CONTAINER: ViewStyle = {
  alignItems: "center",

}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window")

export interface CarouselCardsProps {

}

export const CarouselCards = observer(function CarouselCards(props) {
  const { userStore }: any = useStores()
  const [mode, setMode] = React.useState(userStore.mode)
  const { data, renderItem, showPagination, ...otherProps } = props
  // const styles = Object.assign({}, CONTAINER, style)
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    // Your carousel logic here
    
    // Cleanup function
    return () => {
      // Clear any timers
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      // Reset state
      setCurrentIndex(0);
    };
  }, []);
  return (
    <View style={CONTAINER}>

      <Carousel
        // withAnimation={}
        loop
        width={screenWidth}
        height={screenHeight}
        autoPlay={true}
        data={[...data]}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ item, index }) => renderItem({ item, index })}
        {...otherProps}
        
      />
    </View>
  )
})
