import {View, Text} from 'react-native';
import React from 'react';
import PopUpCard from '../components/ConsultScreenComponents/PopUpCard';
import Header from '../components/ConsultScreenComponents/Header';
import TabView from '../components/ConsultScreenComponents/TabView';

const Consult = () => {
  return (
    <View className="w-full h-full bg-gray-200 justify-around items-center">
      <Header />
      <PopUpCard />
      <TabView />
    </View>
  );
};

export default Consult;
