import COLORS from '../constants/colors';
import Button from '../components/Button';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, Pressable, TextInput } from 'react-native'

const Register = ({ navigation }) => {
    return (
        <LinearGradient style={{flex: 1}}
        colors={[COLORS.black, COLORS.black]}
        >
        <SafeAreaView style={{ flex: 1}}>
            <Image
            source={require("../assets/Registration.png")}
            style={{
            height: 250,
            width: 400,
            borderRadius: 10,
            position: "absolute",
            top: 5,
            transform: [
            { translateX: -21 },
            { translateY: 50 },
            { rotate: "0deg" }
            ]
            }}
        />
        <View style={{ flex: 1, marginHorizontal: 28 }}>
            <View style={{ marginVertical: 120 }}>
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
            placeholder='e.g. john@gmail.com'
            placeholderTextColor="#B1B1B1"
            keyboardType='email-address'
            style={{width: "100%", color: COLORS.white
        }}
        />
        </View>
        </View>

        <View style={{ marginBottom: 12 }}>
        <Text style={{
            fontSize: 16,
            fontWeight: 400,
            color: COLORS.white,
            marginVertical: 8
        }}>Firstname:</Text>

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
            placeholder='e.g. John Carlo'
            placeholderTextColor="#B1B1B1"
            keyboardType='email-address'
            style={{
            width: "100%",
            color: COLORS.white
        }}
        />
        </View>
        </View>

        <View style={{ marginBottom: 12 }}>
            <Text style={{
                fontSize: 16,
                fontWeight: 400,
                color: COLORS.white,
                marginVertical: 8
        }}>Lastname:</Text>

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
            placeholder='e.g. Diga'
            placeholderTextColor= "#B1B1B1"
            keyboardType='email-address'
            style={{
            width: "100%",
            color: COLORS.white
        }}
        />
        </View>
        </View>

        <View style={{
            flexDirection: 'row',
            marginVertical: 6
        }}>
        </View>

        <Button
            title="Register"
            onPress={() => navigation.navigate("Verification")}
            style={{
            marginTop: 18,
        }}
        />

        <View style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 10
        }}>
        <Text style={{ fontSize: 16, color: COLORS.white }}>Already have an account?</Text>
        <Pressable
            onPress={() => navigation.navigate("Login")}
        >
        <Text style={{
            fontSize: 16,
            color: COLORS.red,
            fontWeight: "bold",
            marginLeft: 6
        }}>Login</Text>
        </Pressable>
        </View>
        </View>
        </SafeAreaView>
        </LinearGradient>
        
    )
}
export default Register