import {FlatList, View} from 'react-native';
import React from 'react';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import {downloadData, pendingDownloadData} from '../../api/constant';
import {styles} from '../../themes';
import PendingDownloadComponent from '../../components/downloadComponent/PendingDownloadComponent';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import CSubHeader from '../../components/common/CSubHeader';
import DownloadComponent from '../../components/downloadComponent/DownloadComponent';

export default function DownloadTab() {
  const renderPodCast = ({item, index}) => (
    <PendingDownloadComponent item={item} />
  );

  const renderHeader = () => (
    <View>
      <CText type={'S18'} style={styles.mv10}>
        {strings.pendingDownload}
      </CText>
      <FlatList
        data={pendingDownloadData}
        renderItem={renderPodCast}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.justifyBetween}
        scrollEnabled={false}
      />
      <CSubHeader title={strings.yourDownload} style={styles.mt20} />
    </View>
  );

  const renderDownLoadPodCast = ({item, index}) => (
    <DownloadComponent item={item} isDownload={false} />
  );

  return (
    <CSafeAreaView>
      <CHeader title={strings.download} />
      <FlatList
        data={downloadData}
        renderItem={renderDownLoadPodCast}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.ph20, styles.pb10]}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={<View style={styles.mv30} />}
      />
    </CSafeAreaView>
  );
}
