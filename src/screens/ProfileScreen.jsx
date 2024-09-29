import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Main from '../components/ProfileScreenComponents/Main';
import List from '../components/ProfileScreenComponents/List';

const ProfileScreen = () => {
  return (
    <View>
      <ScrollView>
        <Main />
        <List />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
