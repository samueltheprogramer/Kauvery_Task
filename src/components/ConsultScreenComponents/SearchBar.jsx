import {View, Text, TextInput} from 'react-native';
import React from 'react';
import SearchIcon from '../../assets/images/icons=search.svg';

const SearchBar = () => {
  return (
    <View className="px-4 my-2">
      <View className="relative">
        <TextInput
          placeholderTextColor="#6b7280"
          placeholder="Search for doctors and specialties"
          className="bg-gray-200/50  text-gray-500 p-[6px] px-4 rounded-full"
        />
        <View className="absolute  right-5 top-[6px]">
          <SearchIcon />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
