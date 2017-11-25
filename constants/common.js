import Colors from './Colors';
import Layout from './Layout';
import Typography from './Typography';

const Common = {
    /**
     * Typography
     */
    h1: {
        fontSize: 28,
        fontFamily: Typography.titleFont,
        color: Colors.tintColor,
        backgroundColor: 'transparent'
    },
    h2: {
        fontSize: 20,
        fontFamily: Typography.titleFont,
        color: Colors.tintColor,
        backgroundColor: 'transparent'
    },
    h3: {
        fontSize: 14,
        fontFamily: Typography.titleFont,
        color: Colors.tintColor,
        backgroundColor: 'transparent'
    },
    bigNumber: {
        fontSize: 24,
        fontFamily: Typography.numberFont,
        color: Colors.tintColor,
        backgroundColor: 'transparent',
    },
    listLabel: {
        color: Colors.bodyTextColor,
    },
    whiteText: {
        color: '#fff'
    },
    /**
     * Shadows
     */
    shadowSmall: {
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.4
    },
    /**
     * Elements
     */
    accountsContainer: {
        position: 'absolute',
        bottom: -36,
        left: 0,
        paddingLeft: 12,
        zIndex: 10,
        width: 375,
    },
    accountSingle: {
        width: 150,
        height: 75,
        backgroundColor: Colors.lightColorPeach,
        marginRight: 4,
        marginLeft: 12,
        marginBottom: 12,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    badgeContainer: {
        backgroundColor: Colors.tintColor,
        paddingHorizontal: 24,
        paddingBottom: 64,
        paddingTop: 40,
        position: 'relative'
    },
    extraBottomMargin: {
        marginBottom: 36
    },
    roundCornersMedium: {
        borderRadius: 4
    },
    /**
     * Layout
     */
    section: {
        flex: 1,
        backgroundColor: '#fff'
    },
    row: {
        flexDirection: 'row'
    },
    listItem: {
        paddingHorizontal: 8,
        backgroundColor: Colors.lightColorBlue,
        borderRadius: 4,
        paddingVertical: 8,
        marginVertical: 2,
    },

}
module.exports = Common;