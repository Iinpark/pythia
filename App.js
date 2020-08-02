import React from 'react';
import RootRouter from './src/navigation/RootRouter';
import { Provider } from 'react-redux';
import { Storage } from './src/storage/storage';

export default function App() {
  return (
    <Provider store={Storage}>
      <RootRouter />
    </Provider>
  );
}
