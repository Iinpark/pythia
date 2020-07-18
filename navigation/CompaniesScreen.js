import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { CompanyCard } from '@components';

export const CompaniesScreen = () => {
  return (
    <View style={style.main}>
      <CompanyCard />
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
  },
});
