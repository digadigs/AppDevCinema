import React from 'react';
import COLORS from '../../constants/colors';
import { Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/admin_contents/HomeScreen';
import ProfileScreen from '../../screens/admin_contents/ProfileScreen';
import MovieScreen from '../../screens/admin_contents/MovieScreen';
import Branches from '../../screens/admin_contents/Branches';

const Tab = createBottomTabNavigator();
const IconSize = 24;

const AdminDashboard = ({ navigation }) => {
  return (
  <LinearGradient
    style={{flex: 1}}
    colors={[COLORS.splashscreen, COLORS.splashscreen]}
  >
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {backgroundColor: 'black', borderTopWidth: 0,
        borderTopLeftRadius: 24, borderTopRightRadius: 24, borderLeftWidth: 0.2, borderRightWidth: 0.2,
        position: 'absolute', overflow: 'hidden'},
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: '#FF5757',
      }}>
      
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle:{backgroundColor: "#060606"},
          headerTitleStyle:{color: COLORS.white, fontSize: 20},
          headerTitle: () => (
          <Image style={{ width: 100, height: 65}} source={require("../../assets/header.png")} />
          ),
          headerTitleAlign: 'center',
          headerRight: () => (
          <TouchableOpacity>
          <Icon name="notifications" size={26} color={COLORS.white} paddingRight={15} paddingTop={3} />
          </TouchableOpacity>
          ),
          headerShadowVisible: false,
          tabBarLabel: () => {return null},
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Movies"
        component={MovieScreen}
        options={{
          headerStyle:{backgroundColor: "#060606"},
          headerTitleStyle:{color: COLORS.white, fontSize: 20},
          headerTitle: () => (
          <Image style={{ width: 120, height: 75}} source={require("../../assets/header1.png")} />
          ),
          headerTitleAlign: 'center',
          headerRight: () => (
          <TouchableOpacity>
          <Icon name="notifications" size={26} color={COLORS.white} paddingRight={15} paddingTop={3} />
          </TouchableOpacity>
          ),
          headerShadowVisible: false,
          tabBarLabel: () => {return null},
          tabBarIcon: ({ color, size }) => (
            <Icon name="film-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Branches"
        component={Branches}
        options={{
          headerStyle:{backgroundColor: "#060606"},
          headerTitleStyle:{color: COLORS.white, fontSize: 20},
          headerTitle: () => (
          <Image style={{ width: 150, height: 80}} source={require("../../assets/header2.png")} />
          ),
          headerTitleAlign: 'center',
          headerRight: () => (
          <TouchableOpacity>
          <Icon name="notifications" size={26} color={COLORS.white} paddingRight={15} paddingTop={3} />
          </TouchableOpacity>
          ),
          headerShadowVisible: false,
          tabBarLabel: () => {return null},
          tabBarIcon: ({ color, size }) => (
            <Icon name="location-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle:{backgroundColor: "#060606"},
          headerTitleStyle:{color: COLORS.white, fontSize: 20},
          headerTitle: () => (
          <Image style={{ width: 140, height: 70}} source={require("../../assets/header3.png")} />
          ),
          headerTitleAlign: 'center',
          headerRight: () => (
          <TouchableOpacity>
          <Icon name="notifications" size={26} color={COLORS.white} paddingRight={15} paddingTop={3} />
          </TouchableOpacity>
          ),
          headerShadowVisible: false,
          tabBarLabel: () => {return null},
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  </LinearGradient>
  );
};

export default AdminDashboard