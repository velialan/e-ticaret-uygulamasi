import React from 'react'
import Box from './box'
import Text from './text'
import Image from './image'
import Button from './button'

//import {Image} from 'react-native'
export default function Product({ image, title, price }) {
    return (
        <Button flex={1} m={9} borderRadius={10}>
            <Image source={{ uri: image }} style={{ height: 180, width: '100%', resizeMode: 'cover', borderRadius: 5 }} />
            <Text>{title}</Text>
            <Text>{price}₺</Text>
        </Button>
    )
}
