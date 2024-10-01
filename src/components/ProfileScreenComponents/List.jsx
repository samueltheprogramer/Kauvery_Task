import {View, Text, Image} from 'react-native';
import React from 'react';

import arrow from '../../assets/images/arrow.png';
import condo from '../../assets/images/condo.png';

import Wallet from '../../assets/images/account_balance_wallet.svg';
import Support_agent from '../../assets/images/support_agent.svg';
import Policy from '../../assets/images/policy.svg';
import Gavel from '../../assets/images/gavel.svg';
import Logout from '../../assets/images/logout.svg';

const List = () => {
  return (
    <View className="p-5 bg-white  flex flex-1 flex-col gap-3">
      <View className=" flex flex-1 gap-2 rounded-lg  shadow shadow-black/50 border border-gray-200  bg-white    p-3 ">
        <Text className="text-[17.5px] font-medium text-black/80">Payment</Text>
        <View className="flex flex-row justify-between">
          <View className="flex flex-row gap-2 items-center">
            <View>
              <Wallet />
            </View>
            <Text className="text-[15px] font-[500] text-gray-800">
              Payment history
            </Text>
          </View>
          <Image className="w-3 h-3" source={arrow} />
        </View>
      </View>
      <View className=" flex flex-1 gap-2 justify-center text-center shadow shadow-black/50 border border-gray-200  bg-white  rounded-lg   p-3 ">
        <Text className="text-[17.5px]  font-medium text-black/80">
          Support
        </Text>
        <View className="flex flex-row justify-between">
          <View className="flex flex-row gap-2 items-center">
            <View>
              <Support_agent />
            </View>
            <Text className="text-[15px] font-medium text-gray-800">
              Customer support
            </Text>
          </View>
          <Image className="w-3 h-3" source={arrow} />
        </View>
      </View>
      <View className=" flex flex-1 gap-2 shadow shadow-black/50 border border-gray-200  bg-white  rounded-lg   p-3 ">
        <Text className="text-[17.5px] font-medium text-black/80">About</Text>
        <View className="flex flex-row justify-between">
          <View className="flex flex-row gap-2 items-center">
            <Image className="w-3 h-3" source={condo} />
            <Text className="text-[15px] font-medium text-gray-800">
              About Kauvery
            </Text>
          </View>
          <Image className="w-3 h-3" source={arrow} />
        </View>
      </View>
      <View className=" flex-col justify-center  flex flex-1  h-full p-5 bg-white  divide-y-[1px]  divide-gray-200 shadow shadow-black/50 border border-gray-200   rounded-lg    ">
        <View className="flex flex-1 gap-2">
          <Text className="text-[17.5px] pb-2 font-medium text-black/80">
            Terms and policy
          </Text>

          <View className="flex  flex-row pb-4  items-center justify-between">
            <View className="flex flex-row  space-x-2  justify-center  items-center">
              <View className="">
                <Policy />
              </View>
              <Text className="text-[15px]  font-medium text-gray-800">
                Privacy policy
              </Text>
            </View>
            <Image className="w-3 h-3" source={arrow} />
          </View>
        </View>
        <View className="flex flex-row  pt-4 items-center  justify-between ">
          <View className="flex space-x-2 flex-row justify-center items-center">
            <View>
              <Gavel />
            </View>
            <Text className="text-[15px] font-medium text-gray-800">
              Terms and conditions
            </Text>
          </View>
          <Image className="w-3 h-3" source={arrow} />
        </View>
      </View>
      <View className="flex flex-1 gap-2 shadow shadow-black/50 border border-gray-200  bg-white rounded-lg   p-3 ">
        <View className="flex flex-row justify-between">
          <View className="flex flex-row gap-2 items-center">
            <View>
              <Logout />
            </View>
            <Text className="text-[15px] font-medium text-gray-800">
              Sign out
            </Text>
          </View>
          <Image className="w-3 h-3" source={arrow} />
        </View>
      </View>
    </View>
  );
};

export default List;
