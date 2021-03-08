import React, { Component } from 'react';
import {Text , View , Image , ScrollView , Dimensions , Pressable , StyleSheet} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import * as Theme from './theme/Theme';
import * as RepoProduct from "./repository/RepoSample";
import * as RepoCart from "./repository/RepoCart";
import {HomeItemProductLarge} from './ScreenHome';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import InputCounter from './widget/InputCounter';
import ActionButton from './widget/ActionButton';
import Toast from 'react-native-simple-toast';

export default class ScreenProductDetails extends React.Component {

    constructor(props){
        
        super(props);
         this.state = {
            product : RepoProduct.getProduct(this.props.route.params.selectedItem.id),
            isAdded : RepoCart.isAdded(this.props.route.params.selectedItem.id)
         }
    }

    render() {
        return (
            this.displayProduct()
        );
    }

    displayProduct(){

        if (!this.state.product){
            return (
                <View style = {{flex : 1}}>
                    <Text style = {{fontSize : 18, flex : 1 , textAlignVertical : 'center' , textAlign : 'center' , fontFamily : 'yekan'}}>کالای مورد نظر دریافت نشد!</Text>
                </View>
            );
        }else{
            let fall = new Animated.Value(1);
            const sheetRef = React.createRef(null);
            return(
                <View style= {{backgroundColor:'#ffffff' , flex : 1}}>
                    <ScrollView style = {{flex : 1}}>
                        <Image resizeMode ='center' style ={{marginTop : 20,marginBottom : 20, width:'100%' , height : Dimensions.get("window").height * 0.3}} source = {this.state.product.photo}/>
                        <Text  style = {{fontSize : 21, fontFamily : 'yekan_bold', padding : 15 , writingDirection :'rtl' }}>{this.state.product.title}</Text>
                        <View style={{flexDirection : 'row' , justifyContent :'space-between'}}>
                            <Text style = {{fontFamily : 'yekan_bold', fontSize:24, color : Theme.colorAscend, margin : 10, padding : 10}}>قیمت : {this.state.product.price} تومان</Text>
                            <Text style = {{fontFamily : 'yekan', textAlignVertical : 'center', margin : 10, padding:15, color:"#ffffff" , backgroundColor : Theme.colorAscend,borderRadius:25}}>تخفیف :‌ {this.state.product.discount}٪</Text>
                        </View>
                        <View style = {{padding : 10}}>
                            <Unorderedlist  bulletUnicode={0x00a0}><Text style={{fontFamily : 'yekan'}}>ویژگی ها</Text>
                                <Unorderedlist bulletUnicode={0x00a0}>
                                    <Unorderedlist bulletUnicode={0x25AA} color={Theme.colorPrimary} style={{ fontSize: Theme.dimenIconFontSize  }}><Text style={{fontFamily : 'yekan'}}>پارچه مش </Text></Unorderedlist>
                                    <Unorderedlist bulletUnicode={0x25AA} color={Theme.colorPrimary} style={{ fontSize: Theme.dimenIconFontSize  }}><Text style={{fontFamily : 'yekan'}}>کاهش فشار </Text></Unorderedlist>
                                    <Unorderedlist bulletUnicode={0x25AA} color={Theme.colorPrimary} style={{ fontSize: Theme.dimenIconFontSize }}><Text style={{fontFamily : 'yekan'}}>بندی</Text></Unorderedlist>
                                </Unorderedlist>
                            </Unorderedlist>
                            <Text> </Text>
                            <Unorderedlist  bulletUnicode={0x00a0}><Text style={{fontFamily : 'yekan'}}>سایز ها</Text>
                                <View style = {{flexDirection : 'row' , justifyContent : 'space-around'}}>
                                    <Text style={{color : Theme.colorAscend, padding:10, borderRadius:20 , borderWidth : 1, borderColor : Theme.colorAscend , flex : 1 , margin : 10 , textAlign:'center'}}>37</Text>
                                    <Text style={{color : Theme.colorAscend, padding:10, borderRadius:20 , borderWidth : 1, borderColor : Theme.colorAscend , flex : 1 , margin : 10 , textAlign:'center'}}>40</Text>
                                    <Text style={{color : Theme.colorAscend, padding:10, borderRadius:20 , borderWidth : 1, borderColor : Theme.colorAscend , flex : 1 , margin : 10 , textAlign:'center'}}>41</Text>
                                    <Text style={{color : Theme.colorAscend, padding:10, borderRadius:20 , borderWidth : 1, borderColor : Theme.colorAscend , flex : 1 , margin : 10 , textAlign:'center'}}>42</Text>
                                </View>
                            </Unorderedlist>
                        </View>

                        <Text style = {{padding : 10 , fontFamily : 'yekan'}}>محصولات مشابه</Text>
                        <ScrollView horizontal = {true}>
                            <HomeItemProductLarge nav = {this.props.navigation}/>
                            <HomeItemProductLarge nav = {this.props.navigation}/>
                            <HomeItemProductLarge nav = {this.props.navigation}/>
                        </ScrollView>

                    </ScrollView>

                    <Pressable onPress={() => this.onAddBtnPressed(sheetRef)} android_ripple = {{color : Theme.colorShadow}}>
                        {this.renderButton()}
                    </Pressable>

                    <BottomSheet
                        ref={sheetRef}
                        callbackNode = {fall}
                        initialSnap = {1}
                        snapPoints={['60%', 0]}
                        borderRadius={35}
                        renderContent={()=>{return(<BottomSheetPurchase parent = {this} sheetRef={sheetRef} product={this.state.product} />)}}
                    />
                    {renderShadow(fall)}
                </View>
            );
        }
    }

    onAddBtnPressed(sheetRef){
        if (this.state.isAdded){
            RepoCart.remove(this.state.product.id);
            showMessage('از سبد حذف شد.');
            this.setState({
                isAdded : RepoCart.isAdded(this.state.product.id)
            })
        }else{
            sheetRef.current.snapTo(0);
        }
    }

    renderButton(){
        if (this.state.isAdded){
            return <Text style={{margin:10, borderRadius : 10, textAlign:"center", height : 55 , fontSize : 18 , backgroundColor : Theme.colorDanger , color : Theme.colorWhite , fontFamily : Theme.fontRegular, textAlignVertical : 'center'}} >حذف از سبد</Text>
        }else{
            return <Text style={{margin:10, borderRadius : 10, textAlign:"center", height : 55 , fontSize : 18 , backgroundColor : Theme.colorPrimary , color : Theme.colorWhite , fontFamily : Theme.fontRegular, textAlignVertical : 'center'}} >افزودن به سبد خرید</Text>
        }
    }
}

const renderShadow = (fall) => {
    const animatedShadowOpacity = Animated.interpolate(fall, {
      inputRange: [0, 1],
      outputRange: [0.5, 0],
    })
    const AnimatedView = Animated.View;
    return (
      <AnimatedView
        pointerEvents="none"
        style={[
          styles.shadowContainer,
          {
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    )
}

class BottomSheetPurchase extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count : 1,
        }
    }

    render(){
        return(
            <View style={styles.bottomSheet}>
                <Text numberOfLines = {3} style = {styles.bottomSheetHeaderLabel}>{this.props.product.title}</Text>
                <View style = {styles.bottomSheetHeader}>
                    <InputCounter callback = {(currentCount)=>{this.updateCount(currentCount)}} layout = {'vertical'}/>
                    <Image style = {styles.bottomSheetImage} source={this.props.product.photo}/>
                </View>
                <Text style = {styles.bottomSheetPrice}>{"مبلغ کل :"+ this.state.count * this.props.product.price}</Text>
                <ActionButton onPress = {()=>{this.insertIntoCart(this.props.product.id , this.state.count)}} style = {styles.bottomSheetConfirmBtn} label = {"افزودن"}/>
            </View>
        );
    }

    renderButton(){
        if (this.state.isAdded){
            return <Text style = {styles.bottomSheetPrice}>{"مبلغ کل :"+ this.state.count * this.props.product.price}</Text>
        }else{
            return <Text style = {styles.bottomSheetPrice}>حذف از سبد</Text>
        }
    }

    insertIntoCart(productId , count){
        RepoCart.put(productId , count);
        showMessage('به سبد افزوده شد');
        this.props.parent.setState({
            isAdded : RepoCart.isAdded(productId)
        })
        this.props.sheetRef.current.snapTo(1);
    }



    updateCount(currentCount){
        this.setState({
            count : currentCount,
        })
    }

}

function showMessage(msg){
    Toast.show(msg, Toast.SHORT, [
        'UIAlertController',
    ]);
}

const styles = StyleSheet.create({

    bottomSheetConfirmBtn : {
        width :'100%'
    },
    bottomSheetPrice:{
        fontFamily : 'yekan_bold',
        padding : 20,
        color : Theme.colorAscend,
        fontSize : 26,
        textAlign : 'left',
        width : '100%',
        textAlignVertical : 'center'
    },

    bottomSheet : {
        backgroundColor: '#ffffff',
        padding: 16,
        height: '100%',
        alignItems: 'center',
    },

    bottomSheetHeaderLabel : {
        fontFamily : 'yekan_bold',
        width : '100%',
        fontSize : 18,
        paddingRight : 15,
        paddingLeft : 15,
        paddingTop : 10,
        paddingBottom : 10,
        marginTop : 10,
        borderBottomWidth : 1,
        borderColor : Theme.colorPrimary,
        textAlignVertical :'bottom'
    },

    bottomSheetImage: {
        margin : 15,
        height: Dimensions.get("window").width * 0.5,
        width : Dimensions.get("window").width * 0.5,
        resizeMode :'center',
    },
    bottomSheetHeader : {
        alignItems : 'stretch',
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    shadowContainer: {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: '#000',
        },
    }  
)