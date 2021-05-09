import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, logoutUser } from '../../actions/auth'
import Box from '../../Components/box'
import Button from '../../Components/button'
import { ChevronLeft } from '../../Components/icons';
import Text from '../../Components/text'
import TextInput from '../../Components/textinput'


{/* <Button title="giris yap" onPress={() => } /> */ }

export default function Register({navigation}) {

    const [Password, setPassword] = React.useState('')
    const dispatch = useDispatch();


    return (
        <Box as={ScrollView} bg="#E5E5E5" flex={1} px={16}>
            <Box justifyContent="center" height={50}>
                <Button onPress={()=>navigation.goBack()}>
                    <ChevronLeft height={35} width={35} stroke="#000" />

                </Button>

            </Box>
            <Text mt={40} fontSize={34} fontFamily="rokkitt_bold" >Kaydol</Text>
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
                    color="#14467b"
                    borderRadius="normal"
                    placeholder="Email"
                    value={Password}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={{
                        elevation: 2
                    }}
                    my={4}
                    fontSize={14}
                    bg="white"
                    px={20}
                    py={18}
                    color="#14467b"
                    borderRadius="normal"
                    placeholder="Adınız"
                    value={Password}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={{
                        elevation: 2
                    }}
                    my={4}
                    fontSize={14}
                    bg="white"
                    px={20}
                    py={18}
                    color="#14467b"
                    borderRadius="normal"
                    placeholder="Soyadnız"
                    value={Password}
                    onChangeText={setPassword}
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
                    color="#14467b"
                    borderRadius="normal"
                    placeholder="Şifre"
                    value={Password}
                    onChangeText={setPassword}
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
                    color="#14467b"
                    borderRadius="normal"
                    placeholder="Şifre Tekrar"
                    value={Password}
                    onChangeText={setPassword}
                />
                <Button onPress={()=>navigation.navigate('signin')}>
                    <Text fontFamily="rokkitt_regular" color="Black" textAlign="right" fontSize={14} py={14} >Zaten bir hesabım var</Text>
                </Button>
                <Button my={16} style={{ elevation: 2 }} justifyContent="center" alignItems="center" borderRadius={25} bg="Primary" >
                    <Text fontFamily="rokkitt_regular" color="White" fontSize={18} py={14} >Kaydol</Text>
                </Button>
            </Box>

        </Box>
    )
}
