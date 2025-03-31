import React, { useState, useMemo, FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Instrument } from "@/src/types/instruments";
import { NumberFormatType, refactorNumber } from "@/src/utils/formatUtils";
import { styles } from "./InstrumentItem.styles";
import OrderModal from "../orderModal/OrderModal";
import { Colors } from "@/src/constants/Colors";
import { LAST_PRICE_TEXT, RETURN_TEXT } from "./constants";

interface ActiveItemProps {
  item: Instrument;
};

const InstrumentItem: FC<ActiveItemProps> = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const lastPriceFormatted = useMemo(
    () => refactorNumber(item?.last_price, NumberFormatType.MONEY),
    [item?.last_price]
  );

  const returnFormatted = useMemo(() => {
    const returnValue = ((item.last_price - item.close_price) / item.close_price) * 100;
    return refactorNumber(returnValue, NumberFormatType.PERCENTAGE);
  }, [item.last_price, item.close_price]);

  const returnColor = item.last_price >= item.close_price ? Colors.green : Colors.red;

  return (
    <TouchableOpacity
    style={styles.item}
      onPress={() => setModalVisible(true)}
      testID={`instrument-item-${item.id}`}
    >
      <View style={styles.header}>
        <Text style={styles.ticker}>{item.ticker}</Text>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
      </View>

      <View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>{LAST_PRICE_TEXT}</Text>
          <Text style={styles.value}>{lastPriceFormatted}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>{RETURN_TEXT}</Text>
          <Text style={[styles.value, { color: returnColor }]}>
            {returnFormatted}
          </Text>
        </View>
      </View>

      {modalVisible && (
        <OrderModal
          visible={modalVisible}
          onClose={setModalVisible}
          instrument={item}
        />
      )}
    </TouchableOpacity>
  );
};

export default InstrumentItem;