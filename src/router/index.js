import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigation from './AuthStackNavigation'
import SplashScreen from '../screens/splashscreen'
import BottomTab from './tabNavigator'
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { restoretoken } from '../actions/auth'
const Stack = createStackNavigator();

function App() {


    const [isLoading, setisLoading] = React.useState(true)

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const dispatch = useDispatch();

    React.useEffect(() => {

        const bootstrapAsync = async () => {
            let userToken;
            try {
                userToken = await AsyncStorage.getItem('id_token');
            } catch (e) {

                dispatch(restoretoken(false));
                setisLoading(false)
            }
            if (userToken !== null) {

                dispatch(restoretoken(true));
                setisLoading(false)

            }else{
                dispatch(restoretoken(false));
                setisLoading(false)

            }


        };

        bootstrapAsync();
    }, []);

    if (isLoading) {
        // We haven't finished checking for the token yet
        return <SplashScreen />;
    }
    const MyTheme = {
        dark: true,
        colors: {
          primary: '#f7aa1a',
          background: '#fff',
          card: 'rgb(255, 255, 255)',
          text: 'rgb(28, 28, 30)',
          border: 'rgb(199, 199, 204)',
          notification: 'rgb(255, 69, 58)',
        },
      };
    return (
        <NavigationContainer theme={MyTheme} >
            <Stack.Navigator screenOptions={{
                headerShown: false,
                
            }}>

                {isAuthenticated ? (

                    <Stack.Screen name="Home" component={BottomTab} />

                ) : (
                    <Stack.Screen
                        name="SignIn"
                        component={AuthStackNavigation}
                        options={{
                            title: 'Sign in',
                           animationTypeForReplace: isAuthenticated ? 'pop' : 'push',
                        }}
                    />
                )

                }


            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;