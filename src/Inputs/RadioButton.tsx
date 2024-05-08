import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { blueBtn } from "../Constants";

interface RadioButtonProps {
  selectedValue: string | null;
  onSelect: (value: string) => void;
  label1: string;
  label2: string;
  Label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  selectedValue,
  onSelect,
  label1,
  label2,
  Label,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{Label}</Text>
      <TouchableOpacity
        style={[
          styles.button,
          selectedValue === label1.toLowerCase() && styles.selectedButton,
        ]}
        onPress={() => onSelect(label1.toLowerCase())}
      >
        <Text
          style={[
            styles.buttonText,
            selectedValue === label1.toLowerCase() && styles.selectedText,
          ]}
        >
          {label1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedValue === label2.toLowerCase() && styles.selectedButton,
        ]}
        onPress={() => onSelect(label2.toLowerCase())}
      >
        <Text
          style={[
            styles.buttonText,
            selectedValue === label2.toLowerCase() && styles.selectedText,
          ]}
        >
          {label2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#ddd",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black", // Default color
  },
  selectedButton: {
    backgroundColor: blueBtn,
  },
  selectedText: {
    color: "white",
  },
});

export default RadioButton;
