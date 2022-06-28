import {moneyArrayObj} from './interface';
import type from './type';

const fetchMoneyMovementData = (payload: Array<moneyArrayObj>) => ({
  type: type.fetchMovementData,
  payload,
});
export {fetchMoneyMovementData};
