import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {View, Image, StatusBar} from 'react-native';
import ProfileScreen from './screens/ProfileScreen';
import Consult from './screens/ConsultScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconFA6 from 'react-native-vector-icons/FontAwesome6';

import Records from './screens/Records';
import Header from './components/HomeScreenComponents/Header';
import MHCScreen from './screens/MHCScreen';
import HeaderForMHC from './components/ConsultScreenComponents/HeaderForMHC';
import {PaperProvider} from 'react-native-paper';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar
          hidden={false}
          barStyle="dark-content"
          backgroundColor="white"
        />
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarActiveTintColor: '#972168',
            tabBarInactiveTintColor: '#4c4f4d',
            tabBarItemStyle: {
              paddingVertical: 0,
            },
            tabBarStyle: {height: '7.5%', paddingBottom: 5},
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
                return (
                  <View
                    style={{
                      flex: 1,
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderTopWidth: 3,
                      borderTopColor: focused ? '#972168' : 'white',
                      paddingTop: 5,
                    }}>
                    <Icon name={iconName} size={19} color={color} />
                  </View>
                );
              } else if (route.name === 'Consult') {
                iconName = 'stethoscope';
                return (
                  <View
                    style={{
                      flex: 1,
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderTopWidth: 3,
                      borderTopColor: focused ? '#972168' : 'white',
                      paddingTop: 5,
                    }}>
                    <IconFA5 name={iconName} size={19} color={color} />
                  </View>
                );
              } else if (route.name === 'MHC') {
                iconName = 'hand-holding-medical';
                return (
                  <View
                    style={{
                      flex: 1,
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderTopWidth: 3,
                      borderTopColor: focused ? '#972168' : 'white',
                      paddingTop: 5,
                    }}>
                    <IconFA6 name={iconName} size={19} color={color} />
                  </View>
                );
              } else if (route.name === 'Records') {
                iconName = 'document-text-outline';
                return (
                  <View
                    style={{
                      flex: 1,
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderTopWidth: 3,
                      borderTopColor: focused ? '#972168' : 'white',
                      paddingTop: 5,
                    }}>
                    <Icon name={iconName} size={19} color={color} />
                  </View>
                );
              } else if (route.name === 'My profile') {
                return (
                  <View
                    style={{
                      flex: 1,
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderTopWidth: 3,
                      borderTopColor: focused ? '#972168' : 'white',
                      paddingTop: 5,
                    }}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
                      }}
                      style={{width: 19, height: 19}}
                    />
                  </View>
                );
              }
            },
            tabBarLabel: route.name === 'My profile' ? 'Profile' : route.name,
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
            },
            headerTitleAlign: 'center',
          })}>
          <Tab.Screen
            options={{title: 'my Home', header: () => <Header />}}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            options={{header: () => <HeaderForMHC />}}
            name="Consult"
            component={Consult}
          />
          <Tab.Screen name="MHC" component={MHCScreen} />
          <Tab.Screen name="Records" component={Records} />
          <Tab.Screen name="My profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
