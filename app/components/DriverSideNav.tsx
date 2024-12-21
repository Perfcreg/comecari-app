import React, { useRef, useState, useEffect } from "react"
import { useSharedValue, withTiming } from "react-native-reanimated"
import { DrawerLayout, DrawerState } from "react-native-gesture-handler"
import { Screen } from "."
import { isRTL } from "../i18n"
import { colors } from "../theme"
// import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import TopNav from "./TopNav"

// import Drawer from './Drawer' // Make sure to import the custom sidebar from the correct path
import { Platform, Dimensions, ViewStyle } from "react-native"
import DriverDrawer from "./DriverDrawer"

export const DriverSideNav=(props) => {
    const { children } = props

    const [open, setOpen] = useState(false)
    const timeout = useRef<ReturnType<typeof setTimeout>>()
    const drawerRef = useRef<DrawerLayout>()
    const progress = useSharedValue(0)

const toggleDrawer = () => {
  if (!open) {
    setOpen(true)
    drawerRef.current?.openDrawer({ speed: 2 })
  } else {
    setOpen(false)
    drawerRef.current?.closeDrawer({ speed: 2 })
  }
}

useEffect(() => {
  return () => timeout.current && clearTimeout(timeout.current)
}, [])

// const $drawerInsets = useSafeAreaInsetsStyle(["top"])

return (
  <DrawerLayout
    ref={drawerRef}
    drawerWidth={Platform.select({ default: 326, web: Dimensions.get("window").width * 0.3 })}
    drawerType={"slide"}
    drawerPosition={isRTL ? "right" : "left"}
    overlayColor={open ? colors.palette.overlay20 : "transparent"}
    onDrawerSlide={(drawerProgress) => {
      progress.value = open ? 1 - drawerProgress : drawerProgress
    }}
    onDrawerStateChanged={(newState: DrawerState, drawerWillShow: boolean) => {
      if (newState === "Settling") {
        progress.value = withTiming(drawerWillShow ? 1 : 0, {
          duration: 250,
        })
        setOpen(drawerWillShow)
      }
    }}
    renderNavigationView={() => (
      <DriverDrawer navigation={props.navigation}/>
    )}
  >
    <Screen 
      preset="fixed" 
      safeAreaEdges={["top"]} 
      contentContainerStyle={$screenContainer}
      backgroundColor={props.mode}
      >
      <TopNav toggleDrawer={toggleDrawer} open={open} progress={progress} />
      {children}
    </Screen>
 
  </DrawerLayout>
)
}

// style={{
//   ...ROOT,
//   backgroundColor: mode === "light" ? colors.darkBackground : colors.background,
// }}
// preset="scroll"
// statusBarStyle={mode == "light" ? "light" : "dark"}


const $screenContainer: ViewStyle = {
  // flex: 1,
  // backgroundColor: colors.white,
}