/**
 * @format
 */

import 'react-native';
import React from 'react';
import MoneyMovement from '../src/screen/MoneyMovement';
import {Provider} from 'react-redux';
import store from '../src/service/redux/store';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const persistStore = store();
// snapshot testing
const Wrapper = () => {
  return (
    <Provider store={persistStore.store}>
      <MoneyMovement navigation={null} />
    </Provider>
  );
};

it('renders correctly', () => {
  const moneyMovement = renderer.create(<Wrapper />).toJSON();
  expect(moneyMovement).toMatchSnapshot();
});

//api testing
it('Api check of fetch money movement', async () => {
  // jest.fn().mockImplementation(() => {
  const moneyMovement1 = renderer.create(<Wrapper />).toTree()?.rendered;
  console.log('moneyMovement', moneyMovement1);
  // });
});
