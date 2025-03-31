import React, { FC, useEffect, useRef } from "react";
import { Text, Animated } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { TITILE } from "./constants";
import { styles } from "./EmptyState.styles";
import { Colors } from "@/src/constants/Colors";

interface EmptyStateProps {
  message?: string;
}

const EmptyState: FC<EmptyStateProps> = ({ message = TITILE }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.loop(
        Animated.sequence([
          Animated.timing(floatAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(floatAnim, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
          }),
        ])
      ),
    ]).start();
  }, []);

  const floatInterpolation = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -15],
  });

  return (
    <Animated.View
      testID="empty-state-container"
      style={[styles.container, { opacity: fadeAnim }]}
    >
      <Animated.View
        testID="empty-state-icon-container"
        style={{ transform: [{ translateY: floatInterpolation }] }}
      >
        <MaterialIcons
          testID="empty-state-icon"
          name="money-off-csred"
          size={80}
          color={Colors.iconEmpty}
          style={styles.icon}
        />
      </Animated.View>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

export default EmptyState;
