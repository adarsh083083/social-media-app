import {StyleSheet} from 'react-native';
import { Fonts } from '../../../global';
 // import {Constant} from '../../global';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  alignItemCenter: {
    alignItems: 'center',
  },
  titleTextStyle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: Fonts.BOLD,
  },
  textStyle: {
    color: '#999A9C',
    fontSize: 28,
    fontFamily: Fonts.BOLD,
  },
  subTitleTextStyle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.MEDIUM,
    marginTop: 10,
  },
  descriptionStyle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.MEDIUM,
    textAlign: 'center',
    marginTop: 20,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  btnStyle: {
    backgroundColor: '#36343D',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  btnTextStyle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.SEMIBOLD,
  },
});

export default styles;
