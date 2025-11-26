import { ScrollView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import { Colors, Fonts, Sizes } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import { Header } from '../../components/header';

const termsAndConditionsList = [
    'Lorem ipsum dolor sit aconsectetu Sedpellentesque at scelerisque lacinia nulla tellus id dolor. Accumsan consectetur purus quis imperdufrin gultricephasellus. Ultricies vel leo lacus quisque proin. Blandit neclorem pulvinar elementum odio bibendum dictmalesuada. ermentum ridiculus massa aliquet id. Cursus augue',
    'Lorem ipsum dolor sit aconsectetu Sedpellentesque at scelerisque lacinia nulla tellus id dolor. Accumsan consectetur purus quis imperdufrin gultricephasellus. Ultricies vel leo lacus quisque proin. Blandit neclorem pulvinar elementum odio bibendum dictmalesuada. Turpis mi in ac habitant. Odio sit euismod  arcongue vestibulum aliquam. Et fames enim nullam etfacilisis aliquet. Lorem ultrices in fermentum ridiculus massa aliquet id. Cursus augue dictum purus egestas arcu',
    'Lorem ipsum dolor sit aconsectetu Sedpellentesque at scelerisque lacinia nulla tellus id dolor. Accumsan consectetur purus quis imperdufrin gultricephasellus. Ultricies vel leo lacus quisque proin. Blandit neclorem pulvinar elementum odio bibendum dictmalesuada. Turpis mi in ac habitant. Odio sit euismod  arcongue vestibulum aliquam. Et fames enim nullam etfacilisis aliquet. Lorem ultrices in fermentum ridiculus massa aliquet id. Cursus augue dictum purus egestas arcu',
    'Lorem ipsum dolor sit aconsectetu Sedpellentesque at scelerisque lacinia nulla tellus id dolor. Accumsan consectetur purus quis imperdufrin gultricephasellus. Ultricies vel leo lacus quisque proin. Blandit neclorem pulvinar elementum odio bibendum dictmalesuada. ermentum ridiculus massa aliquet id. Cursus augue',
    'Lorem ipsum dolor sit aconsectetu Sedpellentesque at scelerisque lacinia nulla tellus id dolor. Accumsan consectetur purus quis imperdufrin gultricephasellus. Ultricies vel leo lacus quisque proin. Blandit neclorem pulvinar elementum odio bibendum dictmalesuada. ermentum ridiculus massa aliquet id. Cursus augue',
    'Lorem ipsum dolor sit aconsectetu Sedpellentesque at scelerisque lacinia nulla tellus id dolor. Accumsan consectetur purus quis imperdufrin gultricephasellus. Ultricies vel leo lacus quisque proin. Blandit neclorem pulvinar elementum odio bibendum dictmalesuada. Turpis mi in ac habitant. Odio sit euismod  arcongue vestibulum aliquam. Et fames enim nullam etfacilisis aliquet. Lorem ultrices in fermentum ridiculus massa aliquet id. Cursus augue dictum purus egestas arcu',
];

const TermsAndConditionScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header='Terms & condition' />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {imageView()}
                    {termsAndConditionsInfo()}
                </ScrollView>
            </View>
        </View>
    )

    function termsAndConditionsInfo() {
        const renderItem = ({ item }) => (
            <Text style={styles.termsAndConditionTextStyle}>
                {item}
            </Text>
        )
        return (
            <FlatList
                data={termsAndConditionsList}
                renderItem={renderItem}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.0, paddingBottom: Sizes.fixPadding }}
            />
        )
    }

    function imageView() {
        return (
            <Image
                source={require('../../assets/images/termsAndCondition.png')}
                style={{ width: '100%', height: 160.0 }}
            />
        )
    }
}

export default TermsAndConditionScreen

const styles = StyleSheet.create({
    termsAndConditionTextStyle: {
        ...Fonts.grayColor14Medium,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding
    }
})