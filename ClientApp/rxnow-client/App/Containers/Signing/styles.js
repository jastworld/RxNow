
import { Platform, StyleSheet, Dimensions, I18nManager } from 'react-native';

import { Metrics, Colors } from '../../Themes/';

const styles = StyleSheet.create({
	maincontent: {
		backgroundColor: Colors.app_background,
	},
	logosec: {
		height: (Metrics.HEIGHT * 0.30),
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center'
	},

	slidersec: {
		height: (Metrics.HEIGHT * 0.35),
		backgroundColor: 'transparent'
	},

	slidemain: {
		height: (Metrics.HEIGHT * 0.40),
		backgroundColor: 'transparent',
		justifyContent: 'center'
	},

	btnsec: {
		height: (Metrics.HEIGHT * 0.30),
		backgroundColor: 'transparent'

	},
	logo: {
		height: (Metrics.HEIGHT * 0.20009),
		width: (Metrics.WIDTH * 0.36),
		marginTop: (Metrics.HEIGHT * 0.1),
	},

	mainbg: {
		height: Metrics.HEIGHT,
		width: Metrics.WIDTH,
	},
	backarrow: {
		left: 0,
		top: 0,
		width: 30,
		position: 'absolute',
		marginTop: 20,
		marginLeft: 20
	},
	activeDot: {
		backgroundColor: 'white',
		width: 10,
		height: 10,
		borderRadius: 5,
		marginLeft: 3,
		marginRight: 3,
		marginTop: 3,
		marginBottom: 3,
	},
	dot: {
		backgroundColor: '#8796a6',
		width: 10,
		height: 10,
		borderRadius: 5,
		marginLeft: 3,
		marginRight: 3,
		marginTop: 3,
		marginBottom: 3,
	},
	bottomsec: {
		width: Metrics.WIDTH * 0.80,
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	headertext: {
		...Platform.select({
			ios: { fontFamily: 'Arial', },
			android: { fontFamily: 'Roboto' }
		}),

		backgroundColor: 'transparent',
		textAlign: 'center',
		alignSelf: 'center',
		fontSize: 28,
		width: Metrics.WIDTH * 0.90,
		color: '#A1D6E2',
	},

	desctext: {
		...Platform.select({
			ios: { fontFamily: 'Arial', },
			android: { fontFamily: 'Roboto' }
		}),
		backgroundColor: 'transparent',
		textAlign: 'center',
		alignSelf: 'center',
		fontSize: 16,
		width: Metrics.WIDTH * 0.70,
		color: '#A1D6E2',
		marginTop: 20
	},
	backicon: {
		width: 10,
		height: 18,
		marginLeft: 20,
		marginTop: 40,
	},

	buttonlogin: {
		backgroundColor: Colors.app_button,
		alignSelf: 'center',
		borderRadius: 40,
		width: Metrics.WIDTH * 0.80,
		height: Metrics.HEIGHT * 0.09,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: Metrics.HEIGHT * 0.05,
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


	loginbutton: {
		...Platform.select({
			ios: { fontFamily: 'Arial', },
			android: { fontFamily: 'Roboto' }
		}),
		color: 'white',
		alignContent: 'center',
		alignSelf: 'center',
		fontSize: 20
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

	container: {
		width: Dimensions.get('window').width,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	RView2: {
		width: Metrics.WIDTH,
		height: Metrics.HEIGHT,
		alignItems: 'center',
		justifyContent: 'center'
	},

	Rview3: {
		borderRadius: 5,
		width: Metrics.WIDTH * 0.95,
		height: Metrics.HEIGHT * 0.7,
		backgroundColor: 'white',
		alignSelf: 'center',
		justifyContent: 'center'
	},

	Rview4: {
		backgroundColor: 'transparent',
		width: Metrics.WIDTH * 0.85,
		top: 0,

		...(I18nManager.isRTL
			? {
				alignItems: 'flex-start'
			}
			: {
				alignItems: 'flex-end'
			}),
		alignSelf: 'center'
	},

	Rdialogtitle: {
		color: Colors.darktext,
		fontSize: 25,
		justifyContent: 'center',
		alignSelf: 'center'
	},

	Ritemname: {
		justifyContent: 'center',
		alignSelf: 'center',
		marginTop: Metrics.HEIGHT * 0.02,
		width: Metrics.WIDTH * 0.8,
		height: Metrics.HEIGHT * 0.065,
		borderRadius: 5
	},

	Rinputname: {
		marginLeft: 5,
		...Platform.select({
			ios: { fontFamily: 'Arial', },
			android: { fontFamily: 'Roboto' }
		}),
		//color: Colors.shadows
	},

	Rterms: {
		alignSelf: 'center',
		...Platform.select({
			ios: { fontFamily: 'Arial', },
			android: { fontFamily: 'Roboto' }
		}),

		color: Colors.darktext,
		marginTop: Metrics.HEIGHT * 0.03,
		fontSize: 12,
		textAlign: 'center',
		width: Metrics.WIDTH * 0.8,
		lineHeight: 18
	},

	Rtermstwo: {
		alignSelf: 'center',
		...Platform.select({
			ios: { fontFamily: 'Arial', },
			android: { fontFamily: 'Roboto' }
		}),
		color: Colors.loginBlue,
		fontSize: 12,
		textAlign: 'center'
	},

	Rtermsthree: {
		marginLeft: 5,
		...Platform.select({
			ios: { fontFamily: 'Arial', },
			android: { fontFamily: 'Roboto' }
		}),
		fontSize: 12,
		color: Colors.darktext
	},

	Rbuttondialogsignup: {
		backgroundColor: Colors.app_button,
		alignSelf: 'center',
		marginTop: Metrics.HEIGHT * 0.04,
		borderRadius: 40,
		width: Metrics.WIDTH * 0.8,
		height: Metrics.HEIGHT * 0.08,
		justifyContent: 'center'
	},
	Rbtntxt: {
		alignSelf: 'center',
		...Platform.select({
			ios: { fontFamily: 'Arial', },
			android: { fontFamily: 'Roboto' }
		}),
		color: 'white'
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
	LrememView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		width: Metrics.WIDTH * 0.80,
		alignSelf: 'center'
	},
	Lremem: {
		marginLeft: 5,
		fontSize: 15,
		//fontFamily:'SFUIDisplay-Regular'
	},
	Lforgot: {
		alignSelf: 'flex-end',
		fontSize: 15,
		justifyContent: 'flex-end',
		//fontFamily:'SFUIDisplay-Regular'
	},
	LmodelSignUp: {
		alignSelf: 'center',
		//fontFamily:'SFUIDisplay-Regular',
		color: 'white'
	},
	LmodelMain: {
		height: Metrics.HEIGHT,
		width: Metrics.WIDTH,
		justifyContent: 'center',
		alignItems: 'center'
	},
});

export default styles;

