import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import IconFea from 'react-native-vector-icons/Feather';
import IconFoun from 'react-native-vector-icons/Foundation';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';

const TabView = () => {
  const [tabOne, setTabOne] = useState(true);
  const [tabTwo, setTabTwo] = useState(false);
  const [tabThree, setTabThree] = useState(false);
  const [tabFour, setTabFour] = useState(false);

  const onTabOnePress = () => {
    setTabOne(true);
    setTabTwo(false);
    setTabThree(false);
    setTabFour(false);
  };
  const onTabTwoPress = () => {
    setTabOne(false);
    setTabTwo(true);
    setTabThree(false);
    setTabFour(false);
  };
  const onTabThreePress = () => {
    setTabOne(false);
    setTabTwo(false);
    setTabThree(true);
    setTabFour(false);
  };
  const onTabFourPress = () => {
    setTabOne(false);
    setTabTwo(false);
    setTabThree(false);
    setTabFour(true);
  };

  return (
    <View className="flex flex-col w-full bg-white space-y-5   items-center  h-[13vh]  ">
      <View className="  flex flex-row w-full justify-center space-x-1 ">
        <Pressable
          onPress={onTabOnePress}
          className={`flex ${
            tabOne ? 'border-blue-500' : 'border-white'
          } border-t-4  pt-5 w-1/5  justify-center items-center space-y-1`}>
          <View>
            <IconFea
              name="home"
              size={28}
              color={tabOne ? '#3b82f6' : '#374151'}
            />
          </View>
          <Text
            className={`${
              tabOne ? 'text-blue-500' : 'text-gray-700'
            }  font-medium `}>
            Home
          </Text>
        </Pressable>
        <Pressable
          onPress={onTabTwoPress}
          className={`flex ${
            tabTwo ? 'border-blue-500' : 'border-white'
          } border-t-4  pt-5 w-1/5 justify-center items-center space-y-1`}>
          <View>
            <IconFoun
              name="play-video"
              size={28}
              color={tabTwo ? '#3b82f6' : '#374151'}
            />
          </View>
          <Text
            className={`${
              tabTwo ? 'text-blue-500' : 'text-gray-700'
            } font-medium  `}>
            Live CME
          </Text>
        </Pressable>
        <View className="flex mt-3 rounded-full  w-16 mx-1 h-16 bg-blue-800 justify-center items-center space-y-1">
          <View>
            <IconFA5 name="search-plus" color="white" size={28} />
          </View>
        </View>
        <Pressable
          onPress={onTabThreePress}
          className={`flex ${
            tabThree ? 'border-blue-500' : 'border-white'
          } border-t-4  pt-5 w-1/5 justify-center items-center space-y-1`}>
          <View>
            <IconAnt
              name="book"
              size={28}
              color={tabThree ? '#3b82f6' : '#374151'}
            />
          </View>
          <Text
            className={`${
              tabThree ? 'text-blue-500' : 'text-gray-700'
            } font-medium  `}>
            Courses
          </Text>
        </Pressable>
        <Pressable
          onPress={onTabFourPress}
          className={`flex ${
            tabFour ? 'border-blue-500' : 'border-white'
          } border-t-4 w-1/5  pt-5 justify-center items-center space-y-1`}>
          <View>
            <IconFea
              name="play-circle"
              size={28}
              color={tabFour ? '#3b82f6' : '#374151'}
            />
          </View>
          <Text
            className={`${
              tabFour ? 'text-blue-500' : 'text-gray-700'
            } font-medium  `}>
            Watch
          </Text>
        </Pressable>
      </View>
      <View className="w-[40%] bg-gray-400 h-[6px]  rounded-full"></View>
    </View>
  );
};

export default TabView;
