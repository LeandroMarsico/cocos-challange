import React, { FC, useMemo } from "react";
import { View, Text } from "react-native";
import { Portfolio } from "@/src/types/portfolio";
import { NumberFormatType, refactorNumber } from "@/src/utils/formatUtils";
import { styles } from "./PortfolioItem.styles";
import { GAIN_TEXT, PERCENTAGE, QUANTITY_TEXT, TOTAL_RETURN_TEXT } from "./constants";
import { Colors } from "@/src/constants/Colors";

interface PortfolioItemProps {
  item: Portfolio;
};

const PortfolioItem: FC<PortfolioItemProps> = ({ item }) => {
  const marketValue = useMemo(() => item?.last_price * item.quantity, [item]);
  const gain = useMemo(
    () => (item?.last_price - item.avg_cost_price) * item.quantity,
    [item]
  );
  const totalReturn = useMemo(
    () => ((gain / (item.avg_cost_price * item.quantity)) * 100).toFixed(2),
    [gain, item]
  );

  const formattedMarketValue = useMemo(
    () => refactorNumber(marketValue, NumberFormatType.MONEY),
    [marketValue]
  );
  const formattedGain = useMemo(
    () => refactorNumber(gain, NumberFormatType.MONEY),
    [gain]
  );

  const returnColorGain = gain >= 0 ? Colors.green : Colors.red;
  const returnColorTotal = parseFloat(totalReturn) >= 0 ? Colors.green : Colors.red;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.ticker}>{item.ticker}</Text>
        <Text style={styles.marketValue}>{formattedMarketValue}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>{QUANTITY_TEXT}:</Text>
        <Text style={styles.value}>{item.quantity}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>{GAIN_TEXT}:</Text>
        <Text style={[styles.gain, { color: returnColorGain}]}>
          {formattedGain}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>{TOTAL_RETURN_TEXT}:</Text>
        <Text
          style={[
            styles.totalReturn,
            { color: returnColorTotal },
          ]}
        >
          {totalReturn}{PERCENTAGE}
        </Text>
      </View>
    </View>
  );
};

export default PortfolioItem;
