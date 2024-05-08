import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";

interface BtnProps {
  bgColor: string;
  btnLabel: string;
  textColor: string;
  fontSize?: number; // Add a new prop for font size
  Press: () => void;
  style?: StyleProp<ViewStyle>;
}

const Btn: React.FC<BtnProps> = ({
  bgColor,
  btnLabel,
  textColor,
  fontSize = 25, // Default font size set to 25
  style,
  Press,
}) => {
  return (
    <TouchableOpacity
      onPress={Press}
      style={[
        {
          backgroundColor: bgColor,
          borderRadius: 100,
          alignItems: "center",
          width: 250,
          paddingVertical: 5,
          marginVertical: 5,
        },
        style,
      ]}
    >
      <Text
        style={{ color: textColor, fontSize: fontSize, fontWeight: "bold" }}
      >
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Btn;
