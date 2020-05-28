/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Main from './Main';
// import {createStore} from 'redux';
import store from './store/store';

// let store = createStore(() => ({
//   root: 'home root',
// }));

export class index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default index;

/* eslint-disable prettier/prettier */
// import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import Main from './Main';
// import {Provider} from 'react-redux';
// import store from './store/store';
// // import { createStore } from 'redux';

// // const store = createStore({});

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Main />
//     </Provider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App();
