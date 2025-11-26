import { StyleSheet, Text, View, TouchableOpacity, Platform, Image, ScrollView, Alert } from 'react-native';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import MyStatusBar from '../../components/myStatusBar';
import { Colors, CommonStyles, Fonts, screenWidth, Sizes } from '../../constants/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Slider } from '@miblanchard/react-native-slider';
import { useFocusEffect } from '@react-navigation/native';
import Sound from 'react-native-sound';

const lyricsData = [
    {
        time: "00:08",
        seconds: 8000,
        text: "Spent 24 hours, I need more hours with you",
    },
    {
        time: "00:15",
        seconds: 15000,
        text: "You spent the weekend getting even, ooh",
    },
    {
        time: "00:23",
        seconds: 23000,
        text: "We spent the late nights making things right between us",
    },
    {
        time: "00:30",
        seconds: 30000,
        text: "But now it's all good, babe",
    },
    {
        time: "00:32",
        seconds: 32000,
        text: "Roll that back wood, babe",
    },
    {
        time: "00:34",
        seconds: 34000,
        text: "And play me close",
    },
    {
        time: "00:36",
        seconds: 36000,
        text: "'Cause girls like you run 'round with guys like me",
    },
    {
        time: "00:42",
        seconds: 42000,
        text: "'Til sun down when I come through",
    },
    {
        time: "00:44",
        seconds: 44000,
        text: "I need a girl like you, yeah yeah",
    },
    {
        time: "00:46",
        seconds: 46000,
        text: "Girls like you love fun, and yeah, me too",
    },
    {
        time: "00:49",
        seconds: 49000,
        text: "What I want when I come through",
    },
    {
        time: "00:52",
        seconds: 52000,
        text: "I need a girl like you, yeah yeah",
    },
    {
        time: "00:55",
        seconds: 55000,
        text: "Yeah yeah yeah, yeah yeah yeah",
    },
    {
        time: "00:59",
        seconds: 59000,
        text: "I need a girl like you, yeah yeah",
    },
    {
        time: "01:03",
        seconds: 63000,
        text: "Yeah yeah yeah, yeah yeah yeah",
    },
    {
        time: "01:07",
        seconds: 67000,
        text: "I need a girl like you",
    },
    {
        time: "01:09",
        seconds: 69000,
        text: "I spent last night on the last flight to you",
    },
    {
        time: "01:17",
        seconds: 77000,
        text: "Took a whole day up tryna get way up, ooh",
    },
    {
        time: "01:24",
        seconds: 84000,
        text: "We spent the daylight tryna make things right between us",
    },
    {
        time: "01:31",
        seconds: 91000,
        text: "But now it's all good, babe",
    },
    {
        time: "01:34",
        seconds: 94000,
        text: "Roll that back wood, babe",
    },
    {
        time: "01:36",
        seconds: 96000,
        text: "And play me close",
    },
    {
        time: "01:39",
        seconds: 99000,
        text: "'Cause girls like you run 'round with guys like me",
    },
    {
        time: "01:43",
        seconds: 103000,
        text: "'Til sun down when I come through",
    },
    {
        time: "01:45",
        seconds: 105000,
        text: "I need a girl like you, yeah yeah",
    },
    {
        time: "01:48",
        seconds: 108000,
        text: "Girls like you love fun, and yeah, me too",
    },
    {
        time: "01:51",
        seconds: 111000,
        text: "What I want when I come through",
    },
    {
        time: "01:53",
        seconds: 113000,
        text: "I need a girl like you, yeah yeah",
    },
    {
        time: "01:56",
        seconds: 116000,
        text: "Yeah yeah yeah, yeah yeah yeah",
    },
    {
        time: "02:01",
        seconds: 121000,
        text: "I need a girl like you, yeah yeah",
    },
    {
        time: "02:04",
        seconds: 124000,
        text: "Yeah yeah yeah, yeah yeah yeah",
    },
    {
        time: "02:08",
        seconds: 128000,
        text: "I need a girl like you, yeah yeah",
    },
    {
        time: "02:16",
        seconds: 136000,
        text: "I need a girl like you, yeah yeah",
    },
    {
        time: "02:24",
        seconds: 144000,
        text: "I need a girl like you",
    },
    {
        time: "02:26",
        seconds: 146000,
        text: "Maybe it's 6:45",
    },
    {
        time: "02:28",
        seconds: 148000,
        text: "Maybe I'm barely alive",
    },
    {
        time: "02:30",
        seconds: 150000,
        text: "Maybe you've taken my shit for the last time",
    },
    {
        time: "02:34",
        seconds: 154000,
        text: "Maybe I know that I'm drunk",
    },
    {
        time: "02:36",
        seconds: 156000,
        text: "Maybe I know you're the one",
    },
    {
        time: "02:38",
        seconds: 158000,
        text: "Maybe you're thinking it's better if you drive",
    },
    {
        time: "02:43",
        seconds: 163000,
        text: "Cause girls like you run 'round with guys like me",
    },
    {
        time: "02:47",
        seconds: 167000,
        text: "'Til sun down when I come through",
    },
    {
        time: "02:49",
        seconds: 169000,
        text: "I need a girl like you, yeah",
    },
    {
        time: "02:53",
        seconds: 173000,
        text: "Not too long ago, I was dancing for dollars",
    },
    {
        time: "02:55",
        seconds: 175000,
        text: "Know it's really real if I let you meet my mama",
    },
    {
        time: "02:57",
        seconds: 177000,
        text: "You don't want a girl like me, I'm too crazy",
    },
    {
        time: "02:59",
        seconds: 179000,
        text: "But every other girl you meet is fugazy",
    },
    {
        time: "03:01",
        seconds: 181000,
        text: "I'm sure them other girls were nice enough",
    },
    {
        time: "03:03",
        seconds: 183000,
        text: "But you need someone to spice it up",
    },
    {
        time: "03:04",
        seconds: 184000,
        text: "So who you gonna call? Cardi, Cardi",
    },
    {
        time: "03:07",
        seconds: 187000,
        text: "Come and rev it up like Harley, Harley",
    },
    {
        time: "03:09",
        seconds: 189000,
        text: "Why is the best fruit always forbidden?",
    },
    {
        time: "03:10",
        seconds: 190000,
        text: "I'm coming to you now doin' 20 over the limit",
    },
    {
        time: "03:12",
        seconds: 192000,
        text: "The red light, red light stop, stop (skrrt)",
    },
    {
        time: "03:14",
        seconds: 194000,
        text: "I don't play when it comes to my heart (let's get it though)",
    },
    {
        time: "03:17",
        seconds: 197000,
        text: "I don't really want a white horse and a carriage",
    },
    {
        time: "03:18",
        seconds: 198000,
        text: "I'm thinkin' more of a white Porsches and karats",
    },
    {
        time: "03:20",
        seconds: 200000,
        text: "I need you right here 'cause every time you call",
    },
    {
        time: "03:22",
        seconds: 202000,
        text: "I play with this kitty like you play with your guitar",
    },
    {
        time: "03:24",
        seconds: 204000,
        text: "'Cause girls like you run 'round with guys like me",
    },
    {
        time: "03:26",
        seconds: 206000,
        text: "'Til sun down when I come through",
    },
    {
        time: "03:30",
        seconds: 210000,
        text: "I need a girl like you, yeah yeah",
    },
    {
        time: "03:32",
        seconds: 212000,
        text: "Girls like you love fun, and yeah, me too",
    },
    {
        time: "03:35",
        seconds: 215000,
        text: "What I want when I come through",
    },
    {
        time: "03:37",
        seconds: 217000,
        text: "I need a girl like you, yeah yeah",
    },
    {
        time: "03:40",
        seconds: 220000,
        text: "Yeah yeah yeah, yeah yeah yeah",
    },
    {
        time: "03:44",
        seconds: 224000,
        text: "I need a girl like you, yeah yeah",
    },
    {
        time: "03:48",
        seconds: 228000,
        text: "Yeah yeah yeah, yeah yeah yeah",
    },
    {
        time: "03:52",
        seconds: 232000,
        text: "I need a girl like you",
    },
    {
        time: "03:54",
        seconds: 234000,
        text: "Yeah yeah yeah, yeah yeah yeah",
    },
    {
        time: "04:06",
        seconds: 246000,
        text: "I need a girl like you",
    },
];

