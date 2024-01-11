import React from 'react';
import COLORS from '../../constants/colors';
import { View, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const TicketScreen = () => {
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[COLORS.splashscreen, COLORS.splashscreen1]}
    >
  <View>
  
  </View>
  </LinearGradient>
  );
};

export default TicketScreen;