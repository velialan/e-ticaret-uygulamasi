
import React from 'react'
import Button from './button'
import { Heart } from './icons'


export default function FavoriButton({ is_wishlisted, onpress, ...props }) {
    return (
        <Button
        {...props}
        onPress={onpress}
        zIndex={10}
        style={{ elevation: 2 }}
        justifyContent="center"
        alignItems="center"
        size={50}
        borderRadius="full"
        bg={is_wishlisted ? "Primary" : "White"}>

            <Heart height={25} width={25} stroke={is_wishlisted ? "#fff" : "#9B9B9B"} />

        </Button>
    )
}

