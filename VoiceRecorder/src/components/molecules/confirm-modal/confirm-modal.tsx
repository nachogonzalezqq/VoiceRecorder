import { Button } from '@react-native-material/core';
import React from 'react';
import { View, Text } from 'react-native';
import { ConfirmModalProps } from '../../../types/types';
import styles from './styles';

const ConfirmModal = ({onConfirm, onCancel}: ConfirmModalProps) => {
return (
<View style={styles.modalContainer}>
  <View style={styles.modal}>
    <Text style={styles.modalMessage}>Are you sure?</Text>
    <View style={styles.modalActions}>
      <Button title="Cancel" onPress={onCancel} color="#D2BEBF"/>
      <Button title="Confirm" onPress={onConfirm} color="#D2BEBF"/>
    </View>
  </View>
</View>
)
}

export default ConfirmModal;