import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, GETUser, } from '../../actions/action'
import { GETProduct } from '../../actions/product/action'

import Box from '../../Components/box'
import TextInput from '../../Components/textinput'
import Product from '../../Components/product'
import { Search } from '../../Components/icons';
import { FlatList,Button } from 'react-native';

const DATA = [
    {
        id: 'a',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item',
        price: "200"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
    {
        id: 'b',
        image: 'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
        title: 'First Item 2',
        price: "500"
    },
   
];
export default function Home() {

    React.useEffect(() => {
        dispatch(GETProduct())      
    }, [])

    
    const dispatch = useDispatch();
    const fullName = useSelector(state => state.auth.name);
    const products = useSelector(state => state.product.products);

    return (
        <Box px={10} flex={1} bg="#fff" >
            <Box my={1}  >
                <TextInput
                    style={{
                        shadowColor: '#000',
                        shadowOpacity: 0.1,
                        shadowRadius: 24,
                        shadowOffset: {
                            width: 0,
                            height: 4
                        }
                    }}
                    bg="white"
                    placeholder="Search Your Product"
                    pl={52}

                />
                <Box position="absolute" height={52} pl={16} justifyContent="center" alignItems="center">
                    <Search width={25} height={25} stroke="#818181" />
                </Box>
            </Box>

            <FlatList
                numColumns="2"
                data={products}
                renderItem={({ item, index }) => <Product key={index.toString()}  image={item.base_image.original_image_url} price={item.price} title={item.title} />}
                keyExtractor={item => item.id}
            />
            {/* <Button title="çıkış yap" onPress={() => dispatch(logoutUser())} />
            <Button title="get user" onPress={() => dispatch(GETUser())} /> */}

        </Box>
    )
}
