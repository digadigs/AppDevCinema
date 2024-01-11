import COLORS from '../../constants/colors';
import Button from '../../components/Button';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, Pressable, TextInput, StyleSheet } from 'react-native'

const Register = ({ navigation }) => {
    return (
        <LinearGradient style={{flex: 1}}
        colors={[COLORS.black, COLORS.black]}
        >
        <SafeAreaView style={{ flex: 1}}>
            <Image
            source={require("../../assets/Registration.png")}
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
            onPress={() => navigation.navigate("VerificationUser")}
            style={{
            marginTop: 18,
        }}
        />
        <Text style={styles.formFooter}>
              By clicking "Register", you agree to our
              <Text style={{ color: '#FF5757', fontWeight: '600' }}>
                {' '}
                Terms & Conditions{' '}
              </Text>
              and
              <Text style={{ color: '#FF5757', fontWeight: '600' }}>
                {' '}
                Privacy Policy
              </Text>
        </Text>
        </View>
        </SafeAreaView>
        </LinearGradient>
        
    )
}

const styles = StyleSheet.create({

formFooter: {
    marginTop: 15,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
  },
});
export default Register