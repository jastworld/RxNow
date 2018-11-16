
import React, { Component } from 'react';
import {
  View, Text, Image, StatusBar, Platform,
  ImageBackground, TouchableOpacity, BackHandler, I18nManager
} from 'react-native';
import { Container, Right, Left, Content, Body, Header } from 'native-base';
import GridView from 'react-native-super-grid';
import { FontAwesome, MaterialCommunityIcons } from 'react-native-vector-icons/';
import { connect } from 'react-redux';

import Images from '../../Themes/Images';
import NavigationService from './../Navigation';
import styles from './styles';
import { isLoggedInAsyncStore } from './../Redux/Actions/';

/**
 *  Profile Screen
 */
const bgImage = 'https://amazingafrica.planetfem.com/wp-content/uploads/2016/05/Talking.jpg';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideStatus: true,
      slideDownStatus: true,
    };
  }

  componentWillMount() {
    this.props.isLoggedInAsyncStore();
  }

  componentDidMount() {
    const that = this;

    BackHandler.addEventListener('hardwareBackPress', () => {
      that.props.navigation.navigate('Profile');
      return true;
    });
  }

  slideUp() {
    this.setState({ slideStatus: false });
    this.setState({ slideDownStatus: true });
  }

  slideDown() {
    this.setState({ slideStatus: true });
    this.setState({ slideDownStatus: false });
  }
  sendMessage(item) {
    console.log(item);
  }
  render() {
    console.log('HOME P', this.props);
    if (!this.props.auth.isFetching) {
      if (!this.props.auth.isLoggedIn) {
        this.props.navigation.navigate('SignIn');
      }
    }
    console.log(this.props.profile);
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      StatusBar.setTranslucent(true);
    }
    const items = [
      { name: 'Profile', code: '#F1F3CE', icon: 'face-profile', navigate: 'Profile' },
      {
        name: 'Health Information', code: '#F1F3CE', icon: 'medical-bag', navigate: 'HealthIssues'
      },
      { name: 'View Nearby', code: '#F1F3CE', icon: 'ambulance', navigate: 'ViewNearBy' },
      { name: 'RxNow History', code: '#F1F3CE', icon: 'history', navigate: 'RxNowHistory' },
    ];

    return (

      <Container style={styles.main}>
        {
          this.state.slideStatus ?
            this.state.slideDownStatus ?

              <ImageBackground style={styles.imgContainer} source={{ uri: bgImage }}>

                <Header style={styles.header}>
                  <Left style={styles.left}>
                    <TouchableOpacity
                      style={styles.backArrow}
                      onPress={() => this.props.navigation.navigate('Profile')}
                    >
                      <FontAwesome
                        name={I18nManager.isRTL ? 'angle-right' : 'angle-left'}
                        size={30}
                        color="white"
                      />
                    </TouchableOpacity>
                  </Left>
                  <Body style={styles.body} />
                  <Right style={styles.right} />
                </Header>

                <View style={styles.slideUpBg}>
                  <TouchableOpacity onPress={() => this.slideUp()}>
                    <Image source={Images.slideUpArrowIcon} style={styles.slideUpArrowIcon} />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
              :
              <View animation="bounceInDown" duration={1100} delay={1400}>
                {
                  <ImageBackground style={styles.imgContainer} source={{ uri: bgImage }}>
                    <Header style={styles.header}>
                      <Left style={styles.left}>
                        <TouchableOpacity
                          style={styles.backArrow}
                          onPress={() => this.props.navigation.navigate('Profile')}
                        >
                          <FontAwesome
                            name={I18nManager.isRTL ? 'angle-right' : 'angle-left'}
                            size={30} color="white"
                          />
                        </TouchableOpacity>
                      </Left>
                      <Body style={styles.body} />
                      <Right style={styles.right} />
                    </Header>
                    <View style={styles.slideUpBg}>
                      <TouchableOpacity onPress={() => this.slideUp()}>
                        <Image source={Images.slideUpArrowIcon} style={styles.slideUpArrowIcon} />
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                }
              </View>
            :
            <View animation="bounceInUp" duration={1100} delay={1400}>
              {
                <ImageBackground source={{ uri: bgImage }} style={styles.imgContainer}>
                  <Content style={styles.contentStyle}>
                    <TouchableOpacity onPress={() => this.slideDown()} style={styles.slideArrowBg}>
                      <Image source={Images.slideUpArrowIcon} style={styles.slideArrowIcon} />
                    </TouchableOpacity>
                    <Image source={{ uri: this.props.profile.image_url }} style={styles.profileImg} />
                    <Text style={styles.nameTxt}>{this.props.profile.name}</Text>
                    <View style={styles.detailsBg}>
                      <View style={styles.detailOneBg}>

                        <Right>
                          <TouchableOpacity style={styles.followBg} onPress={() => alert('FOLLOW')}>
                            <Text style={styles.settingText}>Settings</Text>
                          </TouchableOpacity>
                        </Right>
                      </View>

                      <View style={styles.dividerHorizontal} />

                      <View>
                        <GridView
                          itemDimension={130}
                          items={items}
                          style={styles.gridView}
                          renderItem={item => (

                            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                              <TouchableOpacity
                                style={styles.button}
                                onPress={() => NavigationService.navigate(item.navigate)}
                              >
                                <MaterialCommunityIcons name={item.icon} size={90} color="#F62A00" />
                                <Text style={styles.itemName}>{item.name}</Text>
                              </TouchableOpacity>

                            </View>
                          )}
                        />
                      </View>
                    </View>
                  </Content>
                </ImageBackground>
              }
            </View>
        }

      </Container>
    );
  }
}
function mapStateToprops(state) {
  return {
    profile: state.profile.user,
    auth: state.auth,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    isLoggedInAsyncStore: () => dispatch(isLoggedInAsyncStore()),
  };
}

export default connect(mapStateToprops, mapDispatchToProps)(Home);
