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
        backgroundColor: 'transparent',
        marginBottom: 8
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
    bodyText: {
        fontFamily: Typography.bodyFont,
        color: Colors.bodyTextColor,
        fontSize: 15,
        lineHeight: 23,
        backgroundColor: 'transparent'        
    },
    bodyTextError: {
        fontFamily: Typography.bodyFont,
        color: Colors.dangerColor,
        fontSize: 15,
        lineHeight: 23,
        backgroundColor: 'transparent'        
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
    shadowSubtle: {
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        shadowOpacity: 0.1
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
    recurrentSingle: {
        flex: 1,
        backgroundColor: Colors.lightColorBlue,
        marginRight: 6,
        minWidth: 120,
        marginBottom: 12,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    badgeContainer: {
        backgroundColor: Colors.tintColor,
        paddingHorizontal: 16,
        paddingBottom: 64,
        paddingTop: 40,
        position: 'relative'
    },
    overviewContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 12, 
    },
    extraBottomMargin: {
        marginBottom: 36
    },
    roundCornersMedium: {
        borderRadius: 4
    },
    labelTitle: {
        fontFamily: Typography.bodyFont,
        color: Colors.bodyTextColor,
        fontSize: 15,
        backgroundColor: 'transparent'   
    },
    labelValue: {
        fontSize: 24,
        fontFamily: Typography.titleFont,
        color: Colors.tintColor
    },
    button: {
        backgroundColor: Colors.activityColor,
        color: Colors.tintColor,
        borderRadius: 4,
        flex: 1,
        maxHeight: 37,
        paddingVertical: 8,
        alignItems: 'center'
    },
    buttonDisabled: {
        backgroundColor: '#CDCDCD',
        color: Colors.tintColor,
        borderRadius: 4,
        flex: 1,
        maxHeight: 37,
        paddingVertical: 8,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 15,
        fontFamily: Typography.titleFont,
        color: Colors.tintColor,
        backgroundColor: 'transparent'
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
    container: {
        paddingHorizontal: 16,
        flex: 1
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