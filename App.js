import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {

};
const reducer = (state = initialState, action) => {
  switch (action.type) {
  }
  return state
};
const store = createStore(reducer);

export default function App() {
  return (
      <Provider store={store}>
      <Home/>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
