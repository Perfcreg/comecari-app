import React, { useEffect, useState, useCallback } from 'react';
import { View, Image, StyleSheet, ImageStyle, ImageBackground, TextStyle, ViewStyle } from 'react-native';
import { Video } from 'expo-av';
import NetInfo from "@react-native-community/netinfo";
import { Button, Text } from '../components';
import { colors, spacing, typography } from 'app/theme';
import { CarouselCards } from 'app/components/Carousel';
import { useFocusEffect } from '@react-navigation/native';


const imageSource1 = require('../assets/images/background.jpg');
const imageSource2 = require('../assets/images/Splash1.jpg');
const imageSource3 = require('../assets/images/Splash2.jpg');


const videoSource = require('../assets/images/background.mp4');
const welcomeLogo = require("../assets/images/comecari/comecari-white.png")

export const SplashScreen = (_props) => {
  const [isConnected, setIsConnected] = useState(true);
  const { navigation }: any = _props

  const [isVisible, setIsVisible] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setIsVisible(true);

      // Cleanup when screen loses focus
      return () => {
        setIsVisible(false);
      };
    }, [])
  );
  useEffect(() => {
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected);
    });
  }, []);

  const login = () => {
    navigation.navigate("Auth", {
      screen: "login"
    })
  }

  const register = () => {
    navigation.navigate("Auth", {
      screen: "signUp"
    })
  }



  const data = [
    {
      image: imageSource1,
      heading: "Connect. Optimize. Deliver.",
      text: "Seamlessly link shippers and carriers for efficient freight operations.",
      buttonText: "Get Started",
      onpress: login
    },
    {
      image: imageSource2,
      heading: "Freight Made Effortless.",
      text: "Simplify freight management with a user-friendly, automated platform.",
      buttonText: "Get Started",
      onpress: login
    },
    {
      image: imageSource3,
      heading: "Smart Loads, Smarter Moves.",
      text: "Optimize routes and reduce empty backloads for cost-effective logistics.",
      buttonText: "Get Started",
      onpress: register
    }
  ]

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    },
    video: {
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
    image: {
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.5)', // Adjust opacity value (0.5) as needed
      zIndex: 1,
    },
    buttonContainer: {
      position: 'absolute',
      backgroundColor: colors.white,
      bottom: 0,
      width: '100%',
      height: '30%',
      zIndex: 3,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20

    },
    button: {
      width: '40%',
    },
  });

  const itemDesign = ({ item }) => {
    return (
      <ImageBackground style={$backgroundImage} source={item.image} imageStyle={{
        resizeMode: 'cover',
        height: 700,
        width: '100%',
      }}>
        <View style={$overlayTextContainer} />
        <Image
          source={welcomeLogo}
          style={{
            zIndex: 2,
            alignSelf: 'center',
            margin: 80

          }}
        />
        <View style={styles.buttonContainer}>
          <Text
            text={item.heading}
            style={{
              color: colors.blackColor,
              fontSize: 18,
              textAlign: 'center',
              margin: spacing.medium,
              fontWeight: '900',
              fontFamily: typography.fonts.inter.bold
            }}
          />

          <Text
            text={item.text}
            style={{
              color: colors.drakGrey,
              fontSize: 18,
              textAlign: 'center',
              margin: spacing.medium
            }}
          />

          <Button
            text={item.buttonText}
            style={{
              backgroundColor: colors.blackColor,
              marginHorizontal: spacing.medium,
              top: 10
            }}
            textStyle={{
              color: colors.white,
              fontSize: 16,
            }}
            onPress={item.onpress}
          />

        </View>
      </ImageBackground>
    )
  }
  return (
    <View style={styles.container}>

      {isConnected ? (
        <>
          <Image
            source={welcomeLogo}
            style={{
              alignSelf: 'center',
              position: 'absolute',
              zIndex: 2,
              top: 10,
              margin: 80
            }}
          />
          <Video
            source={videoSource}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={styles.video}
          />
          <View style={$overlayTextContainer} />

          {isVisible && <CarouselCards
            data={
              data
            }
            renderItem={(item) => {
              return (
                <View style={styles.buttonContainer}>
                  <Text
                    text={item.item.heading}
                    style={{
                      color: colors.blackColor,
                      fontSize: 18,
                      textAlign: 'center',
                      margin: spacing.medium,
                      fontWeight: '900',
                      fontFamily: typography.fonts.inter.bold
                    }}
                  />

                  <Text
                    text={item.item.text}
                    style={{
                      color: colors.drakGrey,
                      fontSize: 18,
                      textAlign: 'center',
                      margin: spacing.medium
                    }}
                  />

                  <Button
                    text={item.item.buttonText}
                    style={{
                      backgroundColor: colors.blackColor,
                      marginHorizontal: spacing.medium,
                      top: 10
                    }}
                    textStyle={{
                      color: colors.white,
                      fontSize: 16,
                    }}
                    onPress={item.item.onpress}
                  />

                </View>
              )
            }}

            scrollAnimationDuration={3000}

          />}
        </>
      ) : (
        isVisible && <CarouselCards
          data={
            data
          }
          renderItem={itemDesign}

          scrollAnimationDuration={3000}

        />
      )}

    </View>
  );
};



//  const $backgroundImage: ImageStyle = {
const $backgroundImage: ImageStyle = {
  width: '100%',
  height: '100%',
}

const $overlayTextContainer: ViewStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 0,
  backgroundColor: 'rgba(0,0,0,0.4)' // Semi-transparent overlay
}


