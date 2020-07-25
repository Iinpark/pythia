import React from 'react';
import RootRouter from './navigation/RootRouter';
import { Provider } from 'react-redux';
import { Storage } from './storage/storage';


export default function App() {
  return (
    <Provider store={Storage}>
      <RootRouter />
    </Provider>
  );
}
