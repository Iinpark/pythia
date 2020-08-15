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
import { Skeleton, LaunchCardSkeleton } from '@components';
import Screen from './Screen';
import { connect } from 'react-redux';
import { actions } from '../storage/dataReducer';

class ScheduleScreen extends React.Component {
  componentDidMount() {
    this.props.fetchAll();
  }

  SkeletonPlaceholder = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

  render() {
    return (
      <Screen>
        <View style={styles.main}>
          {this.props.isLoading ? (
            <FlatList
              data={this.SkeletonPlaceholder}
              renderItem={() => {
                return <LaunchCardSkeleton />;
              }}
            />
          ) : (
            <FlatList
              data={this.props.launches}
              renderItem={({ item }) => {
                return (
                  <LaunchCardCont
                    key={item.name}
                    vehicle={item.vehicle.name}
                    win_open={item.win_open}
                    name={item.name}
                    weather_icon={item.weather_icon}
                    win_close={item.win_close}
                    isLoading={this.props.isLoading}
                  />
                );
              }}
            />
          )}
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
    isLoading: state.isLoading,
  };
};
export default connect(mapState, mapDispatch)(ScheduleScreen);
