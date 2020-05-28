/* eslint-disable prettier/prettier */

// import React, {Component} from 'react';
// import {Text, View} from 'react-native';
// import {connect} from 'react-redux';

// class Home extends Component {
//   render() {
//     return (
//       <View>
//         <Text> {this.props.root} </Text>
//       </View>
//     );
//   }
// }

// const mapState = (state) => ({
//   root: state.root,
// });

// export default connect(mapState)(Home);

import React, {Component} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import * as actions from './actions';
import {connect} from 'react-redux';

class Main extends Component {
  state = {
    color: 'red',
    color1: 'green',
  };

  handleIncrease = () => {
    this.props.increase(10);
    this.setState({color: 'blue'});
  };

  handleDecrease = () => {
    this.props.decrease();
    this.setState({color1: 'orange'});
  };

  render() {
    console.log(this.props);

    return (
      <View style={styles.container}>
        <Text style={styles.viewNum}>{this.props.counter}</Text>
        <Button
          title="Increase"
          textColor="#000"
          color={this.state.color}
          onPress={this.handleIncrease}
        />
        <Button
          title="Decrease"
          color={this.state.color1}
          onPress={this.handleDecrease}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increase: (num) => dispatch(actions.counterIncrease(num)),
  decrease: () => dispatch(actions.counterDecrease()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  viewNum: {
    alignSelf: 'center',
    marginBottom: 100,
    fontSize: 50,
  },
});
