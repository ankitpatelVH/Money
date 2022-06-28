import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {mainStackParamList} from '../../navigation/stack/MainStack';
import {moneyArrayObj} from '../../service/redux/MoneyMovement/interface';

export type moneyMovementDetailScreenProp = StackNavigationProp<
  mainStackParamList,
  'moneyMovementDetail'
>;
export interface moneyMovementDetailProps {
  navigation: moneyMovementDetailScreenProp;
  route: RouteProp<{params: {item: moneyArrayObj}}, 'params'>;
}
