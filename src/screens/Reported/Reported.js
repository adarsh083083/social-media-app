// import {View, Text, ScrollView, FlatList} from 'react-native';
// import React from 'react';
// import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
// import {styles} from './styles';
// import {Colors} from '../../global';
// import Gradient from '../../components/Gradient/Gradient';
// import HeaderComp from '../../components/HeaderComp/HeaderComp';
// import IMAGES from '../../global/images';
// import ItemReported from './ItemReported';
// import VideoComp from '../../components/Video/VideoComp';
// import ImageComp from '../../components/Image/ImageComp';
// import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
// import ProfileBlock from '../../components/ProfileBlock/ProfileBlock';

// const Reported = () => {
//   const data = [
//     {type: 'ItemReported', value: 1},
//     {type: 'ImageComp', value: 2},
//     {type: 'ItemReported', value: 3},
//     {type: 'ItemReported', value: 4},
//   ];
//   return (
//     <View style={styles.mainContainer}>
//       <FocusAwareStatusBar
//         barColor={Colors.PRIMARY_COLOR}
//         isLightBar={true}
//         isTopSpace={true}
//       />
//       <Gradient
//         children={
//           <View style={styles.flexContainer}>
//             <HeaderComp
//               reportedTitle={'Reported'}
//               image={IMAGES.Notification}
//               iconStyle={{width: 20, height: 20}}
//             />
//             <ScrollView
//               style={styles.mainContainer}
//               showsVerticalScrollIndicator={false}>
//               <ItemReported />
//               <View style={{marginTop: CHANGE_BY_MOBILE_DPI(32)}}>
//                 <ImageComp imageProfile={IMAGES.ProfilePicture} />
//                 <View style={{bottom: CHANGE_BY_MOBILE_DPI(120)}}>
//                   <ItemReported />
//                 </View>
//                 <View style={{bottom: CHANGE_BY_MOBILE_DPI(120)}}>
//                   <ProfileBlock />
//                 </View>
//               </View>
//             </ScrollView>
//           </View>
//         }
//       />
//     </View>
//   );
// };

// export default Reported;

import React from 'react';
import {View, FlatList} from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {styles} from './styles';
import {Colors} from '../../global';
import Gradient from '../../components/Gradient/Gradient';
import HeaderComp from '../../components/HeaderComp/HeaderComp';
import IMAGES from '../../global/images';
import ItemReported from './ItemReported';

const Reported = () => {
  const data = [
    {key: 'ItemReported1', type: 'ItemReported', value: 1},
    {key: 'ImageComp', type: 'ImageComp', value: 2},
    {key: 'ItemReported3', type: 'ItemReported', value: 3},
    {key: 'ItemReported4', type: 'ItemReported', value: 4},
  ];

  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar
        barColor={Colors.PRIMARY_COLOR}
        isLightBar={true}
        isTopSpace={true}
      />
      <Gradient
        children={
          <View style={styles.flexContainer}>
            <HeaderComp
              reportedTitle={'Reported'}
              image={IMAGES.Notification}
              iconStyle={{width: 20, height: 20}}
            />
            <FlatList
              data={data}
              renderItem={({item, index}) => (
                <ItemReported item={item} index={index} />
              )}
              keyExtractor={item => item.key}
              showsVerticalScrollIndicator={false}
            />
          </View>
        }
      />
    </View>
  );
};

export default Reported;
