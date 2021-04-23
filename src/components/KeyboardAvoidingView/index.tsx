import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

interface KeyboardAvoidingProps extends KeyboardAvoidingViewProps {
  children: any;
}

export function KeyboardAvoidingView({ children, ...rest }: KeyboardAvoidingProps) {
  return (
    <RNKeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      {...rest}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </RNKeyboardAvoidingView>
  );
}
