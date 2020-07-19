import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { CompanyCard } from '@components';
import Screen from './Screen';

class CompaniesScreen extends Screen {
  forrRender = (
    <View style={style.main}>
      <CompanyCard />
    </View>
  );

   render() {
     return <Screen toRender={this.forrRender }/>;
   }
}

export default CompaniesScreen;

const style = StyleSheet.create({
  main: {
    flex: 1,
  },
});
