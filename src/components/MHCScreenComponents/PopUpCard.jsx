import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ReactNativeModal from 'react-native-modal';

const PopUpCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };
  return (
    <View>
      <Button title="Show Card" onPress={openModal} />
      <ReactNativeModal
        style={styles.modal}
        isVisible={isVisible}
        onBackdropPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection="down"
        animationIn="slideInUp"
        animationOut="slideOutDown">
        <View style={styles.modalCard}>
          <Text style={styles.modalText}>Popup Card content</Text>
          <Button className="" title="Close" onPress={closeModal} />
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default PopUpCard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  modal: {
    padding: 0,
    margin: 0,
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: 'white',
    width: '100%',
    height: '50%',
    padding: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalText: {
    width: '100%',
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});
