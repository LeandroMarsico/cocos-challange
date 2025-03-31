import React, { FC } from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./Button.styles";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface OrderButtonProps {
  label: string;
  onPress: () => void;
  type?: ButtonType;
}

const Button: FC<OrderButtonProps> = ({
  label,
  onPress,
  type = ButtonType.PRIMARY,
}) => {
  const buttonStyle =
    type === ButtonType.SECONDARY ? styles.cancelButton : styles.submitButton;
  const buttonTextStyle =
    type === ButtonType.SECONDARY
      ? styles.cancelButtonText
      : styles.submitButtonText;

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, buttonTextStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
