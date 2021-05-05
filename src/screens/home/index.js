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

export default function Home() {

    React.useEffect(() => {
        dispatch(GETProduct({param:'?new=0&featured=1'}))
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
                    <Text fontSize={16} color="blue" fontWeight="bold">Öne Çıkanlar</Text>
                    <Button>
                        <Text fontSize={16} color="blue" fontWeight="bold">Tümünü gör</Text>
                    </Button>
                </Box>
                {isProductFetching ? <ActivityIndicator size="large" color="red" /> : (
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={products}
                        renderItem={({ item, index }) => <Product key={index.toString()} image={item.base_image.original_image_url} price={item.formated_price} title={item.name} />}
                        keyExtractor={item => item.id}
                    />
                )}
            </Box>
            <Box mx={10}>
                <Box mx={5} flexDirection="row" justifyContent="space-between">
                    <Text fontSize={16} color="blue" fontWeight="bold">Yeni Ürünler</Text>
                    <Button>
                        <Text fontSize={16} color="blue" fontWeight="bold">Tümünü gör</Text>
                    </Button>
                </Box>
                {isProductFetching ? <ActivityIndicator size="large" color="red" /> : (
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={products}
                        renderItem={({ item, index }) => <Product key={index.toString()} image={item.base_image.original_image_url} price={item.formated_price} title={item.name} />}
                        keyExtractor={item => item.id}
                    />
                )}
            </Box>
            <Box mx={10}>
                <Box mx={5} flexDirection="row" justifyContent="space-between">
                    <Text fontSize={16} color="blue" fontWeight="bold">Yeni Ürünler</Text>
                    <Button>
                        <Text fontSize={16} color="blue" fontWeight="bold">Tümünü gör</Text>
                    </Button>
                </Box>
                {isProductFetching ? <ActivityIndicator size="large" color="red" /> : (
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={products}
                        renderItem={({ item, index }) => <Product key={index.toString()} image={item.base_image.original_image_url} price={item.formated_price} title={item.name} />}
                        keyExtractor={item => item.id}
                    />
                )}
            </Box>

        </Box>
    )
}
