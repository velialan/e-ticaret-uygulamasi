import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Kategori from '../screens/kategori';
import ShopScreen from '../screens/shop';
import HomeStackNavigator from './HomeStackNavigator';
import Favorilerim from '../screens/favorilerim';
import Profile from '../screens/profile';
import { Home, Heart, Bell, User,AlignJustify,ShoppingCart } from '../Components/icons';
const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator tabBarOptions={{            
            style:{ height:65, borderTopLeftRadius:20 ,borderTopRightRadius:20,elevation:20},
            activeTintColor:'#DB3022',
            inactiveTintColor:'#9B9B9B',
            labelStyle:{fontWeight:'bold'}
        }} >
                          

            <Tab.Screen
                options={{
                    tabBarLabel: 'Ana Sayfa',
                    tabBarIcon: ({ color, size }) => (
                        <Home height={size} width={size} stroke={color} />
                    )
                }} name="Home" component={HomeStackNavigator} />

            <Tab.Screen
                options={{
                    tabBarLabel: 'Kategori',
                    tabBarIcon: ({ color, size }) => (

                        <AlignJustify height={size} fill={color} width={size} stroke={color} />

                    )
                }} name="Kategori" component={Kategori} />
                <Tab.Screen
                options={{
                    tabBarLabel: 'Sepetim',
                    tabBarIcon: ({ color, size }) => (

                        <ShoppingCart height={size} fill={color} width={size} stroke={color} />

                    )
                }} name="Sepetim" component={ShopScreen} />

            <Tab.Screen
                options={{
                    tabBarLabel: 'Favorilerim',
                    tabBarIcon: ({ color, size }) => (

                        <Heart height={size} fill={color} width={size} stroke={color} />

                    )
                }} name="Favorilerim"  component={Favorilerim} />

            <Tab.Screen
                ptions={{
                    tabBarLabel: 'User',
                    tabBarIcon: ({ color, size }) => (

                        <User height={size} width={size} stroke={color} />

                    )
                }} name="Profile" component={Profile} />

        </Tab.Navigator>
    );
}