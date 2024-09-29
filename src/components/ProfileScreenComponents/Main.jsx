import {View, Text, Image} from 'react-native';
import React from 'react';
import UserIcon from '../../assets/images/profile.svg';
import MF from '../../assets/images/MF.svg';
import Flag from '../../assets/images/flag.svg';

const Main = () => {
  return (
    <View
      style={{gap: 20, paddingHorizontal: 20, paddingVertical: 30}}
      className="bg-[#fff7fc]    ">
      <View className="flex flex-row gap-3  w-full  ">
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
          }}
          width={75}
          height={75}
        />
        <View style={{gap: 5}} className="flex-1 ">
          <Text className="text-xl text-black/80 font-medium">Adam</Text>
          <Text className="text-gray-400 text-[12px]">Male</Text>
          <Text className="text-gray-600 text- text-[12px]">
            UHID: ABC1234567890
          </Text>
          <Text className="text-gray-600 text-[12px]">ABHA ID: Adam@abdm</Text>
        </View>
      </View>
      <View style={{gap: 0}} className="flex flex-row w-full justify-between ">
        <View className="bg-white w-[31%] h-[100px] gap-1  flex flex-col justify-start items-center  text-center  p-2  rounded-lg  shadow shadow-black/40">
          <View>
            <UserIcon width={25} height={25} />
          </View>
          <Text className="font-medium text-black/80 text-[14px] text-center  ">
            My account
          </Text>
        </View>
        <View className="bg-white w-[31%] gap-1  flex flex-col justify-start items-center  text-center  p-2   rounded-lg shadow shadow-black/40">
          <View>
            <MF width={25} height={25} />
          </View>
          <Text className="font-medium text-black/80 w-16 text-[14px] text-center  ">
            Manage Family
          </Text>
        </View>
        <View className="bg-white w-[31%] gap-1  flex flex-col justify-start items-center  text-center  p-1   rounded-lg shadow shadow-black/40">
          <View className="pt-1">
            <Flag width={25} height={25} />
          </View>

          <Text className="font-medium text-black/80 text-[14px] text-center  ">
            Tickets
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Main;
