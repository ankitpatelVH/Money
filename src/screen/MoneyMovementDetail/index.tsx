import {ScrollView, View, Text} from 'react-native';
import React from 'react';
import {moneyMovementDetailProps} from './interface';
import style from './style';
import CustomStatusBar from '../../component/CustomStatusBar';
import Header from '../../component/Header';
import color from '../../utils/color';
import svgIcon from '../../assets/svgIcon';
import {SvgCssUri} from 'react-native-svg';
import moment from 'moment';
const countryJson = require('../../utils/countryCurrency.json');
const MoneyMovementDetail: React.FC<moneyMovementDetailProps> = props => {
  const {item} = props?.route?.params;
  return (
    <View style={style.container}>
      <CustomStatusBar backgroundColor={color.white} />
      <Header
        centerName={'Transaction Detail'}
        leftIcon={svgIcon.BackArrow}
        onLeftIconClick={() => props.navigation.goBack()}
        containerStyle={style.headerView}
      />
      <ScrollView
        contentContainerStyle={style.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={style.secondView}>
          <SvgCssUri
            width="150"
            height="150"
            uri="http://thenewcode.com/assets/svg/accessibility.svg"
          />
          <Text style={style.nameText}>{item?.name}</Text>
          <Text style={style.dateText}>
            {moment(item?.created_at).fromNow()}
          </Text>
          <View style={style.rowView}>
            <View style={style.flexView}>
              <Text style={style.labelText}>Amount</Text>
              <Text style={style.valueText}>
                {countryJson[item?.currency]?.symbol_native}
                {item?.amount}
              </Text>
            </View>
            <View style={style.flexView}>
              <Text style={style.labelText}>Carbon Footprint</Text>
              <Text style={style.valueText}>{item?.carbon_footprint}</Text>
            </View>
          </View>
          <View style={style.rowView}>
            <View style={style.flexView}>
              <Text style={style.labelText}>type</Text>
              <Text style={style.valueText}>{item?.type}</Text>
            </View>
            <View style={style.flexView}>
              <Text style={style.labelText}>category</Text>
              <Text style={style.valueText}>{item?.category}</Text>
            </View>
          </View>
          <View style={style.rowView}>
            <View style={style.flexView}>
              <Text style={style.labelText}>fees</Text>
              <Text style={style.valueText}>{item?.fees}</Text>
            </View>
            <View style={style.flexView}>
              <Text style={style.labelText}>status</Text>
              <Text style={style.valueText}>{item?.status}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MoneyMovementDetail;
