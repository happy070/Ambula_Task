import React from "react";
import {
  TextInput,
  TextInputProps,
  StyleProp,
  TextStyle,
  KeyboardTypeOptions,
} from "react-native";
import { blueBtn } from "../Constants";

interface FieldProps extends TextInputProps {
  style?: StyleProp<TextStyle>;
  keyboardType?: KeyboardTypeOptions; // Add keyboardType prop
}

const Field: React.FC<FieldProps> = (props) => {
  return (
    <TextInput
      {...props}
      style={[
        {
          borderRadius: 100,
          color: blueBtn,
          paddingHorizontal: 10,
          width: "60%",
          height: 50,
          backgroundColor: "rgb(220,220,220)",
          marginBottom: 15,
        },
        props.style,
      ]}
      placeholderTextColor={blueBtn}
      keyboardType={props.keyboardType}
    />
  );
};

export default Field;
