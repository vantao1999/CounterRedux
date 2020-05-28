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

/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import * as actions from './actions';
import {connect} from 'react-redux';

class Main extends Component {
  state = {
    color: 'red',
  };

  handleIncrease = () => {
    this.props.increase();
  };

  handleDecrease = () => {
    this.props.decrease();
  };

  render() {
    console.log(this.props);

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text style={styles.viewNum}>{this.props.counter}</Text>

        <Button
          title="Increase"
          textColor="#000"
          color={this.state.color}
          onPress={() => {
            this.props.increase(10);
            this.setState({color: 'blue'});
          }}
        />
        <Button title="Decrease" color="orange" onPress={this.handleDecrease} />
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
  viewNum: {
    alignSelf: 'center',
    marginBottom: 100,
    fontSize: 50,
  },
});
