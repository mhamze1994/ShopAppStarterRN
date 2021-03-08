import React, { Component } from 'react';
import { Pressable,Text,StyleSheet } from 'react-native';
import * as Theme from '../theme/Theme';

class ActionButton extends React.Component {
    render() {
        return (
            <Pressable onPress={this.props.onPress} style ={[style.container , this.props.style]} android_ripple={{color: Theme.colorShadow}}>
                <Text style = {[style.text , this.props.styleText]}>{this.props.label}</Text>
            </Pressable>
        );
    }
}

export default ActionButton;

const style = StyleSheet.create({
    container : { 
        padding : 12,
        borderRadius : 6,
        backgroundColor : Theme.colorAscend,
    },
    text : {
        fontSize : 18,
        color : Theme.colorTextLight,
        fontFamily : Theme.fontBold,
        textAlign : 'center',
        textAlignVertical : 'center'
    }
});