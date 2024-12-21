import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface CircleProgressProps {
  size: number;
  percentage: number;
  color: string;
  style?: ViewStyle;
}

export const CircleProgress: React.FC<CircleProgressProps> = ({
  size,
  percentage,
  color,
  style,
}) => {
  const strokeWidth = size * 0.2;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = ((100 - percentage) / 100) * circumference;

  return (
    <View style={[styles.container, style, { width: size, height: size }]}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius - strokeWidth}
          stroke="#E6E6E6"
          strokeWidth={strokeWidth}
          fill={color}

        />
        {/* Progress Circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={progress}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});