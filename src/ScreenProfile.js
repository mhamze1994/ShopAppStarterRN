import React, { Component } from 'react';
import { Text, View ,Image, Dimensions , TextInput , Button} from 'react-native';
import * as Theme from "./theme/Theme";

export default class ScreenProfile extends React.Component {

    render() {
        return (
            <View style = {{backgroundColor : '#ffffff', flex : 1 ,  alignItems:'center', justifyContent :'space-between' }}>
                
                <Image resizeMode = 'center' source = {require ('../assets/img/sample-logo.jpg')}/>
                <View style = {{alignItems : 'center'}}>
                   
                    <LoginInput title = {'شماره همراه'} icon = {Theme.iconLogin}/>

                    <Text style ={
                        {
                            color : Theme.colorWhite,
                            fontFamily : Theme.fontBold,
                            textAlign : 'center',
                            textAlignVertical : 'center',
                            margin : 20, 
                            borderRadius : 15 , 
                            backgroundColor : Theme.colorPrimary , 
                            width :Dimensions.get("window").width*0.8 , 
                            height : 50 }
                        }>ورود</Text>
                    <View style = {{flexDirection : 'row' , flexWrap : 'wrap' , margin : 20 }}>


                        {this.toTextView("با ورود یا ثبت نام شما")}
                        <Text style = {{padding:1, paddingTop : 5, color : Theme.colorAscend, fontFamily : Theme.fontBold , borderBottomColor : Theme.colorAscend , borderBottomWidth : 1}}>شرایط و قوانین </Text>
                        {this.toTextView("استفاده از سرویس های سایت و")}
                        <Text style = {{padding:1, paddingTop : 5, color : Theme.colorAscend, fontFamily : Theme.fontBold , borderBottomColor : Theme.colorAscend , borderBottomWidth : 1}}>قوانین حریم خصوصی</Text>
                        {this.toTextView("آنرا میپذیرید")}
                    </View> 
                </View>
            </View>
        );
    }

    toTextView(str){
        let words = str.split(' ');
        
        let elements = [];
        for(let i = 0; i < words.length; i++){
            elements.push(<Text key={"key"+i} style = {{padding:1,paddingTop : 5, fontFamily : Theme.fontRegular}}>{words[i]} </Text>);
        }

        if (elements.length > 0){
            return elements;
        }

    }
}


class LoginInput extends React.Component {
    render() {
        return (
            <View style = {{width : Dimensions.get("window").width*0.8}}>
                <Text style = {{ fontFamily : Theme.fontRegular , marginBottom : 10, marginTop : 15}}>{this.props.title}</Text>
                <View style = {{borderRadius : 10, backgroundColor:'#eaeaea', flexDirection : 'row'}}>
                    <Text style={{textAlignVertical :'center', paddingRight : 20, fontFamily :Theme.fontIcons}}>{this.props.icon}</Text>
                    <TextInput textAlign = 'right' style = {{backgroundColor : '#00000000',  paddingRight : 10,paddingLeft : 10, flex : 1,  width : Dimensions.get("window").width*0.8}}></TextInput>
                </View>
            </View>
        );
    }
};
