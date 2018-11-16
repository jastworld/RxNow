
import React, { Component } from 'react';
import {
  Text, View, Image, StatusBar, Platform, Modal, TouchableHighlight,
  BackHandler, TouchableOpacity, I18nManager
} from 'react-native';
import { Container, Item, Input, CheckBox } from 'native-base';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { connect } from 'react-redux';
import styles from './styles';
import { Colors } from '../../Themes/';
import { registerUserWithAPI, loginUserWithAPI } from './../Redux/Actions/';
import NavigationService from '../Navigation/';


class Signing extends Component {

  state = {
    signUpModalVisible: false,
    checked: false,
    loginModalVisible: false,
    mainViewBlur: false,
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    userName: '',
  };

  componentWillMount() {
    const that = this;
    BackHandler.addEventListener('hardwareBackPress', () => {
      that.props.navigation.navigate('SignUp');
      return true;
    });
  }

  setSignUpModalVisible(visible) {
    this.setState({
      signUpModalVisible: visible,
      mainViewBlur: visible
    });
  }
  setLoginModalVisible(visible) {
    this.setState({ loginModalVisible: visible, mainViewBlur: visible });
  }

  validateInput(signup) {
    if (signup) {
      // if (
      //     this.state.fullname && 
      //     this.state.email && 
      //     this.state.password
      //   ) {
      const newUser = {
        fullName: this.state.fullName,
        email: this.state.email,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        userName: this.state.userName,
      };
      this.setState({ signUpModalVisible: false });
     
      this.props.registerUser(newUser);
      
      //}
    } else {
      this.setState({ loginModalVisible: false });
      const returningUser = { email: this.state.email, password: this.state.password };
      this.props.loginUser(returningUser);
    }
  }

  login = () => {
    alert('Login');
  }
  switchToDifferentPage = () => {
    NavigationService.navigate('Home');
  }
  render() {
    StatusBar.setBarStyle('light-content', true);

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      StatusBar.setTranslucent(true);
    }


    const bgLogo = {
      uri: 'http://www.ipharmd.net/images/rx_symbol_white_arial_red_button.png'
    };


    return (
      <Container>
        {console.log('SIGNING', this.props)}
        {
          this.props.auth.isFetching ?
            <View>
              {/*Show loading screen*/}
            </View> : <View />
        }
        {
          this.props.auth.isLoggedIn ?
            this.switchToDifferentPage() : <View />
        }

        <View style={styles.maincontent}>

          <View style={styles.logosec}>
            <TouchableOpacity 
              style={styles.backarrow} 
              onPress={() => this.props.navigation.navigate('SignUp')}
            >
              <FontAwesome 
                name={I18nManager.isRTL ? 'angle-right' : 'angle-left'} 
                size={30} color="white" 
              />
            </TouchableOpacity>
            <Image source={bgLogo} style={styles.logo} />
          </View>

          <View style={styles.slidemain}>
            <View style={styles.slidersec}>

              <Swiper
                showsButtons={false}
                autoplay
                autoplayTimeout={2.5}
                activeDot={<View style={styles.activeDot} />}
                dot={<View style={styles.dot} />}
              >
                <View style={styles.slide1}>
                  <Text style={styles.headertext}>
                    Get the help you need
                    </Text>

                </View>
                <View style={styles.slide2}>
                  <Text style={styles.headertext}>
                    when you need it
                      </Text>

                </View>
                <View style={styles.slide3}>
                  <Text style={styles.headertext}>
                    from our trusted medical personels
                      </Text>
                </View>
              </Swiper>

            </View>
          </View>

          <View style={styles.btnsec}>
            <View style={styles.bottomsec}>
              <TouchableHighlight 
              info 
              style={styles.buttonsignup01} onPress={() => this.setSignUpModalVisible(true)}
              >
                <Text autoCapitalize="words" style={styles.signupbutton}>Sign Up</Text>
              </TouchableHighlight>
              <TouchableHighlight 
              info 
              style={styles.buttonsignup01} onPress={() => this.setLoginModalVisible(true)}
              >
                <Text autoCapitalize="words" style={styles.signupbutton}>Login</Text>
              </TouchableHighlight>
            </View>

          </View>

          {/*SignUp Modal*/}
          <Modal
            animationType="slide"
            transparent
            visible={this.state.signUpModalVisible}
            onRequestClose={() => {
              this.setSignUpModalVisible(!this.state.signUpModalVisible);
            }}
          >
            <View style={styles.RView2}>
              <View style={styles.Rview3}>
                <View style={styles.Rview4}>
                  <TouchableHighlight
                    onPress={() => {
                      this.setSignUpModalVisible(!this.state.signUpModalVisible);
                    }}
                  >
                    <Ionicons name="md-close" size={30} color="black" />
                  </TouchableHighlight>
                </View>

                <Text style={styles.Rdialogtitle}>Sign Up</Text>

                <Item rounded style={styles.Ritemname}>
                  <Input
                    placeholderTextColor={Colors.greys}
                    textAlign={I18nManager.isRTL ? 'right' : 'left'}
                    placeholder="Full Name"
                    style={styles.Rinputname}
                    onChangeText={(fullName) => this.setState({ fullName })}
                    value={this.state.fullName}
                  />
                </Item>

                <Item rounded style={styles.Ritemname}>
                  <Input
                    placeholderTextColor={Colors.greys}
                    textAlign={I18nManager.isRTL ? 'right' : 'left'}
                    placeholder="Email"
                    keyboardType="email-address"
                    style={styles.Rinputname}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}

