import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Gradient from '../../components/Gradient/Gradient';
import IMAGES from '../../global/images';
import { Colors } from '../../global';
import { useNavigation } from '@react-navigation/native';
import { ChallengeDetailsHooks } from './ChallengeDetailsHooks';
import PostComments from '../../components/PostComments/PostComments';
import { SCREEN_WIDTH } from '../../global/constant';

const ChallengeDetails = () => {
  const navigation = useNavigation();
  const { toggleOption, showOption } = ChallengeDetailsHooks();
  return (
    <View style={styles.mainContainer}>
      <Gradient
        children={
          <>
            <ScrollView onScrollBeginDrag={() => toggleOption(1)}>
              <View style={styles.headerContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.pop()}
                  style={styles.headerImge}>
                  <Image source={IMAGES.BackArrow} style={styles.imageStyle} />
                </TouchableOpacity>
                <Text style={styles.screenName}>Challenge</Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => toggleOption()}
                  style={styles.headerImge}>
                  <Image source={IMAGES.ThreeDots} style={styles.imageStyle} />
                </TouchableOpacity>
                {showOption && (
                  <View style={styles.optionContainer}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[styles.optionItem, styles.borderBottom]}>
                      <Text style={styles.para}>Share</Text>
                      <Image
                        source={IMAGES.ShareIcon}
                        style={styles.optionIcon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.optionItem}>
                      <Text style={styles.para}>Remove</Text>
                      <Image
                        source={IMAGES.DeleteIcon}
                        style={styles.optionIcon}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <Image
                source={IMAGES.ChallengeFrame}
                style={styles.challengeView}
              />
              <View style={styles.infoCard}>
                <View style={styles.w80}>
                  <Text style={styles.challengersInfo}>
                    Albertus{' '}
                    <Text style={{ color: Colors.MEDIUM_GRAY }}>did</Text>{' '}
                    Michiel's{' '}
                    <Text style={{ color: Colors.MEDIUM_GRAY }}>challenge</Text>
                  </Text>
                  <Text style={styles.subHeading}>
                    Jump with a jumping rope for 2 minutes without stopping
                  </Text>
                  <View style={styles.amoutRow}>
                    <Image
                      source={IMAGES.socialBloxLogo}
                      style={styles.logoIcon}
                    />
                    <Text style={styles.subHeading}>
                      84.56 <Text style={styles.grayPara}>$65.34</Text>
                    </Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity style={styles.profileSmall}>
                    <Image
                      source={IMAGES.UserProfile}
                      style={styles.imageStyle}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.profileBig}>
                    <Image
                      source={IMAGES.UserProfile}
                      style={styles.imageStyle}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.challengeDescContainer}>
                <Text style={styles.para}>
                  Short introduction from the challenge Lorem ipsum dolor sit
                  amet, onsectetur adipiscinia...adipisciniaculis nunc mg elit.
                  Nunc tincidunt facilisis libero, quis iaculis.
                </Text>
                <Text style={[styles.subHeading, styles.mt20]}>
                  Requirements:
                </Text>
                <View style={styles.amoutRow}>
                  <View style={styles.circleShape} />
                  <Text style={styles.para}>Jump without your shoes on</Text>
                </View>
                <View style={styles.amoutRow}>
                  <View style={styles.circleShape} />
                  <Text style={styles.para}>
                    2 minutes has to be visible on a stopwatch.
                  </Text>
                </View>
              </View>
              <ScrollView
                contentContainerStyle={{ width: SCREEN_WIDTH }}
                horizontal
                showsHorizontalScrollIndicator={false}>
                <View>
                  <FlatList
                    data={[1, 2, 3, 4]}
                    renderItem={() => <PostComments />}
                  />
                </View>
              </ScrollView>
            </ScrollView>
            <View style={styles.voteContainer}>
              <View style={styles.imageWrapper}>
                <Image source={IMAGES.Down_Graph} style={styles.voteIcon} />
              </View>
              <View style={styles.voteCounts}>
                <Text style={styles.grayPara}>Voted 10/15</Text>
                <View style={styles.progressWrapper}>
                  <View style={[styles.progressBar, { width: '60%' }]} />
                </View>
              </View>
              <View style={styles.imageWrapper}>
                <Image source={IMAGES.Rocket} style={styles.voteIcon} />
              </View>
            </View>
          </>
        }
      />
    </View>
  );
};

export default ChallengeDetails;
