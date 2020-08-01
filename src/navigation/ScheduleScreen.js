import React from 'react';
import {
  View,
  BackgroundImage,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import { LaunchCardCont } from '@containers';
import Screen from './Screen';
import { connect } from 'react-redux';
import { actions } from '../storage/dataReducer';

class ScheduleScreen extends React.Component {
  componentDidMount() {
    this.props.fetchAll();
  }

  render() {
    return (
      <Screen>
        <View style={styles.main}>
          <FlatList
            data={this.props.launches}
            renderItem={({ item }) => {
              console.log(item);
              return (
                <LaunchCardCont
                  key={item.id.toString()}
                  vehicle={item.vehicle.name}
                  win_open={item.win_open}
                  name={item.name}
                  weather_icon={item.weather_icon}
                  win_close={item.win_close}
                />
              );
            }}
          />
        </View>
      </Screen>
    );
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
    launches: state.launches,
  };
};
export default connect(mapState, mapDispatch)(ScheduleScreen);
