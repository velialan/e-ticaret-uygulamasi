import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Box from '../../Components/box'
import Text from '../../Components/text'
import {GETCart} from '../../actions/cart'
import { ScrollView,FlatList} from 'react-native';
import ProductCart from '../../Components/productcart';
export default function Shop() {
    const dispatch = useDispatch();
    const id_token = useSelector(state => state.auth.id_token);
    const data = useSelector(state => state.cart.carts);

    React.useEffect(() => {
        dispatch(GETCart({token:id_token}));       
    }, [data.items])
  
    return (
        <Box as={ScrollView} bg="Background" px={15}>

                <Text mt={50} fontWeight="bold" fontSize={30} color="black" fontFamily="rokkitt_bold">Sepetim</Text>
                 <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data.items}
                        renderItem={({ item, index }) => <ProductCart onpress={() => {}} key={index.toString()} data={item} />}
                        keyExtractor={item => item.id}
                    /> 
        </Box>
    )
}
