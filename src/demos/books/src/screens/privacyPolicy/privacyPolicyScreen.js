import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Fonts, Sizes, } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import { Header } from '../../components/header';

const privacyPolicyList = [
    'Lorem ipsum dolor sit aconsectetu Sedpellentesque at scelerisque lacinia nulla tellus id dolor. Accumsan consectetur purus quis imperdufringultricephasellus. Ultricies vel leo lacus quisque proin. Blandit neclorem pulvinar elementum odio bibendum dictmalesuada. ermentum ridiculus massa aliquet id. Cursus augue',
    'Lorem ipsum dolor sit aconsectetu Sedpellentesque at scelerisque lacinia nulla tellus id dolor. Accumsan consectetur purus quis imperdufringultricephasellus. Ultricies vel leo lacus quisque proin. Blandit neclorem pulvinar elementum odio bibendum dictmalesuada. Turpis mi in ac habitant. Odio sit euismod  arcongue vestibulum aliquam. Et fames enim nullam etfacilisis aliquet. Lorem ultrices in fermentum ridiculus massa aliquet id. Cursus augue dictum purus egestas arcu',
    'Lorem ipsum dolor sit aconsectetu Sedpellentesque at scelerisque lacinia nulla tellus id dolor. Accumsan consectetur purus quis imperdufringultricephasellus. Ultricies vel leo lacus quisque proin. Blandit neclorem pulvinar elementum odio bibendum dictmalesuada. Turpis mi in ac habitant. Odio sit euismod  arcongue vestibulum aliquam. Et fames enim nullam etfacilisis aliquet. Lorem ultrices in fermentum ridiculus massa aliquet id. Cursus augue dictum purus egestas arcu',
    'Lorem ipsum dolor sit aconsectetu Sedpellentesque at scelerisque lacinia nulla tellus id dolor. Accumsan consectetur purus quis imperdufringultricephasellus. Ultricies vel leo lacus quisque proin. Blandit neclorem pulvinar elementum odio bibendum dictmalesuada. ermentum ridiculus massa aliquet id. Cursus augue',
    'Lorem ipsum dolor sit aconsectetu Sedpellentesque at scelerisque lacinia nulla tellus id dolor. Accumsan consectetur purus quis imperdufringultricephasellus. Ultricies vel leo lacus quisque proin. Blandit neclorem pulvinar elementum odio bibendum dictmalesuada. ermentum ridiculus massa aliquet id. Cursus augue',
    'Lorem ipsum dolor sit aconsectetu Sedpellentesque at scelerisque lacinia nulla tellus id dolor. Accumsan consectetur purus quis imperdufringultricephasellus. Ultricies vel leo lacus quisque proin. Blandit neclorem pulvinar elementum odio bibendum dictmalesuada. Turpis mi in ac habitant. Odio sit euismod  arcongue vestibulum aliquam. Et fames enim nullam etfacilisis aliquet. Lorem ultrices in fermentum ridiculus massa aliquet id. Cursus augue dictum purus egestas arcu',
];

const PrivacyPolicyScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header='Privacy policy' />
                {privacyPolicyInfo()}
            </View>
        </View>
    )

    function privacyPolicyInfo() {
        const renderItem = ({ item }) => (
            <Text style={styles.privacyTextStyle}>
                {item}
            </Text>
        )
        return (
            <FlatList
                data={privacyPolicyList}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: Sizes.fixPadding }}
            />
        )
    }
}

export default PrivacyPolicyScreen

const styles = StyleSheet.create({
    privacyTextStyle: {
        ...Fonts.grayColor14Medium,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding
    }
})