import audio from '../assets/audio';
import images from '../assets/images';
import {StackNav, TabNav} from '../navigation/NavigationKeys';
import {colors} from '../themes';

export const choseYourInterestData = [
  'News',
  'Education',
  'Comedy',
  'Business',
  'Technology',
  'Health',
  'Sports',
  'Music',
  'History',
  'Science',
  'True Crime',
  'Fiction',
  'Religion & Spirituality',
  'Arts',
  'Society & Culture',
  'Leisure',
  'Government',
  'Kids & Family',
  'TV & Film',
  'Other',
];

export const categoryData = ['Recent🔥', 'Topics', 'Authors', 'Episodes'];

export const podcastData = [
  {
    id: 1,
    author: 'Mariana Jane',
    podcast: 'Podcastly',
    title: 'Life is more youthful',
    time: '1 hourse left',
    bgColor: colors.podCastColor1,
    authorImg: images.author1,
    url: audio.audio2,
  },
  {
    id: 2,
    author: 'Steven Edisen arleno',
    podcast: 'SansPodcast',
    title: 'Solving mind problems',
    time: '1 hourse left',
    bgColor: colors.podCastColor2,
    authorImg: images.author2,
    url: audio.audio4,
  },
  {
    id: 3,
    author: 'Steven Edisen arleno',
    podcast: 'SansPodcast',
    title: 'Solving mind problems',
    time: '1 hourse left',
    bgColor: colors.podCastColor3,
    authorImg: images.author1,
    url: audio.audio3,
  },
  {
    id: 4,
    author: 'Mariana Jane',
    podcast: 'Podcastly',
    title: 'Life is more youthful',
    time: '1 hourse left',
    bgColor: colors.podCastColor4,
    authorImg: images.author3,
    url: audio.audio1,
  },
];

export const pendingDownloadData = [
  {
    id: 1,
    title: 'Life is more youthful',
    podcast: 'SansPodcast',
    time: 'Podcast Mayday',
    bgColor: colors.primaryLight,
    authorImg: images.podCastImg1,
    bWidth: false,
    textColor: false,
    downLoadColor: colors.textColor,
    progressColor: colors.primaryMain,
    progress: '90%',
  },
  {
    id: 2,
    author: 'Steven Edisen arleno',
    podcast: 'SansPodcast',
    title: 'Solving mind problems',
    time: 'Podcast Mayday',
    bgColor: colors.backgroundColor2,
    bWidth: true,
    textColor: false,
    authorImg: images.podCastImg5,
    downLoadColor: colors.bColor,
    progressColor: colors.textColor,
    progress: '19%',
  },
  {
    id: 3,
    author: 'Steven Edisen arleno',
    podcast: 'SansPodcast',
    title: 'Solving mind problems',
    time: 'Podcast Mayday',
    bgColor: colors.backgroundColor2,
    bWidth: true,
    textColor: false,
    authorImg: images.podCastImg6,
    downLoadColor: colors.bColor,
    progressColor: colors.textColor,
    progress: '40%',
  },
  {
    id: 4,
    author: 'Mariana Jane',
    podcast: 'Podcastly',
    title: 'Life is more youthful',
    time: 'Podcast Mayday',
    bgColor: colors.primaryMain,
    textColor: true,
    bWidth: false,
    authorImg: images.podCastImg8,
    downLoadColor: colors.textColor,
    progressColor: colors.primaryLight,
    progress: '70%',
  },
];

export const downloadData = [
  {
    id: 0,
    title: 'Stuff You Should Know',
    podcast: 'heart Podcasts',
    authorImg: images.podCastImg1,
    url: audio.audio1,
  },
  {
    id: 1,
    title: 'Do You See What I See?',
    podcast: 'heart Podcasts',
    authorImg: images.podCastImg2,
    url: audio.audio2,
  },
  {
    id: 2,
    title: 'The Daily',
    podcast: 'heart Podcasts',
    authorImg: images.podCastImg3,
    url: audio.audio3,
  },
  {
    id: 3,
    title: 'The Joe Rogan Experience',
    podcast: 'heart Podcasts',
    authorImg: images.podCastImg4,
    url: audio.audio4,
  },
  {
    id: 4,
    title: 'The Obama Podcast',
    podcast: 'heart Podcasts',
    authorImg: images.podCastImg6,
    url: audio.audio5,
  },
  {
    id: 5,
    title: 'The Michelle Obama Podcast',
    podcast: 'heart Podcasts',
    authorImg: images.podCastImg7,
    url: audio.audio6,
  },
  {
    id: 6,
    title: 'EQ Applied: The Real-World Guide to Emotional Intelligence',
    podcast: 'RJ Podcasts',
    authorImg: images.podCastImg8,
    url: audio.audio7,
  },
  {
    id: 7,
    title: 'TechStuff',
    podcast: 'Agent Podcasts',
    authorImg: images.podCastImg9,
    url: audio.audio8,
  },
  {
    id: 8,
    title: 'Unchained Radio',
    podcast: 'Yoga Podcasts',
    authorImg: images.podCastImg10,
    url: audio.audio9,
  },
  {
    id: 9,
    title: 'The Daily Stoic',
    podcast: 'Inspirational Podcasts',
    authorImg: images.podCastImg3,
    url: audio.audio10,
  },
];

