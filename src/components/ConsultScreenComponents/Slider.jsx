import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';

const data = [
  {
    text1: 'Dr. Meena Umachander',
    text2: 'Obstetrics And Gynaecology',
    para: 'This doctor is currently not available for consultations. please request to make appointment',
    id: 1,
  },
  {
    text1: 'Dr. Priya Philip',
    text2: 'Readiation Oncology',
    para: 'This doctor is currently not available for consultations. please request to make appointment',
    id: 2,
  },
  {
    text1: 'Dr. Sham S',
    text2: 'Rheumatology',
    para: 'This doctor is currently not available for consultations. please request to make appointment',
    id: 3,
  },
  {
    text1: 'Dr. Sharat Kumar',
    text2: 'Plastic Surgery',
    para: 'This doctor is currently not available for consultations. please request to make appointment',
    id: 4,
  },
  {
    text1: 'Dr. Sathish Manivel',
    text2: 'Plastic Surgery',
    para: 'This doctor is currently not available for consultations. please request to make appointment',
    id: 5,
  },
];

const Slider = () => {
  return (
    <View className="  ">
      <View className="flex flex-row  px-5 justify-between items-center mb-4">
        <Text className="font-medium text-black/70 tracking-wider text-xl">
          Doctors
        </Text>
        <Text className="text-[#972168] text-lg font-medium">View all</Text>
      </View>
      <ScrollView
        style={{height: verticalScale(180)}}
        horizontal
        className="bg-white mx-5 flex space-x-2 flex-row ">
        {data.map(item => (
          <View
            key={item.id}
            style={{height: verticalScale(170), width: scale(300)}}
            className="  shadow-lg shadow-black/50 border border-gray-200 bg-white  rounded-xl">
            <View
              className="flex space-x-5 py-4 flex-row border-b-[1px] px-5 border-gray-300"
              key={item.text2}>
              <Image
                className="w-16 h-16"
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
                }}
              />
              <View className="flex justify-center">
                <Text className="text-[17px] text-black/70">{item.text1}</Text>
                <Text className="text-gray-600/90">{item.text2}</Text>
              </View>
            </View>
            <Text className="px-5 py-5 text-black/70">{item.para}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Slider;
