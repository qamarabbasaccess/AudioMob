import {FlatList, View} from 'react-native';
import React from 'react';

// Local Imports
import CText from '../../components/common/CText';
import {styles} from '../../themes';
import {privacyPolicyData} from '../../api/constant';
import strings from '../../i18n/strings';
import CHeader from '../../components/common/CHeader';

export default function PrivacyPolicy() {
  const RenderData = ({item}) => {
    return (
      <View style={styles.mt15}>
        <CText type={'b18'}>{item.title}</CText>
        <CText type={'r16'} style={styles.mv10}>
          {item.description}
        </CText>
      </View>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={strings.privacyPolicy} />
      <FlatList
        data={privacyPolicyData}
        renderItem={RenderData}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ph20}
      />
    </CSafeAreaView>
  );
}
