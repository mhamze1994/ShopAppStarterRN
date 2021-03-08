import React from 'react';
import {View , StyleSheet , Text , Pressable, PixelRatio , Image} from 'react-native';
import ScreenHome from './ScreenHome';
import ScreenCategories from './ScreenCategories';
import ScreenUserCart from './ScreenUserCart';
import ScreenProfile from './ScreenProfile';
import * as Theme from './theme/Theme'
import * as RepoCart from './repository/RepoCart';


const HOME = 0;
const CATEGORIES = 1;
const CART = 2;
const PROFILE = 3;

export default class ScreenMain extends React.Component{

  constructor(props){
    super(props);
    this.state = {selectedScreenIndex : 0 , totalCost : 0};
    this.handleEvent = this.handleEvent.bind(this);
  }

  render(){
    
    return (
      <View style = {_style.contentPane}>

          {this.renderAppBar()}

          <View style = {_style.mainContent}>
            {this.renderPage()}
          </View>
          <View style = {_style.bottomNavBar}>
            <NatTab 
              selected = {this.state.selectedScreenIndex === HOME} 
              onPress = {()=>this.handleEvent(HOME)} 
              title = {Theme.iconHome}/>
            <NatTab 
              selected = {this.state.selectedScreenIndex === CATEGORIES} 
              onPress = {()=>this.handleEvent(CATEGORIES)} 
              title = {Theme.iconCategories}/>
            <NatTab 
              selected = {this.state.selectedScreenIndex === CART} 
              onPress = {()=>this.handleEvent(CART)} 
              title = {Theme.iconCart}/>
            <NatTab 
              selected = {this.state.selectedScreenIndex === PROFILE} 
              onPress = {()=>this.handleEvent(PROFILE)} 
              title = {Theme.iconProfile}/>
          </View>

      </View>
    );
  };

  renderAppBar(){
    if (this.state.selectedScreenIndex === CART){
      return (<View style = {_style.appBar}>
              <Pressable android_ripple={{color: Theme.colorShadow}}>
                  <Text style = {{color :Theme.colorAscend, fontFamily : Theme.fontBold , padding : 18 , textAlignVertical : 'center'}}>ادامه ی فرآیند خرید</Text>
              </Pressable>
              <Text style = {{color :Theme.colorPrimary, fontFamily : Theme.fontBold, flex: 1, padding : 18,textAlign:'center', textAlignVertical : 'center'}}>مبلغ کل فاکتور : {this.state.totalCost}</Text>
              </View>);
    }else if (this.state.selectedScreenIndex !== PROFILE){
      return (<View style = {_style.appBar}>
                <Text style = {_style.search_icon}>{Theme.iconSearch}</Text>
                <Text style = {_style.search}>{Theme.strSearchIn}</Text>
                <Image resizeMode = 'center' source = {require('../assets/img/sample-logo.jpg')}  style = {_style.searchLogo}/>
              </View>);
    }
    
  }

  renderPage(){
    let screenIndex = this.state.selectedScreenIndex;
    switch(screenIndex){
      case HOME: return <ScreenHome navigation = {this.props.navigation}/>;
      case CATEGORIES: return <ScreenCategories navigation = {this.props.navigation}/>;
      case CART: return <ScreenUserCart cartChangeCallback = {()=>this.updateTotalCost()}/>;
      case PROFILE: return <ScreenProfile/>;
    }
    return null;
 }

  updateTotalCost(){
    this.setState({
      totalCost : RepoCart.getTotalCost()
    });
  }

  handleEvent(indx){
    if (indx === CART){
      this.updateTotalCost();
    }
    this.setState({
      selectedScreenIndex : indx
    });
  }

}

class NatTab  extends React.Component {

  render() {
    return (
      <Pressable 
        onPress = {this.props.onPress} 
        style = {_style.bottomNavTab}  
        android_ripple={{color: Theme.colorShadow}}>
          <Text style = {[_style.icon , {color : this.props.selected ? Theme.colorPrimary : Theme.colorNavTabDefault}]}>
            {this.props.title}
          </Text>
      </Pressable>
    );
  }
}


const _style = StyleSheet.create(
  {
    contentPane : {
      flex : 1,
      flexDirection : 'column',
    },
    searchLogo : {
      height : Theme.dimenAppBarSize,
      width : 105,
      marginStart : 10,
      marginEnd : 10
    },
    search : {
      color : Theme.colorTextDefault,
      textAlignVertical : 'center',
      textAlign : 'center',
      fontFamily : Theme.fontRegular
    },
    search_icon :{
      fontFamily : Theme.fontIcons,
      fontSize : Theme.dimenIconFontSize,
      textAlign : 'center',
      textAlignVertical : 'center',
      width : Theme.dimenAppBarSize
    },
    icon :{
        fontFamily : Theme.fontIcons,
        color : Theme.colorDefaultText,
        flex : 1,
        fontSize : Theme.dimenIconFontSize,
        textAlign : 'center',
        textAlignVertical : 'center'
    },
    bottomNavBar : {
      borderTopColor : Theme.colorNavTabDefault,
      borderTopWidth : 1/PixelRatio.get(),
      alignSelf : 'stretch',
      backgroundColor : Theme.colorNavBarDefault,
      height : Theme.dimenNavBarSize,
      flexDirection : 'row',
      alignContent : 'stretch',
    },
    bottomNavTab : {
        flex : 1,
        textAlign : 'center',
        textAlignVertical : 'center'
    },
    mainContent : {
      flex : 1,
      flexDirection : 'column-reverse',
      alignContent : 'center'
    },
    appBar : {
      
      flexDirection : 'row',
      borderBottomColor : Theme.colorNavTabDefault,
      borderBottomWidth : 1/PixelRatio.get(),
      elevation : Theme.dimenElevation,
      backgroundColor : Theme.colorAppBar,
      height : Theme.dimenAppBarSize,
    }
  }
);

