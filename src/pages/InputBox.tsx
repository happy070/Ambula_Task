import React, { useState, useRef, forwardRef } from "react";
import { TextInput, StyleSheet, ViewStyle } from "react-native";
import { blueBtn } from "../Constants";

interface InputBoxProps {
  maxLength: number;
  width: number;
  height: number;
  focusNext?: () => void;
}

const InputBox: React.ForwardRefRenderFunction<TextInput, InputBoxProps> = (
  { maxLength, width, height, focusNext },
  ref
) => {
  const [selected, setSelected] = useState(false);

  const handleFocus = () => {
    setSelected(true);
  };

  const handleBlur = () => {
    setSelected(false);
  };

  const handleTextChange = (text: string) => {
    if (text.length === maxLength && focusNext) {
      focusNext();
    }
  };

  const selectedBorderStyle: ViewStyle = {
    width: width,
    height: height,
    borderRadius: 5,
    margin: 5,
    borderWidth: 2,
    borderColor: blueBtn,
    borderStyle: "solid",
  };

  const unselectedBorderStyle: ViewStyle = {
    width: width,
    height: height,
    borderRadius: 5,
    margin: 5,
    borderBottomWidth: 1,
    borderColor: "black",
    borderStyle: "dashed",
  };

  const inputBorderStyle = selected
    ? selectedBorderStyle
    : unselectedBorderStyle;

  return (
    <TextInput
      ref={ref}
      style={[styles.inputBox, inputBorderStyle]}
      maxLength={maxLength}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChangeText={handleTextChange}
      keyboardType="numeric"
      onSubmitEditing={() => {
        if (focusNext) {
          focusNext();
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  inputBox: {
    textAlign: "center",
    justifyContent: "center",
  },
});

export default forwardRef(InputBox);
