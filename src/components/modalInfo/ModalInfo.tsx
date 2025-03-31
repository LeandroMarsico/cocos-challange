import { Modal, Text, View } from "react-native";
import Button from "../button/Button";
import { styles } from "./ModalInfo.styles";
import { FC } from "react";
import { CONFIRM } from "./constants";

export interface FeedbackModalProps {
  visible: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

export const ModalInfo: FC<FeedbackModalProps> = ({
  visible,
  title,
  message,
  onClose,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {title && <Text style={styles.modalHeader}>{title}</Text>}
          <Text style={styles.message}>{message}</Text>
          <Button label={CONFIRM} onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};
