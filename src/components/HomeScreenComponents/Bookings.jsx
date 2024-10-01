import {View, Text} from 'react-native';
import React from 'react';
import PlusIcon from '../../assets/images/doctor-booking.svg';
import ArrowFroward from '../../assets/images/keyboard_arrow_right.svg';
import Lab from '../../assets/images/labs-biotech.svg';

const Bookings = () => {
  return (
    <View className="w-full space-y-3 flex-1  p-4 flex flex-col justify-center items-center  ">
      <View className="w-full">
        <Text className="text-lg w-full text-start font-medium text-black/70">
          Bookings
        </Text>
      </View>
      <View className="flex space-x-3 flex-row h-44   w-full items-center  justify-center">
        <View className="flex-1  h-full  space-y-2 flex-col  p-3 rounded-lg bg-white shadow border border-gray-200 shadow-black/50 justify-center ">
          <View className="icon bg-[#FDECE4] w-10 h-10 flex  justify-center items-center   rounded-full">
            <PlusIcon />
          </View>
          <View className="">
            <Text className="text-black/70  font-medium">Doctors</Text>
            <View className="flex flex-row w-full justify-between">
              <Text className="text-black/70   font-medium">appointments</Text>
              <View className="icon">
                <ArrowFroward />
              </View>
            </View>
          </View>
          <Text className="text-[13px] w-[130px] text-gray-500">
            Book for in-hospital or Video Consultation
          </Text>
        </View>
        <View className="flex-1 space-y-2 h-full flex-col  p-3 rounded-lg bg-white shadow shadow-black/50 border border-gray-200 justify-center">
          <View className="icon bg-[#FDECE4] w-10 h-10 flex  justify-center items-center   rounded-full">
            <Lab />
          </View>
          <View className="">
            <Text className="text-black/70  font-medium">Health</Text>
            <View className="flex flex-row w-full justify-between">
              <Text className="text-black/70  font-medium">Checkups</Text>
              <View className="icon">
                <ArrowFroward />
              </View>
            </View>
          </View>
          <Text className="text-[13px]w-[130px] text-gray-500 ">
            Book online to avail offers
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Bookings;
