
import { Platform, StyleSheet } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../Themes';

const styles = StyleSheet.create({

  header: {
    backgroundColor: '#2d324f',
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    paddingTop: (Metrics.HEIGHT * 0.03),
    elevation: 0,
    paddingLeft: (Metrics.WIDTH * 0.05),
    paddingRight: (Metrics.WIDTH * 0.05),
  },

  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent,
  },
  backArrow: {
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  menuIconWhite: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: Colors.transparent
  },

  textTitle: {
    fontSize: Fonts.moderateScale(16),
    color: 'white',
    marginTop: (Metrics.HEIGHT * 0.001),
    alignSelf: 'center',
    //fontFamily: Fonts.type.sfuiDisplayRegular,
  },

  right: {
    flex: 0.5
  },

  main: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow,
    flexDirection: 'column'
  },

  rowBg: {
    width: (Metrics.WIDTH),
    backgroundColor: Colors.snow,
    marginLeft: (Metrics.WIDTH) * 0.045,
    marginTop: (Metrics.HEIGHT) * 0.015,
  },

  profileImg: {
    width: (Metrics.WIDTH) * 0.12,
    height: (Metrics.WIDTH) * 0.12,
    borderRadius: (Metrics.WIDTH) * 0.06,
    alignSelf: 'flex-start',
  },

  rowNameTxt: {
    color: '#6f6f6f',
    fontSize: Fonts.moderateScale(20),
    //fontFamily: Fonts.type.sfuiDisplayMedium,
    textAlign: 'left'
  },

  rowDesignationTxt: {
    color: '#b7b7b7',
    fontSize: Fonts.moderateScale(13),
    //fontFamily: Fonts.type.sfuiDisplayRegular,
    textAlign: 'left'
  },

  dividerHorizontal: {
    width: ((Metrics.WIDTH) * 0.99) + 5,
    height: (Metrics.HEIGHT) * 0.001,
    backgroundColor: '#D7D7D7',
    alignSelf: 'flex-end',
  },

  followBgNotSelected: {
    width: (Metrics.WIDTH) * 0.18,
    height: (Metrics.HEIGHT) * 0.035,
    borderRadius: (Metrics.HEIGHT) * 0.045,
    borderWidth: 1,
    borderColor: '#0691ce',
    marginRight: (Metrics.WIDTH) * 0.03,
    justifyContent: 'center'
  },

  followBgSelected: {
    width: (Metrics.WIDTH) * 0.18,
    height: (Metrics.HEIGHT) * 0.035,
    borderRadius: (Metrics.HEIGHT) * 0.045,
    backgroundColor: '#0691ce',
    marginRight: (Metrics.WIDTH) * 0.03,
    justifyContent: 'center'
  },

  followTxtSelected: {
    fontSize: Fonts.moderateScale(11),
    //fontFamily: Fonts.type.sfuiDisplayRegular,
    color: Colors.snow,
    alignSelf: 'center',
  },

  followTxtNotSelected: {
    fontSize: Fonts.moderateScale(11),
    //fontFamily: Fonts.type.sfuiDisplayRegular,
    color: '#0691ce',
    alignSelf: 'center',
  },

  listMainView: {
    width: (Metrics.WIDTH)
  },

  rowView: {
    flexDirection: 'row',
    marginBottom: (Metrics.HEIGHT) * 0.015
  },

  namePostView: {
    flexDirection: 'column',
    //marginLeft: (Metrics.WIDTH) * 0.045,
    width: (Metrics.WIDTH) * 0.75,
    justifyContent: 'center'
  },
  LmodelMain: {
		height: Metrics.HEIGHT,
		width: Metrics.WIDTH,
		justifyContent: 'center',
		alignItems: 'center'
  },
  Lbuttondialogsignin: {
		backgroundColor: Colors.app_button,
		alignSelf: 'center',
		borderRadius: 40,
		height: Metrics.HEIGHT * 0.07,
		width: Metrics.WIDTH * 0.80,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: Metrics.HEIGHT * 0.03
	},
	LmodelCenter: {
		borderRadius: 5,
		height: Metrics.HEIGHT * 0.48,
		width: Metrics.WIDTH * 0.95,
		backgroundColor: 'white',
		padding: 10
	},
	Lclose: {
		alignItems: 'flex-end'
	},
	LtxtsingIn: {
		fontSize: 25,
		//fontFamily: Fonts.SFUIDisplayRegular,
		justifyContent: 'center',
		alignSelf: 'center',
		marginBottom: 5
	},
	Litem: {
		justifyContent: 'center',
		alignSelf: 'center',
		marginTop: 8,
		width: Metrics.WIDTH * 0.80,
		height: 40
	},
	Linput: {
		//fontFamily:'SFUIDisplay-Regular',
		color: '#b7b7b7'
  },
  LmodelSignUp: {
		alignSelf: 'center',
		//fontFamily:'SFUIDisplay-Regular',
		color: 'white'
  },
  bottomsec: {
		width: Metrics.WIDTH * 0.80,
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
  },
  
  buttonsignup01: {
		borderWidth: 1,
		borderColor: 'white',
		backgroundColor: Colors.app_button,
		alignSelf: 'center',
		marginTop: Metrics.HEIGHT * 0.03,
		borderRadius: 40,
		width: Metrics.WIDTH * 0.35,
		height: Metrics.HEIGHT * 0.09,
		justifyContent: 'center'
  },
  signupbutton: {
		...Platform.select({
			ios: { fontFamily: 'Arial', },
			android: { fontFamily: 'Roboto' }
		}),

		alignContent: 'center',
		color: 'white',
		alignSelf: 'center',
		fontSize: 20
  },
  
});

export default styles;
