import React, { FC } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "./Header.styles";
import { PLACEHOLDER, SEARCH } from "./constants";

interface HeaderWithSearchProps {
  title: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  onSearch?: () => void;
  showButton?: boolean;
}

export const Header: FC<HeaderWithSearchProps> = ({
  title,
  placeholder = PLACEHOLDER,
  value,
  onChangeText,
  onSearch,
  showButton = false,
}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
        {showButton && onSearch && (
          <TouchableOpacity style={styles.searchButton} onPress={onSearch}>
            <Text style={styles.searchButtonText}>{SEARCH}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
