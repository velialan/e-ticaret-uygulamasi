import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home'
import SignInScreen from '../screens/login'
import SplashScreen from '../splash/SplashScreen';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createStackNavigator();
let userToken;

function App() {

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            try {
                userToken = await AsyncStorage.getItem('id_token');
            } catch (e) {
            }
        };
        bootstrapAsync();
    }, []);


    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userToken == null ? (
                    <Stack.Screen name="Home" component={HomeScreen} />

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