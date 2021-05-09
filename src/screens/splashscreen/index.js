import React from 'react'
import { ActivityIndicator } from 'react-native'
import Box from '../../Components/box';
import Text from '../../Components/text';


export default function SplashScreen() {
    return (
        <Box flex={1} justifyContent="center" bg="Primary" alignItems="center">
            <Text fontSize={18} color="White">Yükleniyor</Text>
            <ActivityIndicator size="large" color="#fff" />
        </Box>
    )
}
