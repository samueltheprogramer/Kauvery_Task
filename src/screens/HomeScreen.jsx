import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SubHeader from '../components/HomeScreenComponents/SubHeader';
import Bookings from '../components/HomeScreenComponents/Bookings';
import Specialties from '../components/HomeScreenComponents/Specialties';

const HomeScreen = () => {
  return (
    <View className="bg-white  flex-1">
      <ScrollView>
        <SubHeader />
        <Bookings />
        <Specialties />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
