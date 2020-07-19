import React from 'react';
import { AppHeader } from '@components';
import { DrawerActions } from '@react-navigation/native';

const AppHeaderCont = ({ navigation }) => {
  return (
    <AppHeader
      toggleDrawer={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    />
  );
};

export default AppHeaderCont;
