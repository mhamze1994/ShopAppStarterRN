import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  FlatList,
  PixelRatio,
} from 'react-native';
import * as Theme from './theme/Theme';
import * as App from '../App';
import * as RepoProduct from './repository/RepoSample';
import {Pages} from 'react-native-pages';

export default class ScreenHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={_style.mainContainer}>
        {this.displayHomeItems()}
      </ScrollView>
    );
  }

  displayHomeItems() {
    const homeItems = RepoProduct.getHome();
    let elements = [];

    for (let i = 0; i < homeItems.length; i++) {
      const item = homeItems[i];
      switch (item.layout) {
        case 'pager':
          elements.push(
            <ModulePager
              navigation={this.props.navigation}
              data={item}
              key={'key' + i}
            />,
          );
          break;
        case 'quad':
          elements.push(
            <ModuleQuad
              navigation={this.props.navigation}
              data={item}
              key={'key' + i}
            />,
          );
          break;
        case 'linear':
          elements.push(
            <ModuleLinear
              navigation={this.props.navigation}
              data={item}
              key={'key' + i}
            />,
          );
          break;
        case 'single':
          elements.push(
            <ModuleSingle
              navigation={this.props.navigation}
              data={item}
              key={'key' + i}
            />,
          );
          break;
        case 'grid':
          elements.push(
            <ModuleGrid
              navigation={this.props.navigation}
              data={item}
              key={'key' + i}
            />,
          );
          break;
      }
    }
    if (elements.length > 0) {
      return elements;
    }
  }
}

class ModulePager extends React.Component {
  render() {
    return (
      <Pages style={_style.modulePager}>
        {this.props.data.content.map((item) => {
          return (
            <View key={item.id} style={_style.modulePagerChild}>
              <Image style={_style.modulePagerImage} source={item.photo} />
            </View>
          );
        })}
      </Pages>
    );
  }
}

class ModuleSingle extends React.Component {
  render() {
    return (
      <Image source={this.props.data.content} style={_style.moduleSingleItem} />
    );
  }
}

class ModuleLinear extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          ItemSeparatorComponent={Theme.verticalSeparator}
          style={_style.moduleLinear}
          data={this.props.data.content}
          renderItem={({item}) => (
            <Image source={item.photo} style={_style.moduleLinearItem} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

class ModuleQuad extends React.Component {
  render() {
    return (
      <View style={_style.moduleQuad}>
        <Image
          source={this.props.data.content[0].photo}
          style={_style.moduleQuadItem}
        />
        <Image
          source={this.props.data.content[1].photo}
          style={_style.moduleQuadItem}
        />
        <Image
          source={this.props.data.content[2].photo}
          style={_style.moduleQuadItem}
        />
        <Image
          source={this.props.data.content[3].photo}
          style={_style.moduleQuadItem}
        />
      </View>
    );
  }
}

class ModuleGrid extends React.Component {
  render() {
    return (
      <View>
        <Text style={_style.moduleGridLabel}>{this.props.data.title}</Text>
        <View style={_style.moduleGrid}>
          {this.props.data.content.map((item) => {
            return (
              <Pressable
                key={item.id}
                onPress={() => {
                  this.props.navigation.navigate(App.SCREEN_PRODUCT_DETAILS, {
                    selectedItem: item,
                  });
                }}>
                <Image source={item.photo} style={_style.moduleGridItem} />
              </Pressable>
            );
          })}
        </View>
      </View>
    );
  }
}

export class HomeItemProductLarge extends React.Component {
  render() {
    return (
      <Pressable
        onPress={() => {
          this.props.nav.navigate(App.SCREEN_PRODUCT_DETAILS);
        }}
        android_ripple={{color: Theme.colorShadow}}
        style={{
          elevation: 3,
          borderRadius: 10,
          margin: 10,
          backgroundColor: '#ffffff',
          height: Dimensions.get('window').height * 0.35,
          width: Dimensions.get('window').width * 0.45,
        }}>
        <Image
          source={{
            uri:
              'https://ekameco.com/wp-content/uploads/2019/03/product-placeholder.jpg',
          }}
          style={{
            borderRadius: 10,
            margin: 10,
            backgroundColor: '#ffffff',
            flex: 1,
          }}
        />
        <Text
          style={{
            width: '100%',
            height: '15%',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          ProdcutName
        </Text>
        <Text
          style={{
            width: '100%',
            height: '15%',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          price
        </Text>
      </Pressable>
    );
  }
}

const _style = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ffffff',
    alignContent: 'stretch',
  },

  modulePager: {
    height: Dimensions.get('window').height * 0.3,
  },

  modulePagerChild: {
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  modulePagerImage: {
    borderRadius: 20,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },

  moduleSingleItem: {
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    resizeMode: 'contain',
    width: 'auto',
    height: Dimensions.get('window').height * 0.2,
    borderRadius: 10,
  },

  moduleLinear: {
    marginTop: 10,
    marginBottom: 10,
  },

  moduleLinearItem: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    margin: 10,
  },

  moduleQuad: {
    height: Dimensions.get('window').height * 0.35,
    padding: 10,
    backgroundColor: '#ffffff',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  moduleQuadItem: {
    borderRadius: 10,
    width: '45%',
    height: '45%',
    backgroundColor: '#ffffff',
  },

  moduleGrid: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'stretch',
    justifyContent: 'space-between',
    justifyContent: 'center',
  },

  moduleGridItem: {
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#eaeaea',
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    resizeMode: 'center',
  },

  moduleGridLabel: {
    fontFamily: 'yekan_bold',
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 10,
    color: Theme.colorAscend,
  },
});
