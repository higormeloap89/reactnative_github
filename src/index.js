import React from 'react';
import './config/Reactotronconfig';
import {StatusBar} from 'react-native';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <Routes />
    </>
  );
}
