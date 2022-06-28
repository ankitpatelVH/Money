import React, {memo} from 'react';
import {
  View,
  StatusBar,
  StatusBarProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
interface propType {
  statusBarProps?: StatusBarProps;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  backgroundColor?: string;
}
const CustomStatusBar: React.FC<propType> = props => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {height: insets.top, backgroundColor: props.backgroundColor},
        props.containerStyle,
      ]}>
      <StatusBar
        animated={true}
        backgroundColor={props.backgroundColor}
        barStyle={'dark-content'}
        {...props}
      />
    </View>
  );
};
CustomStatusBar.defaultProps = {
  backgroundColor: 'white',
};
export default memo(CustomStatusBar);
