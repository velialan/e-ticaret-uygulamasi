import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { View, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { loginUser, logoutUser } from '../../actions/action'


const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('id_token')
        if (value !== null) {
            console.log(value)
        }
    } catch (e) {
        console.log(e)
    }
}


export default function ALoginpp() {

    const dispatch = useDispatch();

   
    return (
        <View>
            <Button title="giris yap" onPress={() => dispatch(loginUser({ email: 'veli.alan03@gmail.com', password: 'asdasdasd' }))} />
            <Button title="getir" onPress={getData} />
            <Button title="Çıkış" onPress={() => dispatch(logoutUser())} />
        </View>
    )
}
