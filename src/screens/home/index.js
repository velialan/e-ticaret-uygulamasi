import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch } from 'react-redux';
import {logoutUser} from '../../actions/action'

export default function Home() {
    const dispatch = useDispatch();

    return (
        <View>
            <Text>Home</Text>
            <Button title="çıkış yap" onPress={()=>dispatch(logoutUser())}/>
        </View>
    )
}
