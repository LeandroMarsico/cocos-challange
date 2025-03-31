import React from "react";
import { View, TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import { styles } from "./ToggleButtonGroup.styles";

interface ToggleButtonGroupProps<T extends string | number> {
    options: { label: string; value: T }[];
    selectedValue: T;
    onChange: (value: T) => void;
    buttonStyle?: StyleProp<ViewStyle>;
    selectedStyle?: StyleProp<ViewStyle>;
  }

const ToggleButtonGroup = <T extends string | number>({
  options,
  selectedValue,
  onChange,
  buttonStyle,
  selectedStyle,
}: ToggleButtonGroupProps<T>) => {
  return (
    <View style={styles.buttonGroup}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={[
            styles.button,
            buttonStyle,
            selectedValue === option.value && selectedStyle,
          ]}
          onPress={() => onChange(option.value)}
        >
          <Text style={styles.buttonText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ToggleButtonGroup;
