/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { Ref, forwardRef, useState } from "react";
import { KeyboardTypeOptions, StyleProp, ViewStyle } from "react-native";
import { observer } from "mobx-react-lite";
import { colors, spacing, typography } from "app/theme";
import { IconProps, Input, InputProps } from "@rneui/themed";
import { useStores } from "app/models"


export interface TextFieldProps extends InputProps {
  style?: StyleProp<ViewStyle>;
  onBlur?: (e: any) => void;  // Properly type onBlur
}


export const TextField = observer(
  forwardRef(function TextField(props: TextFieldProps, ref: Ref<typeof Input>) {
    const {
      style,
      value,
      onChangeText,
      placeholder,
      label,
      keyboardType,
      secureTextEntry,
      autoCapitalize,
      maxLength,
      onBlur,
      leftIcon,
      rightIcon,
      renderErrorMessage = true,
      errorMessage,
      ...rest
    } = props;
    const [isFocused, setIsFocused] = useState(false);

    const { userStore }: any = useStores()
    const { mode } = userStore

    return (
      <Input
        onFocus={() => setIsFocused(true)}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
        onBlur={onBlur}  // Handle onBlur
        label={label}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        renderErrorMessage={renderErrorMessage}
        errorMessage={errorMessage}
        inputContainerStyle={{
          backgroundColor: mode === "dark" ? colors.ligthNavy : colors.background,
          borderRadius: 5,
          borderWidth: 1,
          elevation: 1,
          borderColor: mode === "dark" ? colors.ligthNavy : colors.drakGrey,
          height: 50,
          ...(isFocused && {
            borderColor: colors.palette.drakGrey,
          }),
        }}
        labelStyle={{
          fontFamily: typography.primary.medium,
          fontWeight: '500',
          fontSize: 14,
          lineHeight: 16.94,
          color: mode === "dark" ? colors.white : colors.blackColor,
          paddingBottom: spacing.extraSmall
        }}
        inputStyle={{
          // lineHeight: 14,
          marginLeft: 10,
          fontSize: 14,
          fontFamily: typography.primary.medium,
          color: colors.blackColor,
        }}

        containerStyle={{
          marginBottom: spacing.medium
        }}

        
        {...rest}
      />
    );
  })
);