import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { LogBox } from 'react-native'
import React from 'react'
import SplashScreen from './screens/splashScreen';
import OnboardingScreen from './screens/onboarding/onboardingScreen';
import SigninScreen from './screens/auth/signinScreen';
import SignupScreen from './screens/auth/signupScreen';
import VerificationScreen from './screens/auth/verificationScreen';
import BottomTabBarScreen from './components/bottomTabBarScreen';
import AllBooksScreen from './screens/allBooks/allBooksScreen';
import TopAuthorsScreen from './screens/topAuthors/topAuthorsScreen';
import BookDetailScreen from './screens/bookDetail/bookDetailScreen';
import ReadBookScreen from './screens/readBook/readBookScreen';
import ListenBookScreen from './screens/listenBook/listenBookScreen';
import AuthorDetailScreen from './screens/authorDetail/authorDetailScreen';
import NotificationScreen from './screens/notification/notificationScreen';
import SearchScreen from './screens/search/searchScreen';
import ReviewsScreen from './screens/reviews/reviewsScreen';
import EditProfileScreen from './screens/editProfile/editProfileScreen';
import PremiumScreen from './screens/premium/premiumScreen';
import SelectPaymentMethodScreen from './screens/selectPaymentMethod/selectPaymentMethodScreen';
import CreditCardScreen from './screens/creditCard/creditCardScreen';
import SuccessScreen from './screens/success/successScreen';
import DownloadsScreen from './screens/downloads/downloadsScreen';
import AppSettingsScreen from './screens/appSettings/appSettingsScreen';
import TermsAndConditionScreen from './screens/termsAndCondition/termsAndConditionScreen';
import PrivacyPolicyScreen from './screens/privacyPolicy/privacyPolicyScreen';
import HelpAndSupportScreen from './screens/helpAndSupport/helpAndSupportScreen';

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export function BooksRoot() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="BottomTabBar" component={BottomTabBarScreen} />
        <Stack.Screen name="AllBooks" component={AllBooksScreen} />
        <Stack.Screen name="TopAuthors" component={TopAuthorsScreen} />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} />
        <Stack.Screen name="ReadBook" component={ReadBookScreen} />
        <Stack.Screen name="ListenBook" component={ListenBookScreen} />
        <Stack.Screen name="AuthorDetail" component={AuthorDetailScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Reviews" component={ReviewsScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Premium" component={PremiumScreen} />
        <Stack.Screen name="SelectPaymentMethod" component={SelectPaymentMethodScreen} />
        <Stack.Screen name="CreditCard" component={CreditCardScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="Downloads" component={DownloadsScreen} />
        <Stack.Screen name="AppSettings" component={AppSettingsScreen} />
        <Stack.Screen name="TermsAndCondition" component={TermsAndConditionScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="HelpAndSupport" component={HelpAndSupportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyApp;