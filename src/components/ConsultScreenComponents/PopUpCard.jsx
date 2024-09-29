import {View, Text, Button} from 'react-native';
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
    <View className="flex bg-white  w-full h-full justify-center items-center">
      <Button title="Show Card" onPress={openModal} />
      <ReactNativeModal
        isVisible={isVisible}
        onBackdropPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection="down"
        animationIn="slideInUp"
        animationOut="slideOutDown"
        className=" m-0 p-0 flex justify-end">
        <View className="bg-white rounded-t-3xl  w-full h-[50%] p-5  shadow-lg">
          <Text className="text-lg font-semibold text-center mb-4">
            Popup Card content
          </Text>
          <Button className="" title="Close" onPress={closeModal} />
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default PopUpCard;
