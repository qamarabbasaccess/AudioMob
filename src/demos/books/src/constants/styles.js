import { Dimensions } from "react-native"

export const Colors = {
    primaryColor: '#CBA135',
    blackColor: '#333333',
    whiteColor: '#FFFFFF',
    grayColor: '#949494',
    darkGrayColor: '#646465',
    lightGrayColor: '#D9D9D9',
    bodyBackColor: '#F5F5F5',
    greenColor: '#26780A',
    redColor: '#D02E2E',
}

export const Fonts = {

    whiteColor12Medium: {
        color: Colors.whiteColor,
        fontSize: 12.0,
        fontFamily: 'Poppins-Medium'
    },

    whiteColor14Medium: {
        color: Colors.whiteColor,
        fontSize: 14.0,
        fontFamily: 'Poppins-Medium'
    },

    whiteColor14SemiBold: {
        color: Colors.whiteColor,
        fontSize: 14.0,
        fontFamily: 'Poppins-SemiBold'
    },

    whiteColor16SemiBold: {
        color: Colors.whiteColor,
        fontSize: 16.0,
        fontFamily: 'Poppins-SemiBold'
    },

    whiteColor18SemiBold: {
        color: Colors.whiteColor,
        fontSize: 18.0,
        fontFamily: 'Poppins-SemiBold'
    },

    whiteColor22SemiBold: {
        color: Colors.whiteColor,
        fontSize: 22.0,
        fontFamily: 'Poppins-SemiBold'
    },

    whiteColor24SemiBold: {
        color: Colors.whiteColor,
        fontSize: 24.0,
        fontFamily: 'Poppins-SemiBold'
    },

    primaryColor14Regular: {
        color: Colors.primaryColor,
        fontSize: 14.0,
        fontFamily: 'Poppins-Regular'
    },

    primaryColor12Medium: {
        color: Colors.primaryColor,
        fontSize: 12.0,
        fontFamily: 'Poppins-Medium'
    },

    primaryColor14Medium: {
        color: Colors.primaryColor,
        fontSize: 14.0,
        fontFamily: 'Poppins-Medium'
    },

    primaryColor16Medium: {
        color: Colors.primaryColor,
        fontSize: 16.0,
        fontFamily: 'Poppins-Medium'
    },

    primaryColor18Medium: {
        color: Colors.primaryColor,
        fontSize: 18.0,
        fontFamily: 'Poppins-Medium'
    },

    primaryColor12SemiBold: {
        color: Colors.primaryColor,
        fontSize: 12.0,
        fontFamily: 'Poppins-SemiBold'
    },

    primaryColor14SemiBold: {
        color: Colors.primaryColor,
        fontSize: 14.0,
        fontFamily: 'Poppins-SemiBold'
    },

    primaryColor15SemiBold: {
        color: Colors.primaryColor,
        fontSize: 15.0,
        fontFamily: 'Poppins-SemiBold'
    },

    primaryColor16SemiBold: {
        color: Colors.primaryColor,
        fontSize: 16.0,
        fontFamily: 'Poppins-SemiBold'
    },

    primaryColor17SemiBold: {
        color: Colors.primaryColor,
        fontSize: 17.0,
        fontFamily: 'Poppins-SemiBold'
    },

    primaryColor18SemiBold: {
        color: Colors.primaryColor,
        fontSize: 18.0,
        fontFamily: 'Poppins-SemiBold'
    },

    primaryColor20SemiBold: {
        color: Colors.primaryColor,
        fontSize: 20.0,
        fontFamily: 'Poppins-SemiBold'
    },

    darkGrayColor16Medium: {
        color: Colors.darkGrayColor,
        fontSize: 16.0,
        fontFamily: 'Poppins-Medium'
    },

    blackColor13Regular: {
        color: Colors.blackColor,
        fontSize: 13.0,
        fontFamily: 'Poppins-Regular'
    },

    blackColor14Regular: {
        color: Colors.blackColor,
        fontSize: 14.0,
        fontFamily: 'Poppins-Regular'
    },

    blackColor14Medium: {
        color: Colors.blackColor,
        fontSize: 14.0,
        fontFamily: 'Poppins-Medium'
    },

    blackColor17Medium: {
        color: Colors.blackColor,
        fontSize: 17.0,
        fontFamily: 'Poppins-Medium'
    },

    blackColor15SemiBold: {
        color: Colors.blackColor,
        fontSize: 15.0,
        fontFamily: 'Poppins-SemiBold'
    },

    grayColor14Regular: {
        color: Colors.grayColor,
        fontSize: 14.0,
        fontFamily: 'Poppins-Regular'
    },

    grayColor12Medium: {
        color: Colors.grayColor,
        fontSize: 12.0,
        fontFamily: 'Poppins-Medium'
    },

    grayColor13Medium: {
        color: Colors.grayColor,
        fontSize: 13.0,
        fontFamily: 'Poppins-Medium'
    },

    grayColor14Medium: {
        color: Colors.grayColor,
        fontSize: 14.0,
        fontFamily: 'Poppins-Medium'
    },

    grayColor15Medium: {
        color: Colors.grayColor,
        fontSize: 15.0,
        fontFamily: 'Poppins-Medium'
    },

    grayColor16Medium: {
        color: Colors.grayColor,
        fontSize: 16.0,
        fontFamily: 'Poppins-Medium'
    },

    grayColor14SemiBold: {
        color: Colors.grayColor,
        fontSize: 14.0,
        fontFamily: 'Poppins-SemiBold'
    },

    grayColor16SemiBold: {
        color: Colors.grayColor,
        fontSize: 16.0,
        fontFamily: 'Poppins-SemiBold'
    },

    blackColor15Medium: {
        color: Colors.blackColor,
        fontSize: 15.0,
        fontFamily: 'Poppins-Medium'
    },

    blackColor16Medium: {
        color: Colors.blackColor,
        fontSize: 16.0,
        fontFamily: 'Poppins-Medium'
    },

    blackColor16SemiBold: {
        color: Colors.blackColor,
        fontSize: 16.0,
        fontFamily: 'Poppins-SemiBold'
    },

    blackColor18SemiBold: {
        color: Colors.blackColor,
        fontSize: 18.0,
        fontFamily: 'Poppins-SemiBold'
    },

    blackColor20SemiBold: {
        color: Colors.blackColor,
        fontSize: 20.0,
        fontFamily: 'Poppins-SemiBold'
    },

}

export const Sizes = {
    fixPadding: 10.0,
}

export const CommonStyles = {
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowAlignCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonShadow: {
        shadowColor: Colors.primaryColor,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 12,
        elevation: 3.0,
    },
    buttonStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        padding: Sizes.fixPadding,
        margin: Sizes.fixPadding * 2.0,
    },
    shadow: {
        shadowColor: Colors.blackColor,
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 },
        elevation: 3.0,
    }
}

export const screenWidth = Dimensions.get('window').width;

export const screenHeight = Dimensions.get('window').height;