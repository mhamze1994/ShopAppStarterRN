import React, { Component } from 'react';
import { Text, View , ScrollView,Dimensions , Image ,FlatList , StyleSheet, Pressable }  from 'react-native';
import * as Theme from "./theme/Theme";
import * as RepoProduct from "./repository/RepoSample";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as App from '../App';

export default class ScreenCategories extends React.Component {
    render() {
        
        return (
            <SafeAreaView style={_styles.container}>
                <FlatList
                    showsHorizontalScrollIndicator = {false}
                    data = {RepoProduct.getProductCategories()}
                    renderItem={({ item }) => (<CategoryModule navigation = {this.props.navigation} data={item} />)}
                    keyExtractor={(item) => item.id}/>
            </SafeAreaView>
        );
    }
}


class CategoryModule extends React.Component {

    render() {
        return (
            <View>
                <View style = {{flexDirection : 'row' , paddingRight : 25 , paddingLeft : 25 , paddingTop : 20 , paddingBottom : 10}}>
                    <Text style = {{flex : 1, textAlign : 'left' , fontFamily :Theme.fontBold}}>{this.props.data.title}</Text>
                    <Text style = {{flex : 1, textAlign : 'right' , fontFamily :Theme.fontBold , color : Theme.colorAscend}}>نماش همه</Text>
                </View>
                <FlatList
                    showsHorizontalScrollIndicator = {false}
                    horizontal={true}
                    data = {this.props.data.products}
                    renderItem={({ item }) => (<CategoryItem navigation = {this.props.navigation} data={item} />)}
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
}

class CategoryItem extends React.Component {
    render() {
        return (
            <Pressable onPress = {
                 ()=>{
                    this.props.navigation.navigate(
                        App.SCREEN_PRODUCT_DETAILS,
                        {selectedItem : this.props.data})
                 }
                }>
                    <View style = {{elevation : 3, borderRadius : 10,padding:5, margin : 10, backgroundColor : '#ffffff', height : Dimensions.get("window").height * 0.20 , width : Dimensions.get("window").width * 0.35}}>
                        <Image source = {this.props.data.photo} style = {{ resizeMode:'center', alignItems:'center', width : '100%' , height : '60%' }} />
                        <Text numberOfLines ={1} style = {{fontFamily:'yekan', width : '100%' , height : '30%' , textAlign : 'center' , textAlignVertical : 'center'}}>{this.props.data.name}</Text>
                    </View>
            </Pressable>
        );
    }
}

const _styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });


