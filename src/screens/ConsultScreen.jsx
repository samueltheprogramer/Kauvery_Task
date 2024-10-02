import {View, ScrollView} from 'react-native';
import React from 'react';
import SpecialitiesForMHC from '../components/ConsultScreenComponents/SpecialitiesForMHC';
import Slider from '../components/ConsultScreenComponents/Slider';
import SearchBar from '../components/ConsultScreenComponents/SearchBar';

const Consult = () => {
  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        <SearchBar />
        <SpecialitiesForMHC />
        <Slider />
      </ScrollView>
    </View>
  );
};

export default Consult;
