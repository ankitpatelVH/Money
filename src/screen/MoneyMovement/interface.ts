import {StackNavigationProp} from '@react-navigation/stack';
import {mainStackParamList} from '../../navigation/stack/MainStack';

export type moneyMovementScreenProp = StackNavigationProp<
  mainStackParamList,
  'moneyMovement'
>;
export interface moneyMovementProps {
  navigation: moneyMovementScreenProp;
}

export interface loaderState {
  fetch: boolean;
  refresh: boolean;
}
