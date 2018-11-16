import { StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../Themes/';

const styles = StyleSheet.create({

  header: {
		backgroundColor: Colors.transparent,
		height: Metrics.HEIGHT * 0.1,
		borderBottomWidth: 0,
		paddingTop: (Metrics.HEIGHT * 0.05),
		elevation: 0,
		paddingLeft: (Metrics.WIDTH * 0.05),
		paddingRight: (Metrics.WIDTH * 0.05),
	},

	left: {
		flex: 0.5
	},
  backArrow: {
    width: 30,
   justifyContent: 'center',
   alignItems: 'flex-start'
  },
	body: {
		flex: 3,
		alignSelf: 'center'
	},

	right: {
		flex: 0.5
	},

  imgContainer: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
  },

  slideUpBg: {
    position: 'absolute',
    bottom: 10,
    width: (Metrics.WIDTH) * 0.15,
    height: (Metrics.HEIGHT) * 0.05,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.10
  },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.transparent,
    flexDirection: 'column'
  },

  contentStyle: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
  },

  slideUpArrowIcon: {
      width: (Metrics.WIDTH) * 0.15,
      height: (Metrics.HEIGHT) * 0.05,
      resizeMode: 'contain',
  },

  slideArrowIcon: {
      width: (Metrics.WIDTH) * 0.15,
      height: (Metrics.HEIGHT) * 0.05,
      resizeMode: 'contain',
      alignSelf: 'center',
  },

  profileImg: {
    width: (Metrics.WIDTH) * 0.20,
    height: (Metrics.WIDTH) * 0.20,
    borderRadius: (Metrics.WIDTH) * 0.10,
    borderWidth: 3,
    borderColor: Colors.snow,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.018,
    resizeMode: 'cover'
  },

  nameTxt: {
      color: Colors.snow,
      //fontFamily: Fonts.type.sfuiDisplayMedium,
      fontSize: Fonts.moderateScale(19),
      alignSelf: 'center',
      marginTop: (Metrics.HEIGHT) * 0.02
  },

  detailsBg: {
    width: (Metrics.WIDTH) * 0.94,
    alignSelf: 'center',
    backgroundColor: Colors.snow,
    borderRadius: 10,
    marginTop: (Metrics.HEIGHT) * 0.04,
  },

  countTxt: {
    color: '#363636',
    fontSize: Fonts.moderateScale(15),
    //fontFamily: Fonts.type.sfuiDisplayMedium,
    textAlign: 'center'
  },

  labelTxt: {
    color: '#959595',
    fontSize: Fonts.moderateScale(12),
    //fontFamily: Fonts.type.sfuiDisplayRegular,
    textAlign: 'center'
  },

  settingText: {
      color: Colors.snow,
      fontSize: Fonts.moderateScale(12),
  },

  detailOneBg: {
    flexDirection: 'row',
    marginLeft: (Metrics.WIDTH) * 0.02,
    marginRight: (Metrics.WIDTH) * 0.02,
    marginTop: (Metrics.WIDTH) * 0.03,
    marginBottom: (Metrics.WIDTH) * 0.03
  },

  followerFollowingBg: {
    flexDirection: 'column',
    width: (Metrics.WIDTH) * 0.25
  },

  followBg: {
    width: (Metrics.WIDTH) * 0.25,
    height: (Metrics.HEIGHT) * 0.05,
    backgroundColor: '#0691ce',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  dividerHorizontal: {
    backgroundColor: '#ebebeb',
    height: 1,
    width: (Metrics.WIDTH) * 0.94
  },

  slideArrowBg: {
    width: (Metrics.WIDTH) * 0.17,
    height: (Metrics.HEIGHT) * 0.07,
    alignSelf: 'center',
    marginTop: (Metrics.HEIGHT) * 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
    alignItems: 'center'

  },
  itemName: {
    fontSize: 16,
    color: '#1E656D',
    fontWeight: '800',
  },

});

export default styles;
