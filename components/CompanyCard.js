import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CompanyCard = () => {
  return (
    <View style={styles.main}>
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/SpaceX_Crew_Dragon.jpg/800px-SpaceX_Crew_Dragon.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.launchText}>
        <Text style={styles.launchName}>Я - Название Пуска</Text>
        <Text style={styles.launchDescription}>
          Я - Описание пуска. Пару предложений, но только на английском языке
          {':('}
        </Text>
      </View>
    </View>
  );
};

export default CompanyCard;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: 320,
    //paddingVertical: 3,
    paddingHorizontal: 1,
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,

    alignItems: 'center',
    justifyContent: 'space-between',

    marginVertical: 3,
  },
  launchName: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  launchDescription: {
    color: 'white',
    fontSize: 11,
  },
  image: {
    height: 90,
    width: 90,
  },
  launchText: { width: '70%', height: '100%' },
});
