import {StyleSheet} from 'react-native';
import color from '../../utils/color';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  headerView: {
    backgroundColor: color.white,
    borderBottomWidth: 1,
    borderBottomColor: color.backgroundGray,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  secondView: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
  },
  nameText: {
    fontSize: 20,
    color: color.black,
    lineHeight: 28,
    fontWeight: 'bold',
    marginTop: 15,
  },
  dateText: {
    fontSize: 14,
    color: color.lightGray,
    lineHeight: 20,
    fontWeight: '500',
    marginBottom: 20,
  },
  rowView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  flexView: {
    flex: 1,
  },
  labelText: {
    fontSize: 13,
    color: color.valueBlack,
    lineHeight: 22,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  valueText: {
    fontSize: 18,
    color: color.black,
    lineHeight: 26,
    textTransform: 'capitalize',
  },
});

export default style;
