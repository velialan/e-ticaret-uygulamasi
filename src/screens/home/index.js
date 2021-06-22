import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GETProduct } from '../../actions/product/action';
import { GETSlider } from '../../actions/slider/action';
import Box from '../../Components/box';
import Button from '../../Components/button';
import Text from '../../Components/text';
import Product from '../../Components/product';
import { FlatList, ActivityIndicator, useWindowDimensions, StatusBar, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';
import { GETCart } from '../../actions/cart';

export default function Home({ navigation }) {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const dispatch = useDispatch();
    const fullName = useSelector(state => state.auth.name);
    const products = useSelector(state => state.product.products);
    const sliders = useSelector(state => state.slider.sliders);

    const isProductFetching = useSelector(state => state.product.isProductFetching);

    const isSliderFetching = useSelector(state => state.slider.isSliderFetching);
    const id_token = useSelector(state => state.auth.id_token);
    React.useEffect(() => {
        dispatch(GETProduct({ param: '?new=0&featured=1' }))
        dispatch(GETCart({ token: id_token }));
        dispatch(GETSlider())
    }, [])





    return (
        <Box as={ScrollView} flex={1} bg="#fff" >

            <StatusBar hidden backgroundColor="transparent" />
            {isSliderFetching ?
                <Box justifyContent="center" height={windowHeight * .35} bg="#252a34">
                    <ActivityIndicator size="large" color="red" />
                </Box> : (
                    <Box height={windowHeight * .35}>
                        <FlatList
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={sliders}
                            renderItem={({ item, index }) => (
                                <FastImage
                                    key={index}
                                    style={{ height: windowHeight * .35, width: windowWidth, borderRadius: 5 }}
                                    source={{
                                        uri: item.image_url,
                                        headers: { Authorization: 'someAuthToken' },
                                        priority: FastImage.priority.normal,
                                    }}
                                    resizeMode={FastImage.resizeMode.cover}

                                />
                            )}
                            keyExtractor={item => item.id.toString()}
                        />

                    </Box>

                )}
            <Box mx={10}>
                <Box mx={10} my={10} flexDirection="row" justifyContent="space-between">
                    <Text fontStyle="italic" fontWeight="bold" fontSize={20} color="black" fontFamily="rokkitt_bold">Öne Çıkanlar</Text>
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
                        renderItem={({ item, index }) => <Product onpress={() => navigation.navigate('productdetail', { product_index: index })} key={index.toString()} data={item} />}
                        keyExtractor={item => item.id}
                    />
                )}
            </Box>

            <Box mx={10}>
                <Box mx={10} my={10} flexDirection="row" justifyContent="space-between">
                    <Text fontStyle="italic" fontWeight="bold" fontSize={20} color="black" fontFamily="rokkitt_bold">Yeni Ürünler</Text>
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
                        renderItem={({ item, index }) => <Product onpress={() => navigation.navigate('productdetail', { product_index: index })} key={index.toString()} data={item} />}
                        keyExtractor={item => item.id}
                    />
                )}
            </Box>

        </Box>
    )
}
