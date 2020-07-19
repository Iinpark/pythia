import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
//screens
import CompaniesScreen from './CompaniesScreen';
import ScheduleScreen from './ScheduleScreen';



const Drawer = createDrawerNavigator();

const RootRouter = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="CompaniesScreen">
        <Drawer.Screen name="CompaniesScreen" component={CompaniesScreen} />
        <Drawer.Screen name="ScheduleScreen" component={ScheduleScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
