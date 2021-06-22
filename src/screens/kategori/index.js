import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
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



    return (

        isGetCategoryFetching ?

            <View><Text>loading</Text></View>
            :
            (<Tab.Navigator
                initialRouteName="Feed"
                tabBarOptions={{
                    scrollEnabled: true,
                    activeTintColor: '#DB3022',
                    labelStyle: { fontSize: 10, color: 'black', fontFamily: 'ABeeZee-Regular', textTransform: 'none', fontWeight: "bold" },
                    style: { backgroundColor: 'white' },
                    tabStyle: { height: 40 },

                }}
            >
                {
                    category.map((deger, index) => (<Tab.Screen
                        name={deger.slug}
                        component={CategoryScreen}
                        options={{ tabBarLabel: deger.name }}
                    />))
                }



            </Tab.Navigator>)

    )
}

