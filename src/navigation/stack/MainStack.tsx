import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import screenName from '../../utils/screenName';
import MoneyMovement from '../../screen/MoneyMovement';
import {moneyArrayObj} from '../../service/redux/MoneyMovement/interface';
import MoneyMovementDetail from '../../screen/MoneyMovementDetail';

export type mainStackParamList = {
  moneyMovement: undefined;
  moneyMovementDetail: {item: moneyArrayObj};
};
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name={screenName.moneyMovement} component={MoneyMovement} />
      <Stack.Screen
        name={screenName.moneyMovementDetail}
        component={MoneyMovementDetail}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
