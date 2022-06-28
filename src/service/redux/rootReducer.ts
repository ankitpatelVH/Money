import {combineReducers} from 'redux';
import moneyReducer from './MoneyMovement/reducer';

const rootReducer = combineReducers({
  moneyReducer,
});
export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;
