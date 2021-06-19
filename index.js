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
// import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components'
import theme from './src/utils/theme'
const myStore = createStore(allReducers, applyMiddleware(thunk));
// const persistor = persistStore(myStore); 
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';


// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://yazilimisleri.com/graphql',
  cache: new InMemoryCache()
});



const Root = () => (
  <ApolloProvider client={client}>

    <Provider store={myStore}>

      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>

    </Provider>
  </ApolloProvider>
);
// myStore.subscribe(() => {
//   console.log(myStore.getState()?.cart.carts.items_qty);
// }); 

AppRegistry.registerComponent(appName, () => Root);


