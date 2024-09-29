import {View, Text} from 'react-native';
import React from 'react';
import PopUpCard from '../components/ConsultScreenComponents/PopUpCard';
import Header from '../components/ConsultScreenComponents/Header';

const Consult = () => {
  return (
    <View className="w-full h-full bg-gray-200 justify-around items-center">
      <Header />
      <PopUpCard />
    </View>
  );
};

export default Consult;
