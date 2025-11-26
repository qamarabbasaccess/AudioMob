// Tab Route
import HomeTab from '../container/home/HomeTab';
import DownloadTab from '../container/download/DownloadTab';
import ProfileTab from '../container/profile/ProfileTab';
import DiscoverTab from '../container/discover/DiscoverTab';
import BrowseTab from '../container/browse/BrowseTab';
import TabBar from './type/TabBarNavigation';
import Drawer from './type/Drawer';

// Screens Route
import Splash from '../container/auth/Splash';
import Login from '../container/auth/Login';
import Register from '../container/auth/Register';
import ChoseYourInterest from '../container/auth/ChoseYourInterest';
import OnBoarding from '../container/auth/OnBoarding';
import Connect from '../container/auth/Connect';
import PodCastDetail from '../container/home/PodCastDetail';
import PodCastPlayer from '../container/home/PodCastPlayer';
import EditProfile from '../container/profile/EditProfile';
import HelpCenter from '../container/profile/HelpCenter';
import PrivacyPolicy from '../container/profile/PrivacyPolicy';
import Setting from '../container/profile/Setting';
import Notification from '../container/home/Notification';

export const TabRoute = {
  HomeTab,
  DownloadTab,
  ProfileTab,
  DiscoverTab,
  BrowseTab,
};

export const StackRoute = {
  Splash,
  Login,
  Register,
  Drawer,
  ChoseYourInterest,
  OnBoarding,
  TabBar,
  Connect,
  PodCastDetail,
  PodCastPlayer,
  EditProfile,
  HelpCenter,
  PrivacyPolicy,
  Setting,
  Notification,
};
