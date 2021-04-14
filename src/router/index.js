import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home'
import SignInScreen from '../screens/login'
import SplashScreen from '../splash/SplashScreen';
import { useSelector } from 'react-redux';
import BottomTab from './tabNavigator'


const Stack = createStackNavigator();

function App() {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isAuthenticated ? (
                    <Stack.Screen name="Home" component={BottomTab} />

                ) : (

                    <Stack.Screen
                        name="SignIn"
                        component={SignInScreen}
                        options={{
                            title: 'Sign in',
                            // animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                        }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;