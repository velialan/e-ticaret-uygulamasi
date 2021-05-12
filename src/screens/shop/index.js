import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import {GETCart} from '../../actions/cart'
export default function Shop() {
    const dispatch = useDispatch();
    const id_token = useSelector(state => state.auth.id_token);

    React.useEffect(() => {
        dispatch(GETCart({token:id_token}));       
    }, [])

    return (
        <View>
            <Text>Shop</Text>
        </View>
    )
}
