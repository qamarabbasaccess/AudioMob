// Library import
import {
  FlatList,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

// Local import
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CText from '../../components/common/CText';
import {colors, styles} from '../../themes';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';

export default Setting = ({navigation}) => {
  const [isEnabled, setIsEnabled] = React.useState({
    pushNotification: true,
    location: false,
    downloadOverCellular: false,
    autoplay: true,
  });

  const onPressSwitch = key => {
    setIsEnabled({
      ...isEnabled,
      [key]: !isEnabled[key],
    });
  };

  const SecurityData = [
    {
      title: strings.pushNotification,
      rightIcon: true,
      value: isEnabled.pushNotification,
      toggleSwitch: () => onPressSwitch(strings.pushNotification),
    },
    {
      title: strings.location,
      rightIcon: true,
      value: isEnabled.location,
      toggleSwitch: () => onPressSwitch('location'),
    },
    {
      title: strings.downloadOverCellular,
      rightIcon: true,
      value: isEnabled.downloadOverCellular,
      toggleSwitch: () => onPressSwitch('downloadOverCellular'),
    },
    {
      title: strings.autoplay,
      rightIcon: true,
      value: isEnabled.autoplay,
      toggleSwitch: () => onPressSwitch('autoplay'),
    },
    {
      title: strings.language,
      subTitle: 'English',
    },
  ];

  const RenderData = data => {
    return (
      <TouchableOpacity style={localStyles.settingsContainer}>
        <CText type="M16">{data.item.title}</CText>
        <View style={localStyles.rightContainer}>
          {!!data?.item?.rightIcon ? (
            <Switch
              trackColor={{
                false: colors.textGray,
                true: colors.primaryMain,
              }}
              thumbColor={colors.backgroundColor}
              onValueChange={data?.item?.toggleSwitch}
              value={data?.item?.value}
            />
          ) : (
            <CText type="M14">{data?.item?.subTitle}</CText>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={strings.setting} />
      <View style={styles.ph20}>
        <CText type="B16" style={styles.mt20}>
          {strings.profile}
        </CText>
        <FlatList
          data={SecurityData}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <RenderData item={item} />}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </CSafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  settingsContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.pv10,
  },
  rightContainer: {
    ...styles.flex,
    ...styles.rowEnd,
  },
  btnContainer: {
    ...styles.center,
    width: '100%',
    alignSelf: 'center',
    ...styles.mt40,
  },
});
