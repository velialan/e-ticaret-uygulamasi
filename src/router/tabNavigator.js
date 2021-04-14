import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorite from '../screens/favorite';
import HomeScreen from '../screens/home';
import Notification from '../screens/notification';
import Profile from '../screens/profile';
import { Home, Heart, Bell, User } from '../Components/icons'
const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    tabBarLabel: 'Ana Sayfa',
                    tabBarIcon: ({ color, size }) => (
                        <Home height={size} width={size} stroke={color} />
                    )
                }} name="Home" component={HomeScreen} />

            <Tab.Screen
                options={{
                    tabBarLabel: 'Favori',
                    tabBarIcon: ({ color, size }) => (

                        <Heart height={size} width={size} stroke={color} />

                    )
                }} name="Favorite" component={Favorite} />

            <Tab.Screen
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color, size }) => (

                        <Bell height={size} width={size} stroke={color} />

                    )
                }} name="Notification" component={Notification} />

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