/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import Router from './src/router';
import { name as appName } from './app.json';
import allReducers from './src/reducer'
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components'
import theme from './src/utils/theme'
const myStore = createStore(allReducers, applyMiddleware(thunk));
const persistor = persistStore(myStore); 

const Root = () => (  
  <Provider store={myStore}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </PersistGate> 
  </Provider>   
);  
  
AppRegistry.registerComponent(appName, () => Root);


