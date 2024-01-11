import React, { useState } from 'react';
import COLORS from '../../constants/colors';
import Button from '../../components/Button';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, Pressable, TextInput, Alert } from 'react-native'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const handleEmail = () => {
     if (email === 'admin@gmail.com') {
        navigation.navigate("VerificationAdmin")
     }
     else if (email === 'customer@gmail.com') {
        navigation.navigate("VerificationUser")
     } else {
       Alert.alert('Error', 'Please try again.');
     }
   };

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.black, COLORS.black]}
        >
        <SafeAreaView style={{ flex: 1}}>
        <Image
        source={require("../../assets/Login.png")}
        style={{
        height: 250,
        width: 400,
        borderRadius: 10,
        position: "absolute",
        top: 100,
        transform: [
        { translateX: -21 },
        { translateY: 50 },
        { rotate: "0deg" }
        ]
        }}
        />
        <View style={{ flex: 1, marginHorizontal: 28 }}>
            <View style={{ marginVertical: 160 }}>
        </View>

        <View style={{ marginBottom: 12 }}>
            <Text style={{
                fontSize: 16,
                fontWeight: 400,
                color: COLORS.white,
                marginVertical: 8
        }}>Email Address:</Text>

        <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.white,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
        }}>
        <TextInput
        placeholder='e.g. @gmail.com'
        placeholderTextColor="#B1B1B1"
        keyboardType='email-address'
        onChangeText={(text) => setEmail(text)}
        style={{width: "100%",  color: COLORS.white}}
        />
        </View>
        </View>

        <View style={{
            flexDirection: 'row',
            marginVertical: 6
        }}>
        </View>

        <Button
            title="Login"
            onPress={handleEmail}
            style={{
                marginTop: 18,
            }}
        />

        <View style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 10
        }}>
        <Text style={{ fontSize: 16, color: COLORS.white }}>Doesn't have an account?</Text>
        <Pressable
            onPress={() => navigation.navigate("Register")}
        >
        <Text style={{
                fontSize: 16,
                color: COLORS.red,
                fontWeight: "bold",
                marginLeft: 6
        }}>Register</Text>
        </Pressable>
            </View>
        </View>
        </SafeAreaView>
    </LinearGradient> 
    )
}
export default Login