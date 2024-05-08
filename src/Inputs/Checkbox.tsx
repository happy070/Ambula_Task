import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { blueBtn } from "../Constants";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <TouchableOpacity onPress={onChange}>
      <Ionicons
        name={checked ? "checkbox-outline" : "square-outline"}
        size={25}
        color={checked ? blueBtn : "grey"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    borderColor: "grey",
    padding: 0,
  },
});

export default Checkbox;
