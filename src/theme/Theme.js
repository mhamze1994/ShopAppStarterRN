import * as React from 'react';
import { StyleSheet , PixelRatio , View} from 'react-native';

export const colorWhite = "#ffffff"
export const colorBlack = "#171717"

export const colorPrimary = "#7aad32";
export const colorAscend = "#46bd75";
export const colorDanger = "#ad3434"
export const colorAscend2 = "#3f3f40";
export const colorAppBar = "#fefefe";
export const colorNavBarDefault = "#fefefe";
export const colorNavTabDefault = "#919aa3";
export const colorShadow = "#00111111";
export const colorTextDefault= "#2f3030";
export const colorTextLight= "#ffffff";
export const colorGrayNeutral= "#808080";

export const iconHome = "\ue80a";
export const iconCategories = "\ue817";
export const iconCart = "\ue81e";
export const iconProfile = "\ue800";
export const iconSearch = "\ue805";
export const iconLogin = "\ue813";
export const iconKey = "\ue824";
export const iconPhone= "\ue825";
export const iconCreditCard = "\ue831"
export const iconSort = "\uf160";
export const iconCartAdd = "\uf217";
export const iconMinus = "\ue832";
export const iconPlus = "\ue81f";


export const dimenAppBarSize = 56;
export const dimenNavBarSize = 56;
export const dimenElevation = 4;
export const dimenIconFontSize = 22;


export const fontIcons = 'icons';
export const fontRegular = 'yekan';
export const fontBold = 'yekan_bold';

export const strSearchIn = "جستجو در";


export const horizontalSeparator = ()=>{
    return (<View style = {style.horizontalSeparator}/>);
}
export const verticalSeparator = ()=>{
    return (<View style = {style.verticalSeparator}/>);
}

export const style = StyleSheet.create(
{
        
    horizontalSeparator : {
        width : '100%',
        marginTop : 10,
        marginBottom : 10,
        height :  1/PixelRatio.get(),
        backgroundColor : colorTextDefault,
    },

    verticalSeparator : {
        width :  1/PixelRatio.get(),
        marginRight : 10,
        marginLeft : 10,
        height : "100%",
        backgroundColor : colorTextDefault,
    },
    label :{
        flex: 1,
        textAlign : 'center',
        textAlignVertical : 'center'
    },
    nav_bar : {
        backgroundColor : colorPrimary
    },
    fill : {
        flex : 1,
    },
}
);