import React from 'react';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { labelStyle } from '@common';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList
        {...props}
        labelStyle={labelStyle}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
