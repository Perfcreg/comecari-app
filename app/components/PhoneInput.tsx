import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "app/theme"
import { Text } from "app/components/Text"
import PhoneInput from "react-native-phone-number-input"
import { values } from "mobx"
import { useRef } from "react"
import { useStores } from "app/models"

export interface PhoneInputBoxProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>,
  value: string,
  onChangeText: any,
  error: any

}

/**
 * Describe your component here
 */
export const PhoneInputBox = observer(function PhoneInputBox(props: PhoneInputBoxProps) {
  const { style, value, onChangeText, error } = props
  const $styles = [$container, style]
  const phoneInput = useRef<PhoneInput>(null);
  const { userStore }: any = useStores()
  const { mode } = userStore


  return (
    <View style={$styles}>
      <View style={{
        padding: 0,
        marginBottom: spacing.small,
        marginHorizontal: spacing.medium
      }}>
        <Text style={{
          fontFamily: typography.primary.medium,
          fontWeight: '500',
          fontSize: 14,
          lineHeight: 16.94,
          color: mode === "dark" ? colors.white : colors.blackColor,
          paddingBottom: spacing.extraSmall
        }}>Phone Number</Text>

        <PhoneInput
          defaultValue={value}
          defaultCode="NG"
          layout="first"
          onChangeText={onChangeText}
          placeholder="803*******"
          // withDarkTheme
          // withShadow
          // autoFocus
          disableArrowIcon
          countryPickerProps={
            {
              withAlphaFilter: true,
              withCallingCode: true,
              withCallingCodeButton: true,
              withEmoji: true,
            }
          }
          containerStyle={{
            backgroundColor: mode === "dark" ? colors.ligthNavy : colors.background,
            borderRadius: 5,
            borderWidth: 1,
            elevation: 1,
            borderColor: mode === "dark" ? colors.ligthNavy : colors.drakGrey,
            width: '100%',
            // marginHorizontal: spacing.md,
          }}
          textInputStyle={{
            marginLeft: 10,
            fontSize: 14,
            fontFamily: typography.primary.medium,
            color: colors.blackColor,
            backgroundColor: mode === "dark" ? colors.ligthNavy : colors.background,

          }}
          textContainerStyle={{
            borderRadius: 5,
            // width: '100%',
            backgroundColor: mode === "dark" ? colors.ligthNavy : colors.background,

          }}
          countryPickerButtonStyle={{
            pointerEvents: 'none',
            borderColor: mode === "dark" ? colors.ligthNavy : colors.drakGrey,
            // height: 50,
          }}


        />
        {error && <Text style={{
          fontFamily: typography.primary.normal,
          // fontWeight: '700',
          fontSize: 12,
          color: 'red'
        }}>{error}</Text>}
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
