import {View, Text} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <View className="flex relative h-[8vh] bg-white flex-row w-full items-center      ">
      <View className="absolute left-5 bg-white  border border-gray-200/90 rounded-full ">
        <Icons name="keyboard-arrow-left" size={30} color="black" />
      </View>
      <Text className="mx-auto text-2xl font-medium text-black/80">Search</Text>
    </View>
  );
};

export default Header;
