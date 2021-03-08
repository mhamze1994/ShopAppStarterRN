import React, { Component } from 'react';
import { Text, View ,ScrollView,Image ,Button , FlatList} from 'react-native';
import * as Theme from "./theme/Theme";
import InputCounter from './widget/InputCounter';
import * as RepoCart from './repository/RepoCart';
import * as RepoProduct from "./repository/RepoSample";


export default class ScreenUserCart extends React.Component {
    render() {
        return (
            this.displayEmptyMessage()
        );
    }
    displayEmptyMessage(){
        if (RepoCart.userCart.length === 0){
            return <Text style = {{color:Theme.colorGrayNeutral, flex : 1, fontFamily : 'yekan', fontSize : 24, textAlign : 'center' , textAlignVertical :'center'}}>
                هیچ کالایی انتخاب نشده.
                </Text>
        }else{
            return <FlatList
                showsVerticalScrollIndicator = {false}
                style = {{flex : 1 , backgroundColor : '#ffffff'}}
                data = {RepoCart.userCart}
                ItemSeparatorComponent = {Theme.horizontalSeparator}
                renderItem={({ item }) => (
                    <CartItem parent = {this} cartItem = {item}/>
                    )}
                    keyExtractor={(item) => item.pId}
                 />
        }
    }
}


class CartItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product : RepoProduct.getProduct(props.cartItem.pId),
            count : props.cartItem.pCount
        }
    }
    


    render() {
        return (
            <View style={{margin : 3, flexDirection : 'row' ,backgroundColor : '#ffffff' , padding : 15}}>
                    <Image resizeMode ='center' style ={{margin : 10, width:'30%' , height : 100}} source = {this.state.product.photo}/>
                    <View style={{flex : 1}}>
                        <Text style ={{fontFamily : 'yekan' , fontSize : 14}} >{this.state.product.title}</Text>
                        <Text style = {{flex : 1 ,fontFamily : 'yekan', fontSize : 18,textAlign :'left', textAlignVertical:'center'}}>{this.state.product.price * this.state.count} تومان</Text>
                        <InputCounter callback = {(currentCount) => this.updateCount(this.state.product.id , currentCount)} initialValue = {this.state.count} style = {{width : '100%' , backgroundColor : '#ffffff' , borderColor : Theme.colorPrimary , borderWidth : 1}} styleLabel = {{flex : 1 , color : Theme.colorBlack}}/>
                    </View>
           </View>
        );
    }

    updateCount(productId , currentCount){
        RepoCart.put(productId , currentCount);
        this.setState({
            count : currentCount,
        })
        this.props.parent.props.cartChangeCallback();
    }

}
