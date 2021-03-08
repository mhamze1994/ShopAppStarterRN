import { Text, View , Image , StyleSheet, Dimensions} from 'react-native';

import React, { Component } from 'react';

class SlideShow extends Component {
    render() {
        return (
            <View style={styles.slider}>
                <Image style={[styles.sliderImage , {transform : [{translateX : 10}] } ]} source = {
                    {
                        uri : 'https://www.groovypost.com/wp-content/uploads/2017/12/typing_laptop_display_email_Featured.jpg',
                    }
                }/>

            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        slider : {
            height : '30%',
        },
        sliderImage:{
            borderRadius : 20,
            margin : 20,
            resizeMode : 'cover',
            height : '100%',
            padding : 10
        }
    }
);

export default SlideShow;