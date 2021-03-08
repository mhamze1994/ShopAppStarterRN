import React, { Component } from 'react';
import {View , Text , StyleSheet} from 'react-native';
import * as Theme from "../theme/Theme";
import ActionButton from './ActionButton';

export default class InputCounter extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            count : props.initialValue ? props.initialValue : 1,
        }
    }

    render() {
        return (
            <View style ={[_styles.container , this.props.layout === 'vertical' ? _styles.modeVertical: _styles.modeHorizontal , this.props.style ]}>
                <ActionButton onPress={()=>{this.increment(1)}} style={_styles.btn} styleText = {_styles.btnText} label={Theme.iconPlus}/>
                <Text style={[_styles.label , this.props.styleLabel]}>{this.state.count}</Text>
                <ActionButton onPress={()=>{this.increment(-1)}} style={_styles.btn} styleText = {_styles.btnText} label={Theme.iconMinus}/>
            </View>
        );
    }

    increment(value){
        if (this.state.count === 1 && value < 0){
            return;
        }
        this.setState({
            count : this.state.count + value
        })
        if (this.props.callback){
            this.props.callback(this.state.count + value);
        }
    }
}

const _styles = StyleSheet.create({

    modeVertical : {
        flexDirection:'column'
    },
    modeHorizontal : {
        flexDirection:'row'
    },
    container : {
        backgroundColor : Theme.colorAscend2,
        borderRadius : 18, 
        alignSelf : 'center',
        
    },

    label : {
        margin:5, 
        textAlign : 'center', 
        padding : 10 , 
        fontSize : 18,
        color : Theme.colorWhite,
        textAlignVertical : 'center',
        padding : 0,
    },
    btnText :{
        fontFamily : Theme.fontIcons,
    },
    btn : {
        margin:5, 
        color:Theme.colorWhite, 
        backgroundColor: Theme.colorAscend , 
        borderRadius : 16, 
        paddingRight : 15,
        paddingLeft : 15, 
        textAlignVertical : 'center'
    }

});