import React, { FC, useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./Loading.styles";
import { TEXT_LOADER } from "./constants";
import { Colors } from "@/src/constants/Colors";

interface LoadingProps {
  showLoader: boolean;
}

const Loading: FC<LoadingProps> = ({ showLoader = false }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (showLoader) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.loop(
          Animated.sequence([
            Animated.timing(rotateAnim, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
              toValue: 1.2,
              duration: 500,
              useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true,
            }),
          ])
        ),
      ]).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [showLoader]);

  if (!showLoader) return null;

  const rotateInterpolation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.backgroundOverlay} />
      <Animated.View
        style={[
          styles.iconContainer,
          {
            transform: [{ rotate: rotateInterpolation }, { scale: scaleAnim }],
          },
        ]}
      >
        <MaterialIcons
          name="attach-money"
          size={50}
          color={Colors.success}
          style={styles.moneyIcon}
        />
      </Animated.View>
      <Animated.Text style={[styles.loadingText, { opacity: fadeAnim }]}>
        {TEXT_LOADER}
      </Animated.Text>
    </Animated.View>
  );
};

export default Loading;
