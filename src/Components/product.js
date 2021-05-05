import React from 'react'
import Box from './box'
import Text from './text'
import Image from './image'
import Button from './button'

export default function Product({ image, title, price }) {
    return (
        <Box width={200}  height={200}  m={9} borderRadius={10}>

            <Button   alignItems="center">
                <Image source={{ uri: image }} style={{ height: 150, width: '100%', resizeMode: 'cover', borderRadius: 5 }} />
                <Text fontWeight="bold" >{title}</Text>
                <Text>{price}₺</Text>
            </Button>
        </Box>

    )
}
