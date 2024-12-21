import { TextStyle, View, ViewStyle, Image } from 'react-native'
import React from 'react'
import { useStores } from 'app/models'
import { colors, spacing } from 'app/theme'
import { CircleProgress } from './CircleProgress'
import { Text } from '@rneui/themed'


const $HisCon: ViewStyle = {
    flex: 1,
    backgroundColor: colors.lightGrey,
    borderRadius: 27,
    marginBottom: spacing.medium,
}

const $text: TextStyle = {
    marginLeft: spacing.medium
}
export default function ShipmentList({data}) {
    console.log(data)
    const { userStore } = useStores()
    const colorScheme = userStore.mode
    const isDarkMode = colorScheme === 'dark';
    return (
        <View
            style={[
                $HisCon,
                { backgroundColor: isDarkMode ? colors.lightBlue : colors.white },
            ]}
        >
            <View style={{
                // alignItems: "center",
                flexDirection: "row",
                padding: spacing.medium,
                justifyContent: 'space-between'
            }}>

                <View style={$text}>
                    <Text h4 h4Style={{
                        fontSize: 18,
                        fontWeight: '600'
                    }}>
                        #{data?.shipmentNumber}
                    </Text>
                    <Text h4 h4Style={{
                        fontSize: 12,
                        fontWeight: '500',
                        color: colors.greyColor,
                        marginTop: spacing.medium
                    }}>
                        Status
                    </Text>
                    <View style={{

                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                        paddingVertical: spacing.small
                    }}>
                        <CircleProgress color={colors.blackColor} size={25} percentage={50} />
                        <Text style={{
                            color: colors.blackColor,
                            fontSize: 16,
                            left: 10

                        }}>In Transit</Text>
                    </View>
                </View>
                <Image source={data.truckImage} resizeMode="contain" style={{
                    width: 100,
                    height: 100,
                }} />
            </View>
        </View>
    )
}