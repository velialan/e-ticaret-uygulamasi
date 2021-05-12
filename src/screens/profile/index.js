import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../actions/auth'


export default function Profile() {
    const token = useSelector(state => state.auth.id_token)

    const dispatch = useDispatch();
    return (
        <View>
            <Text>Profile</Text>
            <Button title="Çıkış" onPress={() => dispatch(logoutUser({ token}))} />
        </View>
    )
}
