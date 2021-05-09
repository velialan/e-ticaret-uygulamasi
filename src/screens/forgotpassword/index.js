import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { ActivityIndicator, Alert, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, logoutUser } from '../../actions/auth'
import Box from '../../Components/box'
import Button from '../../Components/button'

import Text from '../../Components/text'
import TextInput from '../../Components/textinput'
import { ChevronLeft } from '../../Components/icons'

export default function ForgotPassword({ navigation }) {

    const [email, setemail] = useState('veli.alan03@gmail.com')
    const [password, setpassword] = React.useState('asdasdasd')
    const dispatch = useDispatch();

    const isFetching = useSelector(state => state.auth.isFetching)
    const errorMessage = useSelector(state => state.auth.errorMessage)


    return (
        <Box bg="#E5E5E5" flex={1} px={16}>
            <Box justifyContent="center" height={50}>
                <Button onPress={() => navigation.goBack()} size={50} justifyContent="center" >
                    <ChevronLeft height={35} width={35} stroke="#000" />
                </Button>

            </Box>
            <Text mt={70} fontSize={34} fontFamily="rokkitt_bold" >Şifremi Unuttum</Text>
            <Box justifyContent="center" flex={1}>
                <Text fontFamily="rokkitt_regular" color="Black" fontSize={12}>Lütfen e-mail adresinizi giriniz. E-posta yoluyla yeni bir şifre oluşturmak için bir bağlantı alacaksınız.</Text>
                <TextInput
                    style={{
                        elevation: 2
                    }}
                    my={4}
                    fontSize={16}
                    bg="white"
                    px={20}
                    py={18}
                    fontFamily="rokkitt_regular"
                    color="#14467b"
                    borderRadius="normal"
                    placeholder="Email"
                    value={email}
                    onChangeText={setemail}
                />

                <Button onPress={() => dispatch(loginUser({ email, password }))} my={32} style={{ elevation: 2 }} justifyContent="center" alignItems="center" borderRadius={25} bg="Primary" >
                    {
                        isFetching ? <ActivityIndicator style={{ paddingVertical: 18 }} size="small" color="#fff" /> : <Text fontFamily="rokkitt_regular" color="White" fontSize={16} py={16} >Gönder</Text>

                    }
                </Button>


            </Box>

        </Box>
    )
}
