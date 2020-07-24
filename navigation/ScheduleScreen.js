import React from 'react';
import {
  View,
  BackgroundImage,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import { LaunchCard } from '@components';
import Screen from './Screen';
import { connect } from 'react-redux';
import { actions } from '../storage/dataReducer';

class ScheduleScreen extends React.Component {
  state = {
    launches: this.props.state.launches,
  };

  forRender = (
    <View style={styles.main}>
      <TouchableHighlight onPress={this.props.fetchAll}>
        <Text style={{ color: 'white' }}>НАЖМИ МЕНЯ</Text>
      </TouchableHighlight>

      <FlatList
        data={ this.props.state.launchesи }
        renderItem={({ item }) => {
          return (
            <LaunchCard
              vehicle={item.vehicle.name}
              win_open={item.win_open}
              name={item.name}
              weather_icon={item.weather_icon}
            />
          );
        }}
      />
    </View>
  );

  render() {
    console.log('schedule SCREEN', this.state);
    return <Screen toRender={this.forRender} />;
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

const mapDispatch = (dispatch) => {
  return {
    fetchAll: () => {
      dispatch(actions.fetchData());
    },
  };
};

const mapState = (state) => {
  return {
    state: state,
  };
};
export default connect(mapState, mapDispatch)(ScheduleScreen);
