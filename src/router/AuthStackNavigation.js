import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/login'
import RegisterScreen from '../screens/register'
import ForgotPasswordScreen from '../screens/forgotpassword'
import * as React from 'react'
const Stack = createStackNavigator();

export default function AuthStackNavigation() {
    return (
        <Stack.Navigator initialRouteName="signin" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="signin" component={SignInScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
            <Stack.Screen name="forgotpassword" component={ForgotPasswordScreen} />
        </Stack.Navigator>
    );
}