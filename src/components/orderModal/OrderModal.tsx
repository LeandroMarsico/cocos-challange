import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import { useOrder } from "@/src/hooks/useOrder";
import { OrderSide, OrderStatus, OrderType } from "@/src/types/orders";
import { Instrument } from "@/src/types/instruments";
import { styles } from "./OrderModal.styles";
import Loading from "../loading/Loading";
import { ORDER_MODAL_TEXT } from "./constants";
import Button, { ButtonType } from "../button/Button";
import ToggleButtonGroup from "../toggleButtonGroup/ToggleButtonGroup";

interface OrderModalProps {
  visible: boolean;
  onClose: (value: boolean) => void;
  instrument: Instrument;
}

const OrderModal:FC <OrderModalProps> = ({ visible, onClose, instrument }) => {
  const { placeOrder, isPending, order, isSuccess, isError, error } =
    useOrder();
  const [side, setSide] = useState<OrderSide>(OrderSide.BUY);
  const [orderType, setOrderType] = useState<OrderType>(OrderType.MARKET);
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [investmentAmount, setInvestmentAmount] = useState<number | undefined>(
    undefined
  );

  const isLimitOrder = orderType === OrderType.LIMIT;
  const isBuyOrder = side === OrderSide.BUY;

  const isQuantityValid = quantity > 0;
  const isPriceValid = isLimitOrder ? price !== undefined && price > 0 : true;

  const validateOrder = () => {
    if (!isQuantityValid) {
      Alert.alert(
        ORDER_MODAL_TEXT.ERROR,
        ORDER_MODAL_TEXT.ERROR_INVALID_QUANTITY
      );
      return false;
    }
    if (!isPriceValid) {
      Alert.alert(ORDER_MODAL_TEXT.ERROR, ORDER_MODAL_TEXT.ERROR_INVALID_PRICE);
      return false;
    }
    return true;
  };

  const orderData = useMemo(
    () => ({
      instrument_id: instrument.id,
      side,
      type: orderType,
      quantity,
      price: isLimitOrder ? price : undefined,
    }),
    [instrument.id, side, orderType, quantity, price]
  );

  const handleOrderSubmission = useCallback(async () => {
    if (!validateOrder()) return;
    await placeOrder(orderData);
  }, [orderData]);

  useEffect(() => {
    if (isSuccess && order) {
      const statusMessages = {
        [OrderStatus.PENDING]: ORDER_MODAL_TEXT.STATUS_PENDING,
        [OrderStatus.FILLED]: ORDER_MODAL_TEXT.STATUS_FILLED,
        [OrderStatus.REJECTED]: ORDER_MODAL_TEXT.STATUS_REJECTED,
      };

      Alert.alert(
        ORDER_MODAL_TEXT.ORDER_SENT,
        `${ORDER_MODAL_TEXT.ORDER_ID}: ${order?.id}\n${
          ORDER_MODAL_TEXT.ORDER_STATUS
        }: ${statusMessages[order?.status] || ORDER_MODAL_TEXT.STATUS_UNKNOWN}`
      );
      onClose(false);
    }
  }, [isSuccess, isError, order, error, onClose]);

  if (isPending) {
    return <Loading showLoader={isPending} />;
  }

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>
            {ORDER_MODAL_TEXT.ORDER_FOR} {instrument.name}
          </Text>

          <Text style={styles.label}>{ORDER_MODAL_TEXT.ORDER_SIDE}:</Text>
          <ToggleButtonGroup
            options={[
              { label: ORDER_MODAL_TEXT.BUY, value: OrderSide.BUY },
              { label: ORDER_MODAL_TEXT.SELL, value: OrderSide.SELL },
            ]}
            selectedValue={side}
            onChange={setSide}
            buttonStyle={styles.sideButton}
            selectedStyle={isBuyOrder ? styles.buyButton : styles.sellButton}
          />

          <Text style={styles.label}>{ORDER_MODAL_TEXT.ORDER_TYPE}</Text>
          <ToggleButtonGroup
            options={[
              { label: ORDER_MODAL_TEXT.MARKET, value: OrderType.MARKET },
              { label: ORDER_MODAL_TEXT.LIMIT, value: OrderType.LIMIT },
            ]}
            selectedValue={orderType}
            onChange={setOrderType}
            buttonStyle={styles.orderTypeButton}
            selectedStyle={styles.selectedButton}
          />

          <Text style={styles.label}>{ORDER_MODAL_TEXT.QUANTITY}</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={String(quantity)}
            onChangeText={(text) => setQuantity(Number(text))}
          />

          {isLimitOrder && (
            <>
              <Text>{ORDER_MODAL_TEXT.PRICE}</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={price ? String(price) : ""}
                onChangeText={(text) => setPrice(Number(text))}
              />
              <Text>{ORDER_MODAL_TEXT.INVESTMENT_AMOUNT}</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={investmentAmount ? String(investmentAmount) : ""}
                onChangeText={(text) => setInvestmentAmount(Number(text))}
              />
            </>
          )}

          <Button
            label={ORDER_MODAL_TEXT.SUBMIT_ORDER}
            onPress={handleOrderSubmission}
          />

          <Button
            label={ORDER_MODAL_TEXT.CANCEL}
            onPress={() => onClose(false)}
            type={ButtonType.SECONDARY}
          />
        </View>
      </View>
    </Modal>
  );
};

export default OrderModal;
