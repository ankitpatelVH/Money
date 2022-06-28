import {moneyReducerState} from './interface';
import type from './type';

const initialState = {
  moneyData: [],
};
const moneyReducer = (state: moneyReducerState = initialState, action: any) => {
  switch (action.type) {
    case type.fetchMovementData:
      return {
        ...state,
        moneyData: action.payload,
      };
    default:
      return state;
  }
};

export default moneyReducer;
