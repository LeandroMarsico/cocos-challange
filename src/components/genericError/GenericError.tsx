import React, { FC, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./GenericError.styles";
import { ERROR, TITILE, TRY_AGAIN } from "./constants";
import { Colors } from "@/src/constants/Colors";

interface ErrorProps {
  onRetry: () => void;
}

const GenericError: FC<ErrorProps> = ({ onRetry }) => {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.5);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.content}>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <MaterialIcons
            name="money-off"
            size={64}
            color={Colors.red}
            style={styles.icon}
          />
        </Animated.View>

        <Text style={styles.title}>{TITILE}</Text>
        <Text style={styles.message}>{ERROR}</Text>

        <TouchableOpacity
          style={styles.retryButton}
          onPress={onRetry}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
          <Text style={styles.buttonText}>{TRY_AGAIN}</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default GenericError;
