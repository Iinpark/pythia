import React, { useRef } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

class Skeleton extends React.Component {
  state = {
    left: 10,
  };

  fadeIn = {
    easing: 'linear',
    iterationDelay: 1000,
    from: {
      left: '-100%',
    },
    to: {
      left: '100%',
    },
  };
  render() {
    return (
      <View
        style={[, s.container, { ...this.props.s }]}
        onPress={this.startAnimation}>
        <Animatable.View
          animation={this.fadeIn}
          duration={5000}
          iterationCount="infinite"
          style={s.shimmeringItem}>
          <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            colors={[
              'rgba(255,255,255,0)',
              'rgba(238,238,238,1)',
              'rgba(255,255,255,0)',
            ]}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 3,
            }}
          />
        </Animatable.View>
      </View>
    );
  }
}
const s = StyleSheet.create({
  container: {
    width: 100,
    height: 10,
    backgroundColor: 'rgba(255,255,255,0.3)',
    overflow: 'hidden',
    borderRadius: 3,
  },
  shimmeringItem: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
export default Skeleton;
