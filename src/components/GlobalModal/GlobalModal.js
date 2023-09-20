import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Clipboard,
  ImageBackground,
} from 'react-native';
import React, { useState } from 'react';
import { Colors, Constant, Fonts } from '../../global';
import Gradient from '../Gradient/Gradient';
import CrossSvg from '../../assets/svgs/CloseSvg.svg';
import CopySvg from '../../assets/svgs/Copy.svg';
import TickSvg from '../../assets/svgs/RightSvg.svg';
import DownloadSvg from '../../assets/svgs/DownloadSvg.svg';
import UploadSvg from '../../assets/svgs/UploadSvg.svg';
import CupSvg from '../../assets/svgs/CupSvg.svg';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import { challengeUser } from '../../global/arrays';
import IMAGES from '../../global/images';
import SearchComp from '../SearchComp/SearchComp';
import styless from './GlobalModalStyle';
import HeaderModal from '../HeaderModal/HeaderModal';
import SVG_IMAGES from '../../global/imagesSvg';

const GlobalModal = ({
  visibility,
  toggleModal = () => { },
  CreateChallange = () => { },
  Title,
  TitleSearch,
}) => {
  const [searchText, setSearchText] = useState('');
  const toggle = () => {
  };

  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(challengeUser);
  const [dataAvailable, setDataAvailable] = useState(true);

  const walletStaticData = [
    {
      name: 'Challenge completed',
      date: '16 sept. 2021',
      sblx: '+ 541.53 SBLX',
      dollar: '$12.69',
      svg: <TickSvg />,
    },
    {
      name: 'Deposit',
      date: '16 sept. 2021',
      sblx: '+ 541.53 SBLX',
      dollar: '$12.69',
      svg: <DownloadSvg />,
    },
    {
      name: 'Withdrawal',
      date: '16 sept. 2021',
      sblx: '+ 541.53 SBLX',
      dollar: '$12.69',
      svg: <UploadSvg />,
    },
    {
      name: 'Challenge completed',
      date: '16 sept. 2021',
      sblx: '+ 541.53 SBLX',
      dollar: '$12.69',
      svg: <TickSvg />,
    },
    {
      name: 'Reservation for challenge',
      date: '16 sept. 2021',
      sblx: '+ 541.53 SBLX',
      dollar: '$12.69',
      svg: <CupSvg />,
    },
    {
      name: 'Challenge completed',
      date: '16 sept. 2021',
      sblx: '+ 541.53 SBLX',
      dollar: '$12.69',
      svg: <TickSvg />,
    },
  ];
  const handleSearch = text => {
    setSearchValue(text);

    // Filter the data based on the search input
    const filtered = challengeUser.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );

    setFilteredData(filtered);
    setDataAvailable(filtered.length > 0);
  };
  const clearList = () => {
    setSearchValue('');
    setFilteredData([]);
  };

  const renderWalletLisiting = ({ item, index }) => {
    return (
      <View style={styles.walletContainer}>
        <View style={styles.flexDirection}>
          <View style={styles.marginRight}>{item.svg}</View>
          <View style={styles.widthStyle}>
            <Text style={styles.nameFontStyle} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.dateFontStyle}>{item.date}</Text>
          </View>
        </View>
        <View style={[styles.alignRight]}>
          <Text style={styles.sblxFontStyle}>{item.sblx}</Text>
          <Text style={styles.priceFontStyle}>{item.dollar}</Text>
        </View>
      </View>
    );
  };
  const renderUsersListing = ({ item }) => {
    return (
      <TouchableOpacity style={styless.listContainer}>
        <Image
          resizeMode="contain"
          source={item.image}
          style={styless.profileImage}
        />
        <View style={styless.titleContainer}>
          <Text style={styless.titleName}>{item.name}</Text>
          <Text style={styless.titleProfile}>{item.profile}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const closeModal = () => {
    toggleModal();
  };
  const copyToClipboard = () => {
    Clipboard.setString('0xBA2FBAB19114B2C75A989D16C350A2A9D40792FF');
  };
  return (
    <>
      {false ? (
        <View style={styless.challengeContainer}>
          <View style={styles.challengeContainer}>
            <View style={styles.headerContainer}>
              <HeaderModal
                title={'Create a challenge'}
                closeImage={IMAGES.Close}
              />
            </View>
            <View style={styless.searchContainer}>
              <View>
                <Text style={styless.searchTitle}>{TitleSearch}</Text>
              </View>
              <View style={styless.containerSearch}>
                <SearchComp
                  value={searchValue}
                  onChangeText={handleSearch}
                  searchImage={IMAGES.Search}
                  placeholder={'Search'}
                  placeholderTextColor={Colors.TEXT_COLOR_44}
                  onClearText={clearList}
                  toggleModal={toggle}
                  showClearIcon={searchValue.length > 0}
                />
                {searchText.length > 0 && (
                  <TouchableOpacity onPress={clearList}>
                    <Image source={IMAGES.Clear} style={styles.imageClear} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <View style={styless.dataContainer}>
              {dataAvailable ? (
                <FlatList data={filteredData} renderItem={renderUsersListing} />
              ) : (
                <Text style={styless.noUserTitle}>No user found</Text>
              )}
            </View>
          </View>
        </View>
      ) : (
        <Modal
          animationType="slide"
          transparent={true}
          visible={visibility}
          // presentationStyle="pageSheet"
          onRequestClose={closeModal}>
          <View style={styles.mainContainer}>
            <View style={styles.subContainer}>
              <Gradient
                children={
                  <View style={styles.modalContainer}>
                    <View style={styles.headerContainer}>
                      <Text style={styles.headerFontstyle}>Your wallet</Text>
                      <View style={styles.positionContainer}>
                        <TouchableOpacity onPress={toggleModal}>
                          <CrossSvg />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.walletCardContainer}>
                      <View style={styles.flexDirection}>
                        <Image
                          source={require('../../assets/images/SocialBloxicon.png')}
                          style={styles.imageStyle}
                        />
                        <View style={styles.marginLeftContainer}>
                          <Text style={styles.walletAmmountFontStyle}>
                            43445552.
                            <Text style={styles.afterDecimalFontStyle}>94</Text>
                          </Text>
                          <Text style={styles.dollarFontStyle}>$844.69</Text>
                        </View>
                      </View>
                      <Text style={styles.walletFontStyle}>wallet ID:</Text>
                      <View style={styles.copyConatiner}>
                        <View style={styles.flexContainer}>
                          <Text numberOfLines={2} style={styles.tokenFontStyle}>
                            0xBA2FBAB19114B2C75A989D16C350A2A9D40792FF
                          </Text>
                        </View>
                        <TouchableOpacity onPress={copyToClipboard}>
                          <CopySvg />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <FlatList
                      data={walletStaticData}
                      contentContainerStyle={styles.contentContainerStyle}
                      renderItem={renderWalletLisiting}
                    />
                  </View>
                }
              />
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default GlobalModal;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.BLACK + 10,
  },
  subContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalContainer: {
    height: Constant.SCREEN_HEIGHT / 1.07,
    borderTopRightRadius: Constant.CHANGE_BY_MOBILE_DPI(16),
    borderTopLeftRadius: Constant.CHANGE_BY_MOBILE_DPI(16),
    backgroundColor: Colors.PRIMARY_COLOR,
    elevation: 2,
  },
  headerFontstyle: {
    fontSize: Fonts.FONT_SIZE_20,
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  positionContainer: {
    position: 'absolute',
    right: Constant.CHANGE_BY_MOBILE_DPI(20),
    top: Constant.CHANGE_BY_MOBILE_DPI(0),
  },
  walletCardContainer: {
    backgroundColor: Colors.SHIP_GREY,
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(16),
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(20),
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    padding: Constant.CHANGE_BY_MOBILE_DPI(15),
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(15),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(20),
  },
  imageStyle: {
    height: Constant.CHANGE_BY_MOBILE_DPI(32),
    width: Constant.CHANGE_BY_MOBILE_DPI(32),
  },
  walletAmmountFontStyle: {
    fontSize: Fonts.FONT_SIZE_22,
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.WHITE,
  },
  afterDecimalFontStyle: {
    fontSize: Fonts.FONT_SIZE_15,
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.WHITE,
  },
  dollarFontStyle: {
    fontSize: Fonts.FONT_SIZE_14,
    fontFamily: Fonts.LIGHT,
    color: Colors.WHITE,
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginLeftContainer: {
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(10),
  },
  walletFontStyle: {
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.MEDIUM,
    color: Colors.WHITE,
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(7),
  },
  copyConatiner: {
    backgroundColor: Colors.MULLED_WINE,
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(8),
    paddingHorizontal: Constant.CHANGE_BY_MOBILE_DPI(15),
    paddingVertical: Constant.CHANGE_BY_MOBILE_DPI(5),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Constant.CHANGE_BY_MOBILE_DPI(5),
  },
  flexContainer: {
    flex: 1,
  },
  tokenFontStyle: {
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.LIGHT,
    color: Colors.WHITE,
  },
  walletContainer: {
    backgroundColor: Colors.CHARCOAL,
    borderRadius: Constant.CHANGE_BY_MOBILE_DPI(16),
    padding: Constant.CHANGE_BY_MOBILE_DPI(15),
    marginBottom: Constant.CHANGE_BY_MOBILE_DPI(10),
    marginHorizontal: Constant.CHANGE_BY_MOBILE_DPI(20),
    paddingTop: Constant.CHANGE_BY_MOBILE_DPI(17),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  nameFontStyle: {
    fontSize: Fonts.FONT_SIZE_13,
    fontFamily: Fonts.LIGHT,
    color: Colors.WHITE,
  },
  dateFontStyle: {
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.LIGHT,
    color: Colors.STAR_DUST,
    includeFontPadding: true,
  },
  sblxFontStyle: {
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.SEMIBOLD,
    color: Colors.VIVID_GREEN,
  },
  priceFontStyle: {
    fontSize: Fonts.FONT_SIZE_12,
    fontFamily: Fonts.LIGHT,
    color: Colors.STAR_DUST,
    includeFontPadding: true,
  },
  marginRight: {
    marginRight: Constant.CHANGE_BY_MOBILE_DPI(18),
    marginLeft: Constant.CHANGE_BY_MOBILE_DPI(5),
  },
  contentContainerStyle: {},
  alignRight: {
    alignItems: 'flex-end',
  },
  widthStyle: {
    width: Constant.SCREEN_WIDTH / 2.19,
  },
  challengeContainer: {
    flex: 1,
    borderTopLeftRadius: CHANGE_BY_MOBILE_DPI(24),
    borderTopRightRadius: CHANGE_BY_MOBILE_DPI(24),
  },
  challengeHeader: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: CHANGE_BY_MOBILE_DPI(25),
  },
  innerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    marginTop: CHANGE_BY_MOBILE_DPI(20),
    marginHorizontal: CHANGE_BY_MOBILE_DPI(16),
  },
});
