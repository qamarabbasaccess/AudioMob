import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CHeader from '../../components/common/CHeader';
import CText from '../../components/common/CText';
import {colors, styles} from '../../themes';
import strings from '../../i18n/strings';
import {choseYourInterestData} from '../../api/constant';
import {ACCESS_TOKEN, moderateScale} from '../../common/constants';
import CButton from '../../components/common/CButton';
import {StackNav} from '../../navigation/NavigationKeys';
import {setAsyncStorageData} from '../../utils/helpers';

export default function ChoseYourInterest({navigation}) {
  const [selectedInterest, setSelectedInterest] = React.useState([]);

  const onPressContinue = async () => {
    await setAsyncStorageData(ACCESS_TOKEN, 'access_token');
    navigation.reset({
      index: 0,
      routes: [{name: StackNav.Drawer}],
    });
  };

  const onPressChoseInterest = item => {
    const index = selectedInterest.indexOf(item);
    if (index > -1) {
      setSelectedInterest(prev => prev.filter(itm => itm !== item));
    } else {
      setSelectedInterest(prev => [...prev, item]);
    }
  };

  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressChoseInterest(item)}
        style={[
          localStyles.chipsContainer,
          {
            backgroundColor: selectedInterest.includes(item)
              ? colors.primaryMain
              : colors.backgroundColor,
            borderColor: selectedInterest.includes(item)
              ? colors.primaryMain
              : colors.bColor,
          },
        ]}>
        <CText
          type={'M14'}
          color={
            selectedInterest.includes(item)
              ? colors.backgroundColor
              : colors.textSecondary
          }>
          {item}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={'Chose Your Interest'} />
      <ScrollView contentContainerStyle={styles.ph20}>
        <CText type={'M14'} color={colors.textSecondary} style={styles.mv10}>
          {strings.choseYourInterestDesc}
        </CText>
        <View style={localStyles.mainContainer}>
          {choseYourInterestData.map((itm, index) => (
            <RenderItem key={index} item={itm} />
          ))}
        </View>
      </ScrollView>
      <CButton
        title={strings.continue}
        onPress={onPressContinue}
        containerStyle={styles.m20}
      />
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  chipsContainer: {
    ...styles.rowCenter,
    ...styles.pv10,
    ...styles.ph20,
    borderRadius: moderateScale(20),
    borderWidth: moderateScale(1),
  },
  mainContainer: {
    ...styles.rowStart,
    ...styles.wrap,
    gap: moderateScale(15),
  },
});
