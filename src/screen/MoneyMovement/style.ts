import {StyleSheet} from 'react-native';
import color from '../../utils/color';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundGray,
  },
  headerView: {
    backgroundColor: color.white,
    borderBottomWidth: 1,
    borderBottomColor: color.backgroundGray,
  },
  flatListContainerStyle: {
    flexGrow: 1,
    paddingTop: 5,
  },
});

export default style;
