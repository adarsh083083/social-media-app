import {View, Image, Text, StyleSheet} from 'react-native';
import {Colors} from '../../global';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';

const VoteStaticList = ({item}) => (
  <View style={styles.container}>
    <View style={styles.innerContainer}>
      <View
        style={{
          backgroundColor: '#313336',
          borderRadius: 30,
          marginBottom: 10,
          justifyContent: 'center',
          padding:8
        }}>
        <Image style={styles.imageStyle} source={item.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nameStyle}>{item.name}</Text>
        <Text style={styles.tagStyle}>{item.tag}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    marginHorizontal: CHANGE_BY_MOBILE_DPI(20),
  },
  imageStyle: {
    height: CHANGE_BY_MOBILE_DPI(24),
    width: CHANGE_BY_MOBILE_DPI(24),
  },
  textContainer: {
    marginLeft: 8,
  },
  nameStyle: {
    color: Colors.WHITE,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
  },
  tagStyle: {
    color: Colors.WHITE,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
});

export default VoteStaticList;
