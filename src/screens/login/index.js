import React, { useState } from 'react'
import { ActivityIndicator, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../actions/auth'
import Box from '../../Components/box'
import Button from '../../Components/button'
import Text from '../../Components/text'
import TextInput from '../../Components/textinput'


export default function ALoginpp({ navigation }) {

    const [email, setemail] = useState('veli.alan03@gmail.com')
    const [password, setpassword] = React.useState('asdasdasd')
    const dispatch = useDispatch();

    const isFetching = useSelector(state => state.auth.isFetching)
    const errorMessage = useSelector(state => state.auth.errorMessage)


    return (
        <Box as={ScrollView} bg="#E5E5E5" flex={1} px={16}>

            <Text mt={106} fontSize={34} fontFamily="rokkitt_bold" >Login</Text>

            <Box mt={73}>
                <TextInput
                    style={{
                        elevation: 2
                    }}
                    my={4}
                    fontSize={14}
                    bg="white"
                    px={20}
                    py={18}
                    fontSize={16}
                    fontFamily="rokkitt_regular"
                    color="#14467b"
                    borderRadius="normal"
                    placeholder="Email"
                    value={email}
                    onChangeText={setemail}
                />

                <TextInput
                    my={4}
                    style={{
                        elevation: 2
                    }}
                    fontSize={14}
                    secureTextEntry={true}
                    bg="white"
                    px={20}
                    py={18}
                    fontSize={16}
                    color="#14467b"
                    borderRadius="normal"
                    placeholder="Şifre"
                    value={password}
                    onChangeText={setpassword}
                />
                <Button disabled={isFetching} onPress={() => navigation.push('forgotpassword')}>
                    <Text mt={12} textAlign="right" fontSize={14} fontFamily="rokkitt_regular">Şifremi unuttum</Text>
                </Button>
                <Button disabled={isFetching} onPress={() => dispatch(loginUser({ email, password }))} my={32} style={{ elevation: 2 }} justifyContent="center" alignItems="center" borderRadius={25} bg="Primary" >
                    {
                        isFetching ? <ActivityIndicator style={{ paddingVertical: 18 }} size="small" color="#fff" /> : <Text fontFamily="rokkitt_regular" color="White" fontSize={18} py={14} >Giriş Yap</Text>

                    }
                </Button>
                <Text>{errorMessage}</Text>

                <Box flexDirection="row" justifyContent="center">
                    <Text fontSize={16} fontFamily="rokkitt_regular">Hesabınız yok mu? hemen </Text>
                    <Button disabled={isFetching} onPress={() => navigation.push('register')}>
                        <Text fontSize={16} fontFamily="rokkitt_bold">Kaydolun</Text>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
