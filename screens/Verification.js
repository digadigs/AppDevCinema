import React, { useState } from 'react';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Alert, Image, TextInput, Pressable} from 'react-native';

const Verification = ({ navigation }) => {
   const [otp, setOtp] = useState('');
   const handleVerifyOtp = () => {
     if (otp === '1234') {
       navigation.navigate("VerificationSuccess")
     } else {
       Alert.alert('Error', 'Please try again.');
     }
   };
 
return (
  <LinearGradient
  style={{flex: 1}}
  colors={[COLORS.black, COLORS.black]}
  >
    <SafeAreaView style={{ flex: 1, top: 50}}>
    <Image
      source={require("../assets/Verification.png")}
      style={{
      height: 250,
      width: 400,
      borderRadius: 10,
      transform: [
      { translateX: -21 },
      { translateY: 70 },
      { rotate: "0deg" }
      ]
      }}
      />
      <Text style={{textAlign: 'center', color: COLORS.white}}>Please enter the 4-digit verification code</Text>
      <Text style={{ marginBottom: 40, textAlign: 'center', color: COLORS.white }}>that was send to your e-mail.</Text>
      
     <View style={{ marginBottom: 12, alignItems: "center" }}>
     <Text style={{
          fontSize: 16,
          fontWeight: 400,
          color: COLORS.white,
          marginVertical: 8
      }}>Verification code:</Text>
      
     <View style={{
          width: "60%",
          height: 48,
          borderColor: COLORS.white,
          borderWidth: 1,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
      }}>
      <TextInput
          placeholder='e.g. 1234'
          placeholderTextColor="#B1B1B1"
          keyboardType='numeric'
          maxLength={4}
          value={otp}
          onChangeText={(text) => setOtp(text)}
          style={{width: "50%", color: COLORS.white, textAlign: 'center'}}
      />
      </View>
      </View>
      
      <View style={{
        marginTop: 10,
        alignItems: 'center'
      }}>
      <Button
        title="Verify"
        onPress={handleVerifyOtp}
        style={{marginTop: 15, width: "75%"}}
      /></View>

      <View style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 10
      }}>
      <Text style={{ fontSize: 16, color: COLORS.white }}>Didn't receive a code?</Text>
      <Pressable
        // onPress={() => navigation.navigate("Login")}
      >
      <Text style={{
          fontSize: 16,
          color: COLORS.red,
          fontWeight: "bold",
          marginLeft: 6
      }}>Resend</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  </LinearGradient>
  );
 };
export default Verification