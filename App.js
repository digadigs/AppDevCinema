import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Splash, Welcome, Register, Login, Verification, VerificationAdmin, VerificationSuccess, Dashboard, Logout, Titanic, YourName} from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Splash'
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="VerificationAdmin"
          component={VerificationAdmin}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="VerificationSuccess"
          component={VerificationSuccess}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Logout"
          component={Logout}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Titanic"
          component={Titanic}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="YourName"
          component={YourName}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}