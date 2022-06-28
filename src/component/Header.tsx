import React, {memo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import color from '../utils/color';

interface propType {
  leftIcon: React.ComponentType;
  centerName?: string;
  headerTextStyle?: StyleProp<TextStyle> | undefined;
  leftButtonStyle?: StyleProp<ViewStyle> | undefined;
  onLeftIconClick?: () => void;
  rightIconClick?: () => void;
  isText?: boolean;
  rightText?: string;
  containerStyle?: StyleProp<TextStyle> | undefined;
}

const Header: React.FC<propType> = props => {
  return (
    <View style={[style.containerStyle, props.containerStyle]}>
      <View style={style.rowView}>
        <View style={style.headerCenterView}>
          <Text style={[style.hearderName, props.headerTextStyle]}>
            {props.centerName}
          </Text>
        </View>
        <TouchableOpacity
          style={[style.leftButtonStyle, props.leftButtonStyle]}
          activeOpacity={0.7}
          onPress={props.onLeftIconClick}>
          <props.leftIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(Header);

const style = StyleSheet.create({
  containerStyle: {
    paddingVertical: 15,
  },
  rowView: {
    flexDirection: 'row',
  },
  headerCenterView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  hearderName: {
    fontSize: 16,
    lineHeight: 24,
    textTransform: 'capitalize',
    color: color.black,
    fontWeight: 'bold',
  },
  leftButtonStyle: {
    position: 'absolute',
    left: 0,
    paddingHorizontal: 15,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightView: {
    position: 'absolute',
    right: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  rightButtonText: {
    fontSize: 14,
    lineHeight: 15,
  },
});
