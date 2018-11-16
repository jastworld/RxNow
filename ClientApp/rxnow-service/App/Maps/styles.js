
import { Platform, StyleSheet, Dimensions } from 'react-native';
// Screen Styles
import { Fonts, Metrics, Colors } from '../Themes/';


const styles = StyleSheet.create({
	container: {
        flex: 1,
        justifyContent: 'center'
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
      }
});
export default styles;
