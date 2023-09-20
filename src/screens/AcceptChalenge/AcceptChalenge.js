import { View, Text, Image } from 'react-native';
import React from 'react';
import Gradient from '../../components/Gradient/Gradient';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import IMAGES from '../../global/images';
import { styles } from './styles';
import AppButton from '../../components/AppButton/AppButton';

const AcceptChalenge = () => {
  return (
    <Gradient>
      <CustomHeader
        style={styles.headerStyle}
        title="Challenge"
        backImage={IMAGES.BackArrow}
      />

      <View style={styles.innerContainer}>
        <View style={styles.boxStyle}>
          <View style={styles.textContainer}>
            <View style={styles.textBox}>
              <Text style={styles.textStyle}>{`Peter `}</Text>
              <Text style={styles.chalange}>{`challenged `}</Text>
              <Text style={styles.textStyle}>{`Peter`}</Text>
            </View>
            <Text
              style={
                styles.titleText
              }>{`Jump with a jumping rope for 2${'\n'}minutes without stopping`}</Text>
          </View>
          <View style={styles.imageContainer}>
            <View style={styles.topImage}>
              <Image style={styles.user2} source={IMAGES.User2} />
            </View>
            <View style={styles.bottomImage}>
              <Image style={styles.user1} source={IMAGES.User1} />
            </View>
          </View>
        </View>
        <View style={styles.logoContainer}>
          <View style={styles.logoView}>
            <View>
              <Image style={styles.logoStyle} source={IMAGES.SocialLogo} />
            </View>
            <View style={styles.valueStyle}>
              <Text style={styles.valueStyle2}>84.</Text>
              <Text style={styles.valueText}>56 $65.34</Text>
            </View>
          </View>
          <View style={styles.timer}>
            <Text style={styles.timerText}>6d 4h left</Text>
          </View>
        </View>
      </View>
      <View style={styles.introStyle}>
        <Text style={styles.innerTextStyle}>
          Short introduction from the challenge Lorem
        </Text>
        <Text style={styles.innerTextStyle}>
          psum dolor sit amet, onsectetur
        </Text>
        <Text style={styles.innerTextStyle}>
          adipiscinia...adipisciniaculis nunc mg elit. Nunc
        </Text>
        <Text style={styles.innerTextStyle}>
          tincidunt facilisis libero, quis quis iaculis.
        </Text>
        <Text style={styles.innerTextStyle}>iaculis</Text>
      </View>
      <View>
        <View style={styles.reqHeader}>
          <Text style={styles.titleStyle}>Requirements:</Text>
          <View style={styles.innerText}>
            <View style={styles.dotStyle}>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.innerTextStyle1}>
                Jump without your shoes on
              </Text>
            </View>
            <View style={styles.dotStyle}>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.innerTextStyle1}>
                2 minute has to be visible on a stopwatch
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.textTipStyle}>
        <Text style={styles.innerTextStyle}>
          Tip: upload your proof as fast as possible to allow the
        </Text>
        <Text style={styles.innerTextStyle}>community to validate!</Text>
      </View>
      <View style={styles.textTipStyle}>
        <Text style={styles.innerTextStyle}>
          After accepting or refusing this challenge the blockchain
        </Text>
        <Text style={styles.innerTextStyle}>
          will process your decision. it may take a few minutes
        </Text>
        <Text style={styles.innerTextStyle}>
          before your decision is published to all users.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.btnContainer}>
          <AppButton
            btnStyle={styles.btnStyle}
            btnTextStyle={styles.btnTextStyle}
            btnText="Accept this challenge"
          />
        </View>
        <View>
          <AppButton
            onPress={() =>
              navigation.navigate(ScreenNames.CREATE_ACCOUNT_WITH_EMAIL_SCREEN)
            }
            btnStyle={styles.btnStyle2}
            btnTextStyle={styles.btnTextStyle2}
            btnText="Refuse this challenge"
          />
        </View>
      </View>
    </Gradient>
  );
};

export default AcceptChalenge;
