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
import { Search } from '../../Components/icons';
import { FlatList, ActivityIndicator, useWindowDimensions, StatusBar, ScrollView } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Addcart } from '../../actions/cart';

export default function Home() {

    React.useEffect(() => {
        dispatch(GETProduct({ param: '?new=0&featured=1' }))
        dispatch(GETSlider())
    }, [])

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const dispatch = useDispatch();
    const fullName = useSelector(state => state.auth.name);
    const products = useSelector(state => state.product.products);
    const sliders = useSelector(state => state.slider.sliders);

    const isProductFetching = useSelector(state => state.product.isProductFetching);

    const isSliderFetching = useSelector(state => state.slider.isSliderFetching);
    const id_token = useSelector(state => state.auth.id_token);


    const getData = async () => {
        console.log(id_token)
        try {
            const value = await AsyncStorage.getItem('id_token')
            if (value !== null) {
                console.log(value)
            }
        } catch (e) {
            console.log(e)

        }
    }

    const sepeteEkle = (id) => {
        dispatch(Addcart({ id: id, token: id_token }))
    }
    return (
        <Box as={ScrollView} flex={1} bg="#fff" >
            <StatusBar hidden backgroundColor="transparent" />
            {isSliderFetching ?
                <Box justifyContent="center" height={windowHeight * .30} bg="#252a34">
                    <ActivityIndicator size="large" color="red" />
                </Box> : (

                    <FlatListSlider
                        data={sliders}
                        imageKey={'image_url'}
                        height={windowHeight * .30}
                        width={windowWidth}
                        timer={5000}
                        onPress={item => alert(JSON.stringify(item))}
                        indicatorContainerStyle={{ position: 'absolute', bottom: 20 }}
                        indicatorActiveColor={'#8e44ad'}
                        indicatorInActiveColor={'#ffffff'}
                        indicatorActiveWidth={30}
                        animation
                    />
                )}
            <Box mx={10}>
                <Box mx={10} my={10} flexDirection="row" justifyContent="space-between">
                    <Text fontSize={20} color="black" fontFamily="rokkitt_bold">Öne Çıkanlar</Text>
                    <Button>
                        <Text fontSize={16} color="black" fontFamily="rokkitt_regular">Tümünü gör</Text>
                    </Button>
                </Box>
                {isProductFetching ? <ActivityIndicator size="large" color="red" /> : (
                    <FlatList
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={products}
                        renderItem={({ item, index }) => <Product onpress={() => sepeteEkle(item.id)} key={index.toString()} data={item} />}
                        keyExtractor={item => item.id}
                    />
                )}
            </Box>

            <Box mx={10}>
                <Box mx={10} my={10} flexDirection="row" justifyContent="space-between">
                    <Text fontSize={20} color="black" fontFamily="rokkitt_bold">Yeni Ürünler</Text>
                    <Button>
                        <Text fontSize={16} color="black" fontFamily="rokkitt_regular">Tümünü gör</Text>
                    </Button>
                </Box>
                {isProductFetching ? <ActivityIndicator size="large" color="red" /> : (
                    <FlatList
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={products}
                        renderItem={({ item, index }) => <Product onpress={() => sepeteEkle(item.id)} key={index.toString()} data={item} />}
                        keyExtractor={item => item.id}
                    />
                )}
            </Box>
            <Button onPress={getData}><Text>Getir</Text></Button>

        </Box>
    )
}
