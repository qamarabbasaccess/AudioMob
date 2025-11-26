import React, {useState, useRef, useCallback} from 'react';
import {StyleSheet, FlatList, Image, View} from 'react-native';

// Local Imports
import {
  APP_OPEN_FIRST_TIME,
  getHeight,
  moderateScale,
  screenHeight,
  screenWidth,
} from '../../common/constants';
import CButton from '../../components/common/CButton';
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import {StackNav} from '../../navigation/NavigationKeys';
import {colors, styles} from '../../themes';
import images from '../../assets/images';
import {setAsyncStorageData} from '../../utils/helpers';
import {AppLogoIcon} from '../../assets/svgs';

export default function OnBoarding({navigation}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  const OnBoardingSlide = [
    {
      image: images.onBoarding1,
    },
    {
      image: images.onBoarding2,
    },
    {
      image: images.onBoarding3,
    },
  ];

  const renderTitleAndSubTitle = () => {
    switch (currentIndex) {
      case 0:
        return {
          title: 'Welcome to our podcast! We hope you find this ',
          subTitle: ' interesting',
        };
      case 1:
        return {
          title: 'Listening to ',
          subTitle: ' makes the brain smart',
        };
      case 2:
        return {
          title: 'We Found  For You 2,928 New ',
          subTitle: ' Podcasts',
        };
      default:
        return {
          title: 'Welcome to our podcast! We hope you find this ',
          subTitle: ' interesting',
        };
    }
  };

  const _onViewableItemsChanged = useCallback(({viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index);
  }, []);
  const _viewabilityConfig = {itemVisiblePercentThreshold: 50};

  const onPressRightArrow = async () => {
    await setAsyncStorageData(APP_OPEN_FIRST_TIME, 'firstTimeOpen');
    navigation.reset({
      index: 0,
      routes: [{name: StackNav.Connect}],
    });
  };

  const onPressContinue = () => {
    slideRef.current._listRef._scrollRef.scrollTo({
      x: screenWidth * (currentIndex + 1),
    });
  };

  const onPressSkip = () => {
    slideRef.current._listRef._scrollRef.scrollTo({
      x: screenWidth * 3,
    });
  };

  const RenderOnboardingItem = useCallback(
    ({item, index}) => {
      return (
        <View style={localStyles.rendetItemConatiner}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={localStyles.imageStyle}
          />
        </View>
      );
    },
    [OnBoardingSlide],
  );

  return (
    <CSafeAreaView>
      <View style={localStyles.headerStyle}>
        <View style={styles.rowCenter}>
          <AppLogoIcon width={moderateScale(42)} height={moderateScale(42)} />
          <CText type={'b24'} style={styles.ml10} align={'center'}>
            {strings.cocast}
          </CText>
        </View>
        <View style={styles.rowStart}>
          {OnBoardingSlide.map((_, index) => (
            <View
              style={[
                localStyles.bottomIndicatorStyle,
                {
                  backgroundColor:
                    index == currentIndex
                      ? colors.primaryMain
                      : colors.textTertiary,
                },
              ]}
            />
          ))}
        </View>
      </View>
      <FlatList
        data={OnBoardingSlide}
        ref={slideRef}
        renderItem={({item, index}) => (
          <RenderOnboardingItem item={item} index={index} />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
        onViewableItemsChanged={_onViewableItemsChanged}
        viewabilityConfig={_viewabilityConfig}
        pagingEnabled
      />
      <View style={localStyles.bottomContainer}>
        <CText type={'S32'} style={styles.mt10} align={'left'}>
          {renderTitleAndSubTitle().title}
          <CText type={'S32'} align={'left'} color={colors.primaryMain}>
            {'Podcast'}
          </CText>
          <CText type={'S32'} align={'left'}>
            {renderTitleAndSubTitle().subTitle}
          </CText>
        </CText>
        {currentIndex < 2 ? (
          <View style={localStyles.btnContainer}>
            <CButton
              title={strings.skip}
              type={'M14'}
              bgColor={colors.backgroundColor}
              containerStyle={localStyles.skipBtnContainer}
              onPress={onPressSkip}
            />
            <CButton
              title={strings.next}
              type={'M14'}
              bgColor={colors.backgroundColor}
              containerStyle={localStyles.skipBtnContainer}
              onPress={onPressContinue}
            />
          </View>
        ) : (
          <CButton
            title={currentIndex === 2 ? 'Get Started' : strings.about}
            containerStyle={localStyles.submitButton}
            color={colors.white}
            onPress={onPressRightArrow}
          />
        )}
      </View>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  submitButton: {
    ...styles.mv20,
  },
  rendetItemConatiner: {
    width: screenWidth,
    height: screenHeight - getHeight(140),
    ...styles.center,
  },
  imageStyle: {
    height: screenHeight - getHeight(140),
    width: screenWidth,
    resizeMode: 'contain',
  },
  bottomIndicatorStyle: {
    height: getHeight(9),
    borderRadius: moderateScale(15),
    ...styles.mh5,
    width: moderateScale(27),
  },
  btnContainer: {
    ...styles.mv20,
    ...styles.rowSpaceBetween,
    borderTopWidth: moderateScale(1),
    borderColor: colors.textTertiary,
  },
  skipBtnContainer: {
    width: '15%',
    backgroundColor: colors.backgroundColor,
  },
  headerStyle: {
    ...styles.ph20,
    ...styles.rowSpaceBetween,
    ...styles.mt10,
  },
  bottomContainer: {
    backgroundColor: colors.backgroundColor,
    ...styles.pt20,
    zIndex: 100,
    width: '100%',
    ...styles.ph20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: colors.textGray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
