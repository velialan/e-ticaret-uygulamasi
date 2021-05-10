import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home'
import ProductDetailScreen from '../screens/productDetail'
import * as React from 'react'
const Stack = createStackNavigator();

export default function HomeStackNavigation() {
    return (
        <Stack.Navigator   screenOptions={{animationEnabled:false }}>
            <Stack.Screen  name="home" options={{headerShown:false}} component={HomeScreen} />
            <Stack.Screen name="productdetail" component={ProductDetailScreen} />
        </Stack.Navigator>
    );
}