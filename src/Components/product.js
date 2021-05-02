import React from 'react'
import Box from './box'
import Text from './text'
import Image from './image'
import Button from './button'

//import {Image} from 'react-native'
export default function Product({ image, title, price }) {
    return (
        <Box flex={1} width={200}    m={9} borderRadius={10}>
            <Button   alignItems="center">
                <Image source={{ uri: image }} style={{ height: 150, width: '100%', resizeMode: 'contain', borderRadius: 5 }} />
                <Text fontWeight="bold" >{title}</Text>
                <Text>{price}₺</Text>
            </Button>
        </Box>

    )
}
