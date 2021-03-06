import { Router, Scene } from 'react-native-router-flux';
import Home from './src/Home';
import Filters from './src/Filters';
import Price from './src/Price';
import Categories from './src/Categories';
import Type from './src/Type';
import Rating from './src/Rating';
import React, { Component } from 'react';
import { Platform } from 'react-native';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene
          key="root"
          navigationBarStyle={{
            backgroundColor: '#162331',
            borderColor: '#162331',
            borderBottomColor: 'transparent',
          }}
          titleStyle={{
            color: 'white',
            ...Platform.select({
              android: { marginTop: 10 },
            }),
          }}
        >
          <Scene
            key="Home"
            component={Home}
            title="AEKI"
            initial={true}
            hideBackImage={Platform.OS === 'android'}
          />
          <Scene
            key="Filters"
            component={Filters}
            title="Filters"
            hideBackImage={Platform.OS === 'android'}
          />
          <Scene
            key="Categories"
            component={Categories}
            title="Categories"
            hideBackImage={Platform.OS === 'android'}
          />
          <Scene
            key="Type"
            component={Type}
            title="Type"
            duration={1}
            hideBackImage={Platform.OS === 'android'}
          />
          <Scene
            key="Price"
            component={Price}
            title="Price"
            duration={1}
            hideBackImage={Platform.OS === 'android'}
          />
          <Scene
            key="Rating"
            component={Rating}
            title="Ratings"
            duration={1}
            hideBackImage={Platform.OS === 'android'}
          />
        </Scene>
      </Router>
    );
  }
}
