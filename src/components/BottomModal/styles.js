import { StyleSheet } from 'react-native';
import { Colors } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: CHANGE_BY_MOBILE_DPI(22),
  },
  modalView: {
    margin: 5,
    backgroundColor: '#151515',
    borderTopLeftRadius: CHANGE_BY_MOBILE_DPI(10),
    borderTopRightRadius: CHANGE_BY_MOBILE_DPI(10),
    height: CHANGE_BY_MOBILE_DPI(400),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    modalImageView: {
      flexDirection: 'row',
      marginTop: CHANGE_BY_MOBILE_DPI(16),
      marginBottom: CHANGE_BY_MOBILE_DPI(16),
      justifyContent: 'center',
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: CHANGE_BY_MOBILE_DPI(20),
    padding: CHANGE_BY_MOBILE_DPI(10),
    elevation: 2,
    width: '50%',
  },
  buttonOpen: {},
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: CHANGE_BY_MOBILE_DPI(15),
    textAlign: 'center',
  },
  smile: {
    height: CHANGE_BY_MOBILE_DPI(28),
    width: CHANGE_BY_MOBILE_DPI(28),
  },
  rateStyle: {
    justifyContent: 'center',
    marginLeft: CHANGE_BY_MOBILE_DPI(8),
  },
  textStyle: {
    color: Colors.WHITE,
  },
  borderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderStyle: {
    borderBottomWidth: CHANGE_BY_MOBILE_DPI(2),
    borderColor: '#AC3DF5',
    width: '90%',
  },
  listContainer: {
    marginTop: CHANGE_BY_MOBILE_DPI(16),
  },
  emojiStyle: {
    flexDirection: 'row',
    marginTop: CHANGE_BY_MOBILE_DPI(16),
    marginBottom: CHANGE_BY_MOBILE_DPI(16),
    justifyContent: 'center',
  },
});
