import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { GETCategory } from '../../actions/category';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CategoryScreen from './CategoryScreen';
const Tab = createMaterialTopTabNavigator();

export default function Kategori() {

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(GETCategory({ parent_id: 1 }))
    }, [])

    const category = useSelector(state => state.category.category);
    const isGetCategoryFetching = useSelector(state => state.category.isGetCategoryFetching);

    React.useEffect(() => {

        category.map(deger => {
            console.log(deger.name)
        })


    }, [])

    return (
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: '#DB3022',
                labelStyle: { fontSize: 12, color: 'black', fontFamily: 'ABeeZee-Regular', textTransform: 'none' },
                style: { backgroundColor: 'white' },
                tabStyle: { height: 35 },

            }}
        >
            {
                isGetCategoryFetching && category.map(deger => {
                    <Tab.Screen
                        name={deger.slug}
                        component={CategoryScreen}
                        options={{ tabBarLabel: deger.name }}
                    />
                })

            }
            <Tab.Screen
                name="Profiledsd"
                component={CategoryScreen}
                options={{ tabBarLabel: 'Profilefgdfg' }}
            />


        </Tab.Navigator>
    )
}