Sound.setCategory('Playback');

const ListenBookScreen = ({ navigation }) => {

    const maxChepter = 25;

    const [sliderValue, setsliderValue] = useState(0);
    const [position, setPosition] = useState(0);
    const [currentChepter, setCurrentChepter] = useState(2);
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const intervalRef = useRef(null);

    useFocusEffect(
        useCallback(() => {
            const newSound = new Sound(
                require('../../assets/audio/song1.mp3'),
                error => {
                    if (error) {
                        Alert.alert('Error', 'Failed to load sound: ' + error.message);
                        return;
                    }
                    setDuration(newSound.getDuration());
                    setSound(newSound);
                },
            );
            return () => {
                newSound.release();
                stopSound();
                clearInterval(intervalRef.current);
            };
        }, []),
    );

    useEffect(() => {
        if (sound) { playSound() }
        return () => { stopSound() };
    }, [sound]);

    const formatTime = seconds => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' + secs : secs}`;
    };

    const playSound = () => {
        sound?.play(success => {
            if (success) {
                setIsPlaying(false);
                setPosition(0);
            }            
            clearInterval(intervalRef.current);
        });
        setIsPlaying(true);
        intervalRef.current = setInterval(() => {
            sound.getCurrentTime(seconds => {
                setPosition(seconds);
            });
        }, 1000);
    };

    const pauseSound = () => {
        sound?.pause();
        setIsPlaying(false);
        clearInterval(intervalRef.current);
    };

    const stopSound = () => {
        sound?.stop(() => { });
        setIsPlaying(false);
        setPosition(0);
        clearInterval(intervalRef.current);
    };

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                <View style={{ flex: 1, }}>
                    {bookImageWithName()}
                    {audioInfo()}
                </View>
            </View>
            {chepterAndPagesInfo()}
        </View>
    )

    function chepterAndPagesInfo() {
        return (
            <View style={{ backgroundColor: Colors.whiteColor, ...CommonStyles.shadow, padding: Sizes.fixPadding * 2.0 }}>
                <View style={{ ...CommonStyles.rowAlignCenter }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { currentChepter > 1 ? setCurrentChepter(currentChepter - 1) : null }}
                        style={styles.previousAndNextButton}
                    >
                        <MaterialIcons name="chevron-left" size={26} color={Colors.blackColor} />
                    </TouchableOpacity>
                    <Text style={styles.footerChepterInfoTextStyle}>
                        Chapter {currentChepter} of 25
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { currentChepter < maxChepter ? setCurrentChepter(currentChepter + 1) : null }}
                        style={styles.previousAndNextButton}
                    >
                        <MaterialIcons name="chevron-right" size={26} color={Colors.blackColor} />
                    </TouchableOpacity>
                </View>
                <Text style={{ ...Fonts.grayColor14Medium, textAlign: 'center', marginTop: Sizes.fixPadding + 5.0 }}>
                    Page 25/200
                </Text>
            </View>
        )
    }

    function audioInfo() {
        const renderLyrics = () => {
            return lyricsData.map((lyric, index) => (
                <Text
                    key={index}
                    style={{
                        marginHorizontal: Sizes.fixPadding,
                        marginBottom: Sizes.fixPadding * 2.5,
                        ...(
                            index == 0
                                ?
                                lyric.seconds < (position * 1000) && lyricsData[index + 1].seconds > (position * 1000) ? Fonts.primaryColor14Regular : Fonts.grayColor14Regular
                                :
                                index == lyricsData.length - 1
                                    ?
                                    lyric.seconds > (position * 1000) && lyricsData[index - 1].seconds < (position * 1000) ? Fonts.primaryColor14Regular : Fonts.grayColor14Regular
                                    :
                                    index !== 0 && index !== lyricsData.length - 1 && lyric.seconds < (position * 1000) && lyricsData[index - 1].seconds < (position * 1000) && lyricsData[index + 1].seconds > (position * 1000)
                                        ? Fonts.primaryColor14Regular
                                        : Fonts.grayColor14Regular
                        ),
                    }}
                >
                    {lyric.text} { }
                </Text>
            ));
        };

        return (
            <View style={styles.audioInfoWrapper}>
                <Image
                    source={require('../../assets/images/books/book13.png')}
                    style={styles.bookImageWithOpacity}
                />
                <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.playPauseReplyNextButtonWrapper}>
                            <MaterialIcons name="replay" size={30} color={Colors.primaryColor} />
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => { isPlaying ? pauseSound() : playSound() }}
                                style={styles.playPauseButton}
                            >
                                <MaterialIcons
                                    name={isPlaying ? "pause" : "play-arrow"}
                                    size={25}
                                    color={Colors.whiteColor}
                                />
                            </TouchableOpacity>
                            <MaterialIcons
                                name="replay"
                                size={30}
                                color={Colors.primaryColor}
                                style={{ transform: [{ scaleX: -1 }] }}
                            />
                        </View>

                        <View style={{ width: screenWidth - 40, alignSelf: 'center' }}>
                            <Slider
                                value={position}
                                minimumValue={0}
                                maximumValue={duration}
                                thumbTintColor={Colors.primaryColor}
                                minimumTrackTintColor={Colors.primaryColor}
                                maximumTrackTintColor={'#F2E3BC'}
                                tapToSeek={Platform.OS == "ios" ? false : true}
                                onValueChange={async (value) => {                                   
                                    setsliderValue(value[0]);
                                    sound?.setCurrentTime(value[0]);
                                    isPlaying ? null : playSound();
                                }}
                                trackStyle={{ height: 6.0, borderRadius: Sizes.fixPadding - 5.0 }}
                                thumbStyle={styles.sliderThumbStyle}
                            />
                            <View style={{ ...CommonStyles.rowAlignCenter, justifyContent: "space-between" }}>
                                <Text style={{ ...Fonts.grayColor14SemiBold, opacity: 0.7, }}>
                                    {formatTime(position)}
                                </Text>
                                <Text style={{ ...Fonts.grayColor14SemiBold, opacity: 0.7, }}>
                                    {formatTime(duration)}
                                </Text>
                            </View>
                        </View>

                        <View style={{ width: screenWidth - 40.0, alignSelf: 'center', marginVertical: Sizes.fixPadding * 4.0 }}>
                            <Text style={{ textAlign: 'justify' }}>
                                {renderLyrics()}
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }

    function bookImageWithName() {
        return (
            <View style={{ ...CommonStyles.center, marginTop: Sizes.fixPadding - 5.0 }}>
                <View style={styles.bookImageWrapper}>
                    <Image
                        source={require('../../assets/images/books/book13.png')}
                        style={{ width: '100%', height: '100%', borderRadius: Sizes.fixPadding, }}
                    />
                </View>
                <View style={{ marginTop: Sizes.fixPadding + 5.0 }}>
                    <Text style={{ ...Fonts.primaryColor15SemiBold }}>
                        One Indian Girl
                    </Text>
                    <Text style={{ ...Fonts.grayColor12Medium, marginTop: Sizes.fixPadding - 8.0 }}>
                        By Chetan Bhagat
                    </Text>
                </View>
            </View>
        )
    }

    function header() {
        return (
            <View style={{ ...CommonStyles.rowAlignCenter, margin: Sizes.fixPadding * 2.0, justifyContent: 'space-between' }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.pop() }}
                    style={styles.backButton}
                >
                    <MaterialIcons name="arrow-back" size={20} color={Colors.blackColor} />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => { navigation.push('ReadBook') }}
                    style={styles.audioButtonStyle}
                >
                    <MaterialIcons name="menu-book" size={20} color={Colors.primaryColor} />
                    <Text style={{ ...Fonts.primaryColor14SemiBold, marginLeft: Sizes.fixPadding - 2.0 }}>
                        Read
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ListenBookScreen;

