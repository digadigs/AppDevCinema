import React from 'react'
import COLORS from '../constants/colors';
import Button from '../components/Button';
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Pressable, Image } from 'react-native'

const Welcome = ({ navigation }) => {
    return (
        <LinearGradient style={{flex: 1}}
        colors={[COLORS.black, COLORS.black]}
        >
        <View style={{ flex: 1 }}>
            <View>
            <Image
                source={require("../assets/5.png")}
                style={{
                height: 200,
                width: 600,
                borderRadius: 10,
                position: "absolute",
                top: -10,
                transform: [
                { translateX: -45 },
                { translateY: 50 },
                { rotate: "0deg" }
                ]
                }}
            />
            <Image
                source={require("../assets/6.png")}
                style={{
                height: 250,
                width: 600,
                borderRadius: 10,
                position: "absolute",
                top: 80,
                left: -270,
                transform: [
                { translateX: 50 },
                { translateY: 60 },
                { rotate: "0deg" }
                ]
                }}
            />
        </View>

        <View style={{paddingHorizontal: 22, position: "absolute", top: 400, width: "100%"}}>
            <Text style={{fontSize: 46, fontWeight: 800, color: COLORS.white}}></Text>
            <View>
                <Image
                source={require("../assets/title.png")}
                style={{
                height: 280,
                width: 335,
                borderRadius: 10,
                position: "absolute",
                top: -200,
                left: -70,
                transform: [
                { translateX: 50 },
                { translateY: 60 },
                { rotate: "0deg" }
                ]
                }}
                />
            </View>

            <Text style={{fontSize: 26, fontWeight: 800, color: COLORS.white}}></Text>

            <View style={{ marginVertical: 10 }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 16,
                    color: COLORS.white,
                    marginVertical: 4
                }}>Quick and easy seat reservation,</Text>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 16,
                    color: COLORS.white,
                }}>no matter where you are.</Text>
            </View>

            <Text style={{fontSize: 20, fontWeight: 800, color: COLORS.white}}></Text>

            <Button
                title="Create Account"
                onPress={() => navigation.navigate("Register")}
                style={{
                marginTop: 24,
                width: "100%"
                }}
            />

            <View style={{
                flexDirection: "row",
                marginTop: 12,
                justifyContent: "center"
            }}>
            <Text style={{
                fontSize: 16,
                color: COLORS.white
            }}>Already have an account?</Text>
            <Pressable
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={{
                    fontSize: 16,
                    color: COLORS.red,
                    fontWeight: "bold",
                    marginLeft: 4
                }}>Login</Text>
            </Pressable>
            </View>
        </View>
    </View>
</LinearGradient>
)
}

export default Welcome