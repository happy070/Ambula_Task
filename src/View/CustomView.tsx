import React from "react";
import { View, StyleSheet, Dimensions, ViewStyle } from "react-native";

interface CustomViewProps {
  widthPercentage: number;
  height: number;
  backgroundColor: string;
  borderRadius: number;
  marginVertical: number;
  justifyContent?: ViewStyle["justifyContent"];
  alignItems?: ViewStyle["alignItems"];
  style?: ViewStyle;
  children?: React.ReactNode;
}

const CustomView: React.FC<CustomViewProps> = ({
  widthPercentage,
  height,
  backgroundColor,
  borderRadius,
  marginVertical,
  justifyContent,
  alignItems,
  style,
  children,
}) => {
  const screenWidth = Dimensions.get("window").width;
  const viewWidth = screenWidth * widthPercentage;

  return (
    <View
      style={[
        styles.container,
        {
          width: viewWidth,
          height,
          backgroundColor,
          borderRadius,
          marginVertical,
          justifyContent,
          alignItems,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default CustomView;
