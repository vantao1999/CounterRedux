/* eslint-disable prettier/prettier */

import {INCREASE, DECREASE} from './type';

export const counterIncrease = (num) => ({type: INCREASE, payload: num});
export const counterDecrease = () => ({type: DECREASE});
