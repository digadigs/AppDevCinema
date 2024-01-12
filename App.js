import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Splash, Landing, Register, Login, VerificationUser, VerificationSuccessUser, VerificationAdmin, VerificationSuccessAdmin, UserDashboard, Reservation, Result, AdminDashboard, Logout, Titanic, YourName, SMCalamba } from "./screens/main_screens";

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
          name="Landing"
          component={Landing}
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
          name="VerificationUser"
          component={VerificationUser}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="VerificationSuccessUser"
          component={VerificationSuccessUser}
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
          name="VerificationSuccessAdmin"
          component={VerificationSuccessAdmin}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="UserDashboard"
          component={UserDashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Reservation"
          component={Reservation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AdminDashboard"
          component={AdminDashboard}
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
        <Stack.Screen
          name="SMCalamba"
          component={SMCalamba}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}