import {View, Text} from 'react-native';
import React from 'react';
import EntIcon from '../../assets/images/ent.svg';
import GMIcon from '../../assets/images/general medicine.svg';
import UrologyIcon from '../../assets/images/Frame 1171276257.svg';
import GastroIcon from '../../assets/images/Frame 1171276269.svg';
import {verticalScale} from 'react-native-size-matters';

const specialtiesData = [
  {
    id: 1,
    title: 'General Medicine',
    description: 'Fever,Headache,cough,Dizziness',
  },
  {
    id: 2,
    title: 'Urology',
    description: 'Prostatitis, Urinal tract infection and more',
  },
  {
    id: 3,
    title: 'ENT',
    description: 'Hearing, Speech, Breathing, Sleep Issues',
  },
  {
    id: 4,
    title: 'Dermatology',
    description: 'skin,hair,nails, and cosmetic problems.',
  },
];

const Specialties = () => {
  return (
    <View className="flex-1 px-4 py-4">
      <View className="flex flex-row justify-between items-center mb-4">
        <Text className="font-medium text-black/70 text-lg">Specialties</Text>
        <Text className="text-[#972168] font-medium">View all</Text>
      </View>

      <View className="flex-1 flex-row  flex-wrap bg-white  ">
        {specialtiesData.map(item => (
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
                  <UrologyIcon />
                ) : item.id === 3 ? (
                  <EntIcon />
                ) : item.id === 4 ? (
                  <GastroIcon />
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
      </View>
    </View>
  );
};

export default Specialties;
