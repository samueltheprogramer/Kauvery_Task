import {View, Text, Pressable, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import Location from '../../assets/images/location.svg';
import GMIcon from '../../assets/images/general medicine.svg';
import {
  specialtiesData1,
  specialtiesData2,
  specialtiesData3,
} from '../../variables';
import {scale, verticalScale} from 'react-native-size-matters';
import ReactNativeModal from 'react-native-modal';

const SpecialtiesForMHC = () => {
  const [tabOne, setTabOne] = useState(true);
  const [tabTwo, setTabTwo] = useState(false);
  const [tabThree, setTabThree] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onPressTabOne = () => {
    setTabOne(true);
    setTabTwo(false);
    setTabThree(false);
    showModal();
  };
  const onPressTabTwo = () => {
    setTabOne(false);
    setTabTwo(true);
    setTabThree(false);
    showModal();
  };
  const onPressTabThree = () => {
    setTabOne(false);
    setTabTwo(false);
    setTabThree(true);
    showModal();
  };

  const showModal = () => {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 1000);
  };
  const hiddeModal = () => {
    setIsVisible(false);
  };

  return (
    <View className="flex-1  pt-4 pb-8 bg-white ">
      <View className="flex  pb-4 flex-row  shadow-black  space-x-1 items-center shadow-lg bg-white justify-start ">
        <View className="flex w-full flex-row border-b-[2px] pl-3 border-gray-200  justify-around bg-white">
          <View className=" pl-1  ">
            <Location />
          </View>
          <Pressable className="w-[30%] " onPress={onPressTabOne}>
            <Text
              className={`${
                tabOne
                  ? 'border-[#972168] text-[#972168]'
                  : 'border-white text-black/70'
              }   text-[17px] border-b-2 pb-2  tracking-wider  text-center`}>
              Alwarprt
            </Text>
          </Pressable>
          <Pressable className="w-[30%]" onPress={onPressTabTwo}>
            <Text
              className={`${
                tabTwo
                  ? 'border-[#972168] text-[#972168]'
                  : 'border-white text-black/70'
              }   text-[17px] border-b-2 pb-2  tracking-wider  text-center`}>
              Radial Road
            </Text>
          </Pressable>
          <Pressable className="w-[30%]" onPress={onPressTabThree}>
            <Text
              className={`${
                tabThree
                  ? 'border-[#972168] text-[#972168]'
                  : 'border-white text-black/70'
              }   text-[17px] border-b-2 pb-2  tracking-wider  text-center`}>
              Vadapalani
            </Text>
          </Pressable>
        </View>
      </View>

      <View className="flex flex-row px-4 justify-between items-center mb-4">
        <Text className="font-medium text-black/70 tracking-wider text-xl">
          Specialties
        </Text>
        <Text className="text-[#972168] text-lg font-medium">View all</Text>
      </View>

      <View className="flex-1 px-4 flex-row  flex-wrap bg-white  ">
        {tabOne &&
          specialtiesData1.map(item => (
            <View
              style={{height: verticalScale(80)}}
              key={item.id}
              className="w-[47%]  space-y-1  bg-white shadow border border-gray-200 shadow-black/50 p-4 m-1 rounded-lg">
              <View className="flex flex-row  justify-between">
                <Text className="font-medium mb-2 w-24  text-black/70">
                  {item.title}
                </Text>
                <View>
                  {item.id === 1 ? (
                    <GMIcon />
                  ) : item.id === 2 ? (
                    <GMIcon />
                  ) : item.id === 3 ? (
                    <GMIcon />
                  ) : item.id === 4 ? (
                    <GMIcon />
                  ) : (
                    ''
                  )}
                </View>
              </View>
              <Text className="text-gray-500 text-xs  w-32">
                {item.description}
              </Text>
            </View>
          ))}
        {tabTwo &&
          specialtiesData2.map(item => (
            <View
              style={{height: verticalScale(80)}}
              key={item.id}
              className="w-[47%] space-y-1  bg-white shadow border border-gray-200 shadow-black/50 p-4 m-1 rounded-lg">
              <View className="flex flex-row  justify-between">
                <Text className="font-medium mb-2 w-24  text-black/70">
                  {item.title}
                </Text>
                <View>
                  {item.id === 1 ? (
                    <GMIcon />
                  ) : item.id === 2 ? (
                    <GMIcon />
                  ) : item.id === 3 ? (
                    <GMIcon />
                  ) : item.id === 4 ? (
                    <GMIcon />
                  ) : (
                    ''
                  )}
                </View>
              </View>
              <Text className="text-gray-500 text-xs  w-32">
                {item.description}
              </Text>
            </View>
          ))}
        {tabThree &&
          specialtiesData3.map(item => (
            <View
              style={{height: verticalScale(80)}}
              key={item.id}
              className="w-[47%]  space-y-1  bg-white border border-gray-200 shadow  shadow-black/50 p-4 m-1 rounded-lg">
              <View className="flex flex-row  justify-between">
                <Text className="font-medium mb-2 w-24  text-black/70">
                  {item.title}
                </Text>
                <View>
                  {item.id === 1 ? (
                    <GMIcon />
                  ) : item.id === 2 ? (
                    <GMIcon />
                  ) : item.id === 3 ? (
                    <GMIcon />
                  ) : item.id === 4 ? (
                    <GMIcon />
                  ) : null}
                </View>
              </View>
              <Text className="text-gray-500 text-xs  w-32">
                {item.description}
              </Text>
            </View>
          ))}
      </View>
      <ReactNativeModal
        animationIn="fadeInUp"
        animationOut="fadeOut"
        animationInTiming={1}
        className="flex justify-center items-center"
        isVisible={isVisible}
        onBackdropPress={hiddeModal}>
        <View className="bg-white flex rounded-lg   justify-end items-center">
          <ActivityIndicator size={30} color="#972168" className="p-3" />
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default SpecialtiesForMHC;