const styles = StyleSheet.create({
    backButton: {
        width: 30.0,
        height: 30.0,
        borderRadius: Sizes.fixPadding - 5.0,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        ...CommonStyles.center
    },
    audioButtonStyle: {
        ...CommonStyles.rowAlignCenter,
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingHorizontal: Sizes.fixPadding - 4.0,
        paddingVertical: Sizes.fixPadding - 5.0,
        ...CommonStyles.shadow
    },
    bookImageWrapper: {
        width: screenWidth / 3.5,
        height: screenWidth / 3.0,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        shadowOpacity: 0.5,
        borderRadius: Sizes.fixPadding,
    },
    playPauseButton: {
        width: 50.0,
        height: 50.0,
        borderRadius: 25.0,
        backgroundColor: Colors.primaryColor,
        ...CommonStyles.shadow,
        shadowOpacity: 0.4,
        marginHorizontal: Sizes.fixPadding * 4.0,
        ...CommonStyles.center,
    },
    playPauseReplyNextButtonWrapper: {
        ...CommonStyles.rowAlignCenter,
        alignSelf: 'center',
        marginTop: Sizes.fixPadding * 6.0,
        marginBottom: Sizes.fixPadding * 4.0
    },
    bookImageWithOpacity: {
        width: '100%',
        height: '100%',
        opacity: 0.05,
    },
    sliderThumbStyle: {
        width: 15.0,
        height: 15.0,
        borderRadius: 7.5,
        backgroundColor: Colors.primaryColor,
    },
    audioInfoWrapper: {
        width: '130%',
        flex: 1,
        borderTopLeftRadius: screenWidth / 1.4,
        borderTopRightRadius: screenWidth / 1.4,
        alignSelf: 'center',
        marginTop: Sizes.fixPadding * 2.5,
        overflow: 'hidden'
    },
    previousAndNextButton: {
        width: 26.0,
        height: 26.0,
        borderRadius: Sizes.fixPadding - 8.0,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        ...CommonStyles.center,
    },
    footerChepterInfoTextStyle: {
        ...Fonts.primaryColor16Medium,
        marginHorizontal: Sizes.fixPadding + 5.0,
        flex: 1,
        textAlign: 'center'
    }
})