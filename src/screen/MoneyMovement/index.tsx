import {FlatList, RefreshControl} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {loaderState, moneyMovementProps} from './interface';
import style from './style';
import {get} from '../../service/config/request';
import constant from '../../service/config/constant';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMoneyMovementData} from '../../service/redux/MoneyMovement/action';
import {rootState} from '../../service/redux/rootReducer';
import CustomStatusBar from '../../component/CustomStatusBar';
import Header from '../../component/Header';
import MoneyMovementCard from '../../component/card/MoneyMovementCard';
import color from '../../utils/color';
import {moneyArrayObj} from '../../service/redux/MoneyMovement/interface';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const MoneyMovement: React.FC<moneyMovementProps> = props => {
  const dispatch = useDispatch();
  const money = useSelector((state: rootState) => state.moneyReducer);
  const [loader, setLoader] = useState<loaderState>({
    fetch: money?.moneyData?.length == 0 ? true : false,
    refresh: false,
  });
  useEffect(() => {
    fetchMoneyDataFromServer();
  }, []);

  const fetchMoneyDataFromServer = () => {
    get(constant.gitDataLink)
      .then((response: any) => {
        dispatch(fetchMoneyMovementData(response?.transactions));
        setLoader({fetch: false, refresh: false});
      })
      .catch(error => {
        setLoader({fetch: false, refresh: false});
        console.log('Error to fetch data from git link', error);
      });
  };

  const onFlatListItemClicked = useCallback((item: moneyArrayObj) => {
    props?.navigation?.navigate('moneyMovementDetail', {item: item});
  }, []);

  return (
    <SafeAreaProvider style={style.container}>
      <CustomStatusBar backgroundColor={color.white} />
      <Header
        centerName="Money Movements view"
        leftIcon={() => <></>}
        containerStyle={style.headerView}
      />
      <FlatList
        data={money.moneyData}
        refreshControl={
          <RefreshControl
            refreshing={loader.refresh}
            colors={[color.black]}
            onRefresh={() => {
              setLoader({fetch: false, refresh: true});
              fetchMoneyDataFromServer();
            }}
          />
        }
        contentContainerStyle={style.flatListContainerStyle}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <MoneyMovementCard
            item={item}
            index={index}
            onClick={onFlatListItemClicked}
          />
        )}
      />
    </SafeAreaProvider>
  );
};

export default MoneyMovement;
