import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { AppHeaderCont } from '@containers';
//screens
import CompaniesScreen from './CompaniesScreen';
import ScheduleScreen from './ScheduleScreen';
import LaunchScreen from './LaunchScreen';

const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();
const LaunchStack = createStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="CompaniesScreen"
      drawerType="back"
      backBehavior="none">
      <Drawer.Screen name="CompaniesScreen" component={CompaniesScreen} />
      <Drawer.Screen name="ScheduleScreen" component={ScheduleScreen} />
    </Drawer.Navigator>
  );
};

const LaunchStackNavigator = () => {
  return (
    <LaunchStack.Navigator>
      <LaunchStack.Screen name="LaunchScreen" component={LaunchScreen} />
    </LaunchStack.Navigator>
  );
};

const RootRouter = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Drawer"
        headerShown={false}
        headerMode="screen"
        screenOptions={{
          header: ({ navigation }) => {
          return <AppHeaderCont navigation={navigation} />;
          },
        }}>
        <MainStack.Screen name="LaunchStack" component={LaunchStackNavigator} />
        <MainStack.Screen name="Drawer" component={DrawerNavigator} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
