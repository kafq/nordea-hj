import React from 'react';
import { Platform, Image } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Statistics: {
      screen: LinksScreen,
    },
    Links: {
      screen: LinksScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
          iconName = require('../assets/images/tab1.png'),
          focusedIconName =  require('../assets/images/1.png')
            break;
          case 'Statistics':
          iconName = require('../assets/images/tab2.png'),
          focusedIconName =  require('../assets/images/2.png')
            break;
          case 'Links':
          iconName = require('../assets/images/tab3.png'),
          focusedIconName =  require('../assets/images/3.png')
            break;
          case 'Settings':
          iconName = require('../assets/images/tab4.png'),
          focusedIconName =  require('../assets/images/4.png')
        }
        return (
          <Image
          style={{ width: 23, height: 23, resizeMode: 'contain' }}
          source={focused ? iconName : focusedIconName }
        />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: Colors.lightColorPeach,
      style: {
        backgroundColor: Colors.tintColor,
        shadowOpacity: 0.4,
        shadowOffset: {
          width: 0,
          height: -2,
        },
        shadowRadius: 6
      }
    },
  },
);
