import {FlatList, StyleSheet} from 'react-native';
import React from 'react';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CHeader from '../../components/common/CHeader';
import {styles} from '../../themes';
import CHeaderIcon from '../../components/common/CHeaderIcon';
import {downloadData} from '../../api/constant';
import DownloadComponent from '../../components/downloadComponent/DownloadComponent';
import CText from '../../components/common/CText';

export default function Notification() {
  const RightIcon = () => <CHeaderIcon icon={'ellipsis-horizontal'} />;

  const renderItem = ({item, index}) => (
    <DownloadComponent item={item} key={index} />
  );

  const renderHeader = () => {
    return (
      <CText type={'S18'} style={styles.mv10}>
        {'New Podcast Release Today'}
      </CText>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={'Notification'} rightIcon={<RightIcon />} />
      <FlatList
        data={downloadData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ph20}
        ListHeaderComponent={renderHeader}
      />
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({});
