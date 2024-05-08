import React from "react";
import { Text, View, StyleProp, ViewStyle, TextStyle } from "react-native";

interface DisplayTextProps {
  label: string;
  value: string;
  style?: StyleProp<ViewStyle>; // Style prop for the entire component
}

const DisplayText: React.FC<DisplayTextProps> = ({ label, value, style }) => {
  return (
    <View style={[{ marginBottom: 5 }, style]}>
      <Text style={{ fontWeight: "bold", fontSize: 16, color: "grey" }}>
        {label}
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{value}</Text>
    </View>
  );
};

export default DisplayText;