export const discoverData = [
  {
    id: 1,
    category: 'News',
    categoryImg: images.podCastImg10,
  },
  {
    id: 2,
    category: 'Education',
    categoryImg: images.podCastImg9,
  },
  {
    id: 3,
    category: 'Comedy',
    categoryImg: images.podCastImg8,
  },
  {
    id: 4,
    category: 'Business',
    categoryImg: images.podCastImg7,
  },
  {
    id: 5,
    category: 'Technology',
    categoryImg: images.podCastImg6,
  },
  {
    id: 6,
    category: 'Health',
    categoryImg: images.podCastImg5,
  },
  {
    id: 7,
    category: 'Sports',
    categoryImg: images.podCastImg4,
  },
  {
    id: 8,
    category: 'Music',
    categoryImg: images.podCastImg3,
  },
  {
    id: 9,
    category: 'History',
    categoryImg: images.podCastImg2,
  },
  {
    id: 10,
    category: 'Science',
    categoryImg: images.podCastImg1,
  },
];

export const browseCategoryData = [
  {
    id: 1,
    icon: 'grid-outline',
    title: 'Categories',
  },
  {
    id: 2,
    icon: 'person-outline',
    title: 'Authors',
  },
  {
    id: 3,
    icon: 'albums-outline',
    title: 'Episodes',
  },
  {
    id: 4,
    icon: 'time-outline',
    title: 'Recent',
  },
  {
    id: 5,
    icon: 'flame-outline',
    title: 'Trending',
  },
  {
    id: 6,
    icon: 'star-outline',
    title: 'Featured',
  },
  {
    id: 7,
    icon: 'heart-outline',
    title: 'Popular',
  },
];

export const drawerData = [
  {
    id: 1,
    icon: 'person',
    title: 'Edit Profile',
    onPress: StackNav.EditProfile,
  },
  {
    id: 2,
    icon: 'download',
    title: 'Download',
    onPress: TabNav.DownloadTab,
  },
  {
    id: 3,
    icon: 'settings',
    title: 'Settings',
    onPress: StackNav.Setting,
  },
  {
    id: 4,
    icon: 'information-circle',
    title: 'Help Center',
    onPress: StackNav.HelpCenter,
  },
  {
    id: 5,
    icon: 'alert-circle',
    title: 'Privacy & Police',
    onPress: StackNav.PrivacyPolicy,
  },
];

export const helperData = [
  {
    title: 'What is Corecast?',
    description:
      'Corecast is a streaming service that offers a wide variety of anime titles.',
  },
  {
    title: 'How to use Corecast?',
    description:
      'You can sign up for Corecast by downloading the app from the App Store or Google Play Store.',
  },
  {
    title: 'How do I cancel a orders product?',
    description:
      'You can remove anime on your wishlist by clicking the heart icon on the anime details page.',
  },
  {
    title: 'Is Corecast free to use?',
    description:
      'You can subscribe to premium by clicking the premium button on the home page.',
  },
  {
    title: 'How to add promo on Corecast?',
    description:
      'You can download anime by clicking the download icon on the anime details page.',
  },
  {
    title: 'How to unsubscribe from premium?',
    description:
      'You can unsubscribe from premium by clicking the premium button on the home page.',
  },
];

export const privacyPolicyData = [
  {
    title: strings.privacyPolicy1,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy2,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy3,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy2,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy3,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy2,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy3,
    description: strings.privacyPolicyDesc,
  },
];

export const tendingPodcastData = [
  {
    id: 0,
    author: 'Mariana Jane',
    podcast: 'Podcastly',
    title: 'Life is more youthful',
    time: '1 hourse left',
    bgColor: colors.primaryDark,
    authorImg: images.author1,
    url: audio.audio1,
    date: '2014-05-20T07:00:00+00:00',
  },
  {
    id: 1,
    author: 'Steven Edisen arleno',
    podcast: 'SansPodcast',
    title: 'Solving mind problems',
    time: '1 hourse left',
    bgColor: colors.podCastColor5,
    authorImg: images.author2,
    url: audio.audio2,
  },
  {
    id: 2,
    author: 'Steven Edisen arleno',
    podcast: 'SansPodcast',
    title: 'Solving mind problems',
    time: '1 hourse left',
    bgColor: colors.podCastColor6,
    authorImg: images.userImg,
    url: audio.audio4,
  },
  {
    id: 3,
    author: 'Steven Edisen arleno',
    podcast: 'SansPodcast',
    title: 'Solving mind problems',
    time: '1 hourse left',
    bgColor: colors.podCastColor7,
    authorImg: images.author2,
    url: audio.audio3,
  },
  {
    id: 4,
    author: 'Steven Edisen arleno',
    podcast: 'SansPodcast',
    title: 'Solving mind problems',
    time: '1 hourse left',
    bgColor: colors.podCastColor8,
    authorImg: images.userImg,
    url: audio.audio10,
  },
];

export const musicData = [
  {
    rating: 1,
    title: 'Stuff You Should Know',
    artist: 'heart Podcasts',
    artwork: images.podCastImg7,
    url: audio.audio1,
    id: 1,
  },
  {
    rating: 2,
    title: 'Do You See What I See?',
    artist: 'Dr. John Doe',
    artwork: images.podCastImg2,
    url: audio.audio2,
    id: 2,
  },
  {
    rating: 3,
    title: 'The Daily',
    artist: 'ABC News',
    artwork: images.podCastImg3,
    url: audio.audio3,
    id: 3,
  },
  {
    rating: 4,
    title: 'The Joe Rogan Experience',
    artist: 'Fear Factor',
    artwork: images.podCastImg4,
    url: audio.audio4,
    id: 4,
  },
  {
    rating: 5,
    title: 'The Michelle Obama Podcast',
    artist: 'Gimlet',
    artwork: images.podCastImg9,
    url: audio.audio5,
    id: 5,
  },
  {
    rating: 6,
    title: 'The Michelle Obama Podcast',
    artist: 'Epic Records',
    artwork: images.podCastImg10,
    url: audio.audio6,
    id: 6,
  },
];
