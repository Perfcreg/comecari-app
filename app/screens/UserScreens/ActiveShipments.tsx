import React, { FC, useEffect, useState, useCallback } from "react"
import { ViewStyle, FlatList, RefreshControl } from "react-native"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { useStores } from "../../models"
import { colors, spacing } from "../../theme"
import { Screen } from "../../components/Screen"
import { Header } from "app/components"
import { ShipmentCard } from "../../components/ShipmentCard"
import load from "../../utils/Data/loads.json"
import { Trucks } from "../../utils/trucks"

export const ActiveShipments: FC<DemoTabScreenProps<"ActiveShipments">> = function ActiveShipments(
  _props,
) {
  const { navigation }: any = _props
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [shipments, setShipments] = useState([])

  const { userStore } = useStores()
  const colorScheme = userStore.mode
  const isDarkMode = colorScheme === 'dark'

  const fetchShipments = async (pageNum: number, refresh = false) => {
    try {
      setLoading(true)
      // Here you would typically filter for only active shipments
      if (load && Trucks) {
        const activeShipments = load.filter(shipment => shipment.status === "In Transit")
        const updatedData = activeShipments.map((asset) => {
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
        setShipments(updatedData);
      }
    } catch (error) {
      console.error("Error fetching shipments:", error)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchShipments(1, true)
  }, [])

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setPage(1)
    fetchShipments(1, true)
  }, [])

  const loadMore = () => {
    if (!loading) {
      const nextPage = page + 1
      setPage(nextPage)
      fetchShipments(nextPage)
    }
  }

  const renderItem = ({item}) => (
    <>
      <ShipmentCard data={item}    />
    </>
   
  )

  return (
    <Screen 
      preset="fixed"
      statusBarStyle={isDarkMode ? "light" : "dark"}
      backgroundColor={isDarkMode ? colors.darkBackground : colors.background}
    >
      <Header 
        title="Active Shipments"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />
      <FlatList
        data={shipments}
        renderItem={renderItem}
        keyExtractor={(item) => item?.index}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        style={$container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={isDarkMode ? colors.white : colors.blackColor}
          />
        }
        contentContainerStyle={{
          padding: spacing.medium,
          paddingBottom: spacing.extraLarge,
          // marginTop: spacing.medium,
        }}
      />
    </Screen>
  )
}

const $container: ViewStyle = {
  marginBottom: spacing.medium,
  // backgroundColor: colors.transparent
}