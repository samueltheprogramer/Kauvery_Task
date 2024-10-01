import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {verticalScale} from 'react-native-size-matters';
import DownArrow from '../../assets/images/icons=cheveron_down.svg';
import Location from '../../assets/images/location_on.svg';

const HeaderForMHC = () => {
  return (
    <View
      style={{height: verticalScale(50)}}
      className="bg-white  px-4  w-full flex flex-row justify-between items-center">
      <Text className="text-xl text-black/70 tracking-wider font-medium">
        Book consultaion
      </Text>
      <View className="flex flex-row space-x-1 justify-center items-center ">
        <View>
          <Location />
        </View>
        <Text className="font-medium text-[16px] text-black/70 ">Chennai</Text>
        <View>
          <DownArrow width={16} />
        </View>
      </View>
     
    </View>
  );
};

export default HeaderForMHC;
