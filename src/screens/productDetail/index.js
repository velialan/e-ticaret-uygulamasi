import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, GETUser, } from '../../actions/action'
import { GETProduct } from '../../actions/product/action'
import { GETSlider } from '../../actions/slider/action'
import Box from '../../Components/box'
import Image from '../../Components/image'
import Button from '../../Components/button'

import Text from '../../Components/text'
import TextInput from '../../Components/textinput'
import Product from '../../Components/product'
import { ChevronLeft, Search } from '../../Components/icons';
import { FlatList, ActivityIndicator, useWindowDimensions, StatusBar, ScrollView } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Addcart } from '../../actions/cart';
import FastImage from 'react-native-fast-image';
import FavoriButton from '../../Components/favoriButton';

export default function ProductDetail({ navigation, route }) {
    const { product_index } = route.params;

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.products[product_index]);


    const isProductFetching = useSelector(state => state.product.isProductFetching);

    const id_token = useSelector(state => state.auth.id_token);

    const sepeteEkle = (id) => {
        dispatch(Addcart({ id: id, token: id_token }))
    }

    return (
        <Box as={ScrollView} flex={1} bg="#fff" >

            {
                isProductFetching ?
                    (<Box justifyContent="center" height={windowHeight * .60} bg="#252a34">
                        <ActivityIndicator size="large" color="red" />
                    </Box>) : (
                        <Box height={windowHeight * .60}>
                            <FlatList
                                pagingEnabled={true}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                data={product.images}
                                renderItem={({ item, index }) => (
                                    <FastImage
                                        key={index}
                                        style={{ height: windowHeight * .60, width: windowWidth }}
                                        source={{
                                            uri: item.large_image_url,
                                            headers: { Authorization: 'someAuthToken' },
                                            priority: FastImage.priority.normal,
                                        }}
                                        resizeMode={FastImage.resizeMode.cover}

                                    />
                                )}
                                keyExtractor={item => item.id.toString()}
                            />

                        </Box>)
            }
            <Box flexDirection="row" justifyContent="space-between">
                <FavoriButton onpress={() => { }} is_wishlisted={product?.is_wishlisted} />
            </Box>
            <Text>{product.name}</Text>

        </Box>
    )
}
