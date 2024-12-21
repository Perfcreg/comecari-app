import * as React from "react";
import { observer } from "mobx-react-lite";
import { View, Modal, StyleSheet, StyleProp, Animated, ViewStyle } from 'react-native';
import { colors } from "app/theme";
import { useEffect, useRef } from "react";

const logo = require("../assets/images/comecari/logo.png");

export interface LoaderProps {
  style?: StyleProp<ViewStyle>;
  visible: boolean;
}

export const Loader = observer(function Loader(props: LoaderProps) {
  const { style, visible } = props;
  const $styles = [style];
  const heartbeat = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const heartbeatAnimation = Animated.sequence([
      Animated.timing(heartbeat, {
        toValue: 1.2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(heartbeat, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]);

    const loopingAnimation = Animated.loop(heartbeatAnimation);

    if (visible) {
      loopingAnimation.start();
    } else {
      loopingAnimation.stop();
      heartbeat.setValue(1); // Reset the animation value
    }

    return () => loopingAnimation.stop();
  }, [visible, heartbeat]);

  return (
    <View style={$styles}>
      <Modal
        transparent={true}
        animationType="none"
        visible={visible}
        onRequestClose={() => { }}>
        <View style={styles.modalBackground}>
          <View style={styles.loaderContainer}>
            <Animated.Image 
              source={logo} 
              style={[
                styles.logo,
                { transform: [{ scale: heartbeat }] }
              ]} 
            />
          </View>
        </View>
      </Modal>
    </View>
  );
});

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loaderContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 40, // Make it circular
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: 50,
    height: 30,
  },
});
