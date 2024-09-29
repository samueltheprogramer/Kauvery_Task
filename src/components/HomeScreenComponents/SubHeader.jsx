import {View, Text} from 'react-native';
import React from 'react';
import DownArrow from '../../assets/images/icons=cheveron_down.svg';

const SubHeader = () => {
  return (
    <View className="px-4 py-4 border-b border-gray-100">
      <View className="flex flex-row   items-center">
        <Text className="text-gray-600 text-[16px] font-medium">
          Hey <Text className="text-[#972168] ">Adam</Text>
        </Text>
        <View>
          <DownArrow width={30} height={30} />
        </View>
      </View>
      <Text className="text-[13px] text-black/70">
        Hello, Adam .What can we do for you today?
      </Text>
    </View>
  );
};

export default SubHeader;
