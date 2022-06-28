import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {moneyArrayObj} from '../../service/redux/MoneyMovement/interface';
import {SvgCssUri} from 'react-native-svg';
import color from '../../utils/color';
import moment from 'moment';
const countryJson = require('../../utils/countryCurrency.json');
interface propType {
  item: moneyArrayObj;
  index: number;
  onClick: (item: moneyArrayObj) => void;
}

const MoneyMovementCard: React.FC<propType> = props => {
  return (
    <TouchableOpacity
      style={style.container}
      activeOpacity={0.7}
      onPress={() => props.onClick(props.item)}>
      <SvgCssUri
        width="50"
        height="50"
        uri="http://thenewcode.com/assets/svg/accessibility.svg"
      />
      <View style={style.secondView}>
        <Text style={style.nameText}>{props?.item?.name}</Text>
        <Text style={style.dateText}>
          {moment(props?.item?.created_at).fromNow()}
        </Text>
        <View style={style.rowView}>
          <View style={style.flexView}>
            <Text style={style.labelText}>Amount</Text>
            <Text style={style.valueText}>
              {countryJson[props?.item?.currency]?.symbol_native}
              {props?.item?.amount}
            </Text>
          </View>
          <View style={style.flexView}>
            <Text style={style.labelText}>Carbon Footprint</Text>
            <Text style={style.valueText}>
              {props?.item?.carbon_footprint || 'N/A'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MoneyMovementCard;

const style = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  secondView: {
    flex: 1,
    marginLeft: 16,
  },
  nameText: {
    fontSize: 16,
    color: color.black,
    lineHeight: 24,
    fontWeight: '700',
  },
  dateText: {
    fontSize: 12,
    color: color.lightGray,
    lineHeight: 20,
    fontWeight: '500',
  },
  rowView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  flexView: {
    flex: 1,
  },
  labelText: {
    fontSize: 12,
    color: color.labelGray,
    lineHeight: 20,
    fontWeight: '500',
  },
  valueText: {
    fontSize: 14,
    color: color.valueBlack,
    lineHeight: 20,
    fontWeight: 'bold',
  },
});