                  />
                </Item>
                <Item rounded style={styles.Ritemname}>
                  <Input
                    placeholderTextColor={Colors.greys}
                    textAlign={I18nManager.isRTL ? 'right' : 'left'}
                    placeholder="Username"
                    style={styles.Rinputname}
                    onChangeText={(userName) => this.setState({ userName })}
                    value={this.state.userName}
                  />
                </Item>
                <Item rounded style={styles.Ritemname}>
                  <Input
                    placeholderTextColor={Colors.greys}
                    textAlign={I18nManager.isRTL ? 'right' : 'left'}
                    placeholder="Phone number"
                    //keyboardType="phone"
                    style={styles.Rinputname}
                    onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                    value={this.state.phoneNumber}
                  />
                </Item>

                <Item rounded style={styles.Ritemname}>
                  <Input
                    placeholderTextColor={Colors.greys}
                    textAlign={I18nManager.isRTL ? 'right' : 'left'}
                    placeholder="Password"
                    secureTextEntry
                    style={styles.Rinputname}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                  />
                </Item>

                <Item rounded style={styles.Ritemname}>
                  <Input
                    placeholderTextColor={Colors.greys}
                    textAlign={I18nManager.isRTL ? 'right' : 'left'}
                    placeholder="Confirm password"
                    secureTextEntry
                    style={styles.Rinputname}
                    onChangeText={(password2) => this.setState({ password2 })}
                    value={this.state.password2}
                  />
                </Item>

                <TouchableOpacity
                  style={styles.Rbuttondialogsignup}
                  onPress={() => this.validateInput(true)}
                >
                  <Text autoCapitalize="words" style={styles.Rbtntxt}>
                    Sign Up
                </Text>
                </TouchableOpacity>

                {/*<View style={styles.txtBg}>*/}
                <Text autoCapitalize="words" style={styles.Rterms}>
                  Clicking Sign Up means that you agree to the
                </Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                  <TouchableOpacity onPress={() => alert('Terms & Condition')}>
                    <Text style={styles.Rtermstwo}>
                      Terms & Conditions
                  </Text>
                  </TouchableOpacity>
                  <Text style={styles.Rtermsthree}> and</Text>
                  <TouchableOpacity onPress={() => alert('Privacy Policy')}>
                    <Text style={styles.Rtermstwo}> Privacy Policy.</Text>
                  </TouchableOpacity>
                </View>


                {/*</View>*/}

              </View>
            </View>
          </Modal>

          {/*Login Modal*/}
          <Modal
            animationType="slide"
            transparent
            visible={this.state.loginModalVisible}
            onRequestClose={() => {
              this.setLoginModalVisible(!this.state.loginModalVisible);
            }}
          >
            <View style={styles.LmodelMain}>
              <View style={styles.LmodelCenter}>
                <View style={styles.Lclose}>
                  <TouchableHighlight
                    onPress={() => {
                      this.setLoginModalVisible(!this.state.loginModalVisible);
                    }}
                  >
                    <EvilIcons name="close" size={30} color="grey" />
                  </TouchableHighlight>
                </View>

                <Text style={styles.LtxtsingIn}>Sign In</Text>

                <Item regular style={styles.Litem}>
                  <Input
                    placeholder="Email"
                    keyboardType="email-address"
                    style={styles.Linput}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                  />
                </Item>

                <Item regular style={styles.Litem}>
                  <Input
                    placeholder="Password"
                    secureTextEntry
                    style={styles.Linput}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                  />
                </Item>

                <View style={styles.LrememView}>
                  <CheckBox
                    checked={this.state.checked}
                    color={'#4cd964'}
                    onPress={() =>
                      this.setState({ checked: !this.state.checked })
                    }
                  />
                  <Text style={styles.Lremem}>Remember me</Text>
                  <TouchableOpacity onPress={() => alert('Forgot Password')}>
                    <Text style={styles.Lforgot}>Forgot password?</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  info
                  style={styles.Lbuttondialogsignin}
                  onPress={() => this.validateInput(false)}
                >
                  <Text autoCapitalize="words" style={styles.LmodelSignUp}>
                    Sign In
                </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

        </View>

      </Container>
    );
  }
}


function mapStateToprops(state) {
  return {
    auth: state.auth
  };
}
function mapDispatchToProps(dispatch) {
  return {
    registerUser: (userInfo) => dispatch(registerUserWithAPI(userInfo)),
    loginUser: (userInfo) => dispatch(loginUserWithAPI(userInfo))
  };
}

export default connect(mapStateToprops, mapDispatchToProps)(Signing);
