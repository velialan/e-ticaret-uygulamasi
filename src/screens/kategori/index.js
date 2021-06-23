import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { GETAllCategory, GETCategory } from '../../actions/category';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CategoryScreen from './CategoryScreen';
const Tab = createMaterialTopTabNavigator();

export default function Kategori() {

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(GETCategory({ parent_id: 1 }))
        // dispatch(GETAllCategory())
    }, [])

    const category = useSelector(state => state.category.category);
    const isGetCategoryFetching = useSelector(state => state.category.isGetCategoryFetching);

    const tabnavigatorRender = category.map((item, index) => {
        return <Tab.Screen key={index} name={`PAGE_${index}`} component={CategoryScreen} options={{ tabBarLabel: item.name }} initialParams={{ category_id: item.id }} />
    });
    if (isGetCategoryFetching)
        return <ActivityIndicator size="small" color="red" />;
    return (


        <Tab.Navigator
            initialRouteName='PAGE_0'
            tabBarOptions={{

                indicatorStyle: { backgroundColor: '#DB3022' },
                scrollEnabled: true,
                labelStyle: { fontSize: 10, color: 'black', fontFamily: 'ABeeZee-Regular', textTransform: 'none', fontWeight: "bold" },
                style: { backgroundColor: 'white' },
                tabStyle: { height: 40, },

            }}
        >
            {tabnavigatorRender}



        </Tab.Navigator>

    )
}

