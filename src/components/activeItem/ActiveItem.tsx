import React, { FC, useMemo } from "react";
import { View, Text } from "react-native";
import { styles } from "./Active.styles";
import { NumberFormatType, refactorNumber } from "@/src/utils/formatUtils";
import { Active } from "@/src/types/active";
import { LAST_PRICE_TEXT, RETURN_TEXT, TYPE_TEXT } from "./constants";
import { Colors } from "@/src/constants/Colors";

interface ActiveItemProps {
  item: Active;
};

const ActiveItem: FC<ActiveItemProps> = ({ item }) => {
  const lastPriceFormatted = useMemo(
    () => refactorNumber(item?.last_price, NumberFormatType.MONEY),
    [item?.last_price]
  );
  const returnFormatted = useMemo(
    () => refactorNumber(item.close_price, NumberFormatType.PERCENTAGE),
    [item.close_price]
  );
  const returnColor = item.close_price >= 0 ? Colors.green : Colors.red;
  return (
    <View style={styles.container} testID="active-item-container">
      <View style={styles.header} testID="header">
        <Text style={styles.ticker} testID="ticker">
          {item.ticker}
        </Text>
        <Text style={styles.type} testID="type">
          {TYPE_TEXT}: {item.type}
        </Text>
      </View>
      <Text style={styles.name} testID="name">
        {item.name}
      </Text>

      <View style={styles.row} testID="last-price-row">
        <Text style={styles.label} testID="last-price-label">
          {LAST_PRICE_TEXT}:
        </Text>
        <Text style={styles.value} testID="last-price-value">
          {lastPriceFormatted}
        </Text>
      </View>

      <View style={styles.row} testID="return-row">
        <Text style={styles.label} testID="return-label">
          {RETURN_TEXT}:
        </Text>
        <Text
          style={[styles.return, { color: returnColor }]}
          testID="return-value"
        >
          {returnFormatted}
        </Text>
      </View>
    </View>
  );
};

export default ActiveItem;
