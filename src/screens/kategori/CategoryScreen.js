import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { GETSubCategory } from '../../actions/category';
export default function CategoryScreen({ navigation, route }) {


  const dispatch = useDispatch();
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(GETSubCategory({ parent_id: route?.params?.category_id }))
    });

    return unsubscribe;
  }, [navigation]);

  const category = useSelector(state => state.category.subCategory);

  const isGetSubCategoryFetching = useSelector(state => state.category.isGetSubCategoryFetching);

  const renderItem = ({ item }) => (
    <Text> {item.name} </Text>
  );
  const renderFooter = () => {
    if (!isGetSubCategoryFetching) return null;
    return (
      <View style={{
        paddingVertical: 20
      }}>
        <ActivityIndicator size="small" color="red" />
      </View>
    )
  }
  return (

    <FlatList
      ListHeaderComponent={renderFooter}
      data={category}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}
