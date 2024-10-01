import {Text, View, TextInput, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icons2 from 'react-native-vector-icons/Octicons';

const EditEducationDetails = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  return (
    <ScrollView className="flex flex-col space-y-6">
      <View className="px-5 flex flex-col justify-between space-y-6">
        <View className="  bg-white w-8 h-8  border border-gray-200/90 rounded-full ">
          <Icons name="keyboard-arrow-left" size={30} color="black" />
        </View>
        <View className="space-y-1">
          <Text className="text-xl font-medium text-black ">
            Edit education details
          </Text>
          <Text className="text-gray-400">
            Fields marked <Text className="text-red-600">*</Text> are mandatory
          </Text>
        </View>
        <View className="relative">
          <Text
            className={`${
              text1 !== '' ? '-top-3 left-3 bg-white z-50 px-2' : 'top-3 left-3'
            } absolute text-[16px] font-medium text-gray-400`}>
            Degree<Text className="text-red-600">*</Text>
          </Text>
          <TextInput
            onChangeText={newText => setText1(newText)}
            className="border-2 rounded-lg px-4 text-[16px]  border-gray-300"
          />
        </View>
        <View className="relative">
          <Text
            className={`${
              text2 !== '' ? '-top-3 left-3 bg-white z-50 px-2' : 'top-3 left-3'
            } absolute text-[16px] font-medium text-gray-400`}>
            Enter institute<Text className="text-red-600">*</Text>
          </Text>
          <TextInput
            onChangeText={newText => setText2(newText)}
            className="border-2 rounded-lg px-4 text-[16px]  border-gray-300"
          />
        </View>
        <View className="relative">
          <Text
            className={`${
              text3 !== '' ? '-top-3 left-3 bg-white z-50 px-2' : 'top-3 left-3'
            } absolute text-[16px] font-medium text-gray-400`}>
            Start year<Text className="text-red-600">*</Text>
          </Text>
          <View className="absolute right-4 top-3">
            <Icons2 name="calendar" color="#9ca3af" size={25} />
          </View>
          <TextInput
            onChangeText={newText => setText3(newText)}
            className="border-2 rounded-lg px-4 text-[16px]  border-gray-300"
          />
        </View>
        <View className="relative">
          <Text
            className={`${
              text4 !== '' ? '-top-3 left-3 bg-white z-50 px-2' : 'top-3 left-3'
            } absolute text-[16px] font-medium text-gray-400`}>
            End year<Text className="text-red-600">*</Text>
          </Text>
          <View className="absolute right-4 top-3">
            <Icons2 name="calendar" color="#9ca3af" size={25} />
          </View>
          <TextInput
            onChangeText={newText => setText4(newText)}
            className="border-2 rounded-lg px-4 text-[16px]  border-gray-300"
          />
        </View>

        <View className="relative  ">
          <Text
            className={`${
              text5 !== '' ? '-top-3 left-3 bg-white z-50 px-2' : 'top-3 left-3'
            } absolute text-[16px] font-medium text-gray-400`}>
            Discription<Text className="text-red-600">*</Text>
          </Text>
          <TextInput
            onChangeText={newText => setText5(newText)}
            multiline={true}
            className=" border-2 flex-wrap rounded-lg h-40 px-4 text-[16px]  border-gray-300"
          />
        </View>
      </View>
      <Pressable className="px-4">
        <Text className="text-xl justify-start items-start w-full text-center  rounded-lg py-2 bg-gray-500 text-white">
          Update
        </Text>
      </Pressable>
      <Pressable className="px-4 ">
        <Text className="text-xl justify-start items-start w-full text-center  rounded-lg py-2 bg-white text-red-600">
          Delete information
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default EditEducationDetails;
