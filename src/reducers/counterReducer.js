/* eslint-disable prettier/prettier */
import {INCREASE, DECREASE} from '../actions/type';

const initialState = 10;

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + action.payload;

    case DECREASE:
      return state - 10;

    default:
      return state;
  }
}
