import {View, Text} from 'react-native';
import React from 'react';
import Logo from '../../assets/images/KauveryLogo.svg';
import Notification from '../../assets/images/notifications.svg';
import DownArrow from '../../assets/images/icons=cheveron_down.svg';
import Location from '../../assets/images/location_on.svg';
const Header = () => {
  return (
    <View className=" bg-white  flex flex-row w-full justify-between  items-center px-4">
      <View className="flex flex-row  space-x-[20%]">
        <View className="">
          <Logo width={70} height={70} className="absolute" />
        </View>
        <View className="flex flex-row space-x-1 justify-center items-center ">
          <View>
            <Location />
          </View>
          <Text className="font-medium text-[16px] text-black/70 ">
            Chennai
          </Text>
          <View>
            <DownArrow width={16} />
          </View>
        </View>
      </View>
      <View>
        <Notification width={26} height={26} />
      </View>
    </View>
  );
};

export default Header;
