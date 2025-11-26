import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import DownloadComponent from '../../components/downloadComponent/DownloadComponent';
import {downloadData} from '../../api/constant';
import {colors, styles} from '../../themes';
import CText from '../../components/common/CText';
import {moderateScale} from '../../common/constants';
import CHeaderIcon from '../../components/common/CHeaderIcon';
import CButton from '../../components/common/CButton';
import {StackNav} from '../../navigation/NavigationKeys';

export default function PodCastDetail({route, navigation}) {
  const {item} = route.params;
  const [isFollow, setIsFollow] = React.useState(false);

  const onPressFollow = () => setIsFollow(!isFollow);

  const onPressPlay = () => navigation.navigate(StackNav.PodCastPlayer, {item});

  const renderDownLoadPodCast = ({item, index}) => (
    <DownloadComponent item={item} />
  );

  const renderHeader = () => {
    return (
      <View>
        <Image source={item.authorImg} style={localStyles.bannerImgStyle} />
        <View style={styles.rowSpaceBetween}>
          <CText type={'S24'} numberOfLines={1} style={styles.flex}>
            {item.title}
          </CText>
          <TouchableOpacity onPress={onPressPlay} style={styles.ph5}>
            <Ionicons
              name={'play-circle'}
              size={moderateScale(34)}
              color={colors.primaryMain}
            />
          </TouchableOpacity>
        </View>
        <CText type={'M12'} color={colors.textSecondary} numberOfLines={1}>
          {'Podcast by DayPodcast'}
        </CText>
        <CText
          type={'M14'}
          color={colors.textSecondary}
          style={styles.mt10}
          numberOfLines={2}>
          {
            'Joko Widolo welcomes comedians, actors, directors, writers, authors.. See More'
          }
        </CText>
        <CText type={'M12'} style={styles.mt5} numberOfLines={1}>
          {'2.5m listeners • 32 Episodes'}
        </CText>
        <View style={localStyles.btnContainer}>
          <CHeaderIcon
            icon={'bookmark-outline'}
            style={localStyles.iconContainer}
          />
          <CButton
            title={!isFollow ? strings.follow : strings.following}
            containerStyle={localStyles.btnStyle}
            onPress={onPressFollow}
          />
          <CHeaderIcon
            icon={'share-outline'}
            style={localStyles.iconContainer}
          />
        </View>
      </View>
    );
  };
  return (
    <CSafeAreaView>
      <CHeader title={strings.detailPodcast} navigation={navigation} />
      <FlatList
        data={downloadData}
        renderItem={renderDownLoadPodCast}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ph20}
        ListHeaderComponent={renderHeader}
      />
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  bannerImgStyle: {
    width: '60%',
    height: moderateScale(200),
    ...styles.selfCenter,
    ...styles.mv20,
    borderRadius: moderateScale(20),
  },
  btnContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mv20,
  },
  iconContainer: {
    ...styles.center,
    height: moderateScale(48),
    width: moderateScale(48),
    borderRadius: moderateScale(24),
  },
  btnStyle: {
    width: '48%',
  },
});
