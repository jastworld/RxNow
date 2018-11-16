import React, { Component } from 'react';
import {
  Text,
  Image,
  StatusBar,
  Platform,
  TouchableOpacity,
  View,
  BackHandler,
  I18nManager,
  Alert
} from 'react-native';
import {
  Container,
  Right,
  Left,
  Content,
  Body,
  Header,
  Title,
  Input
} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { connect } from 'react-redux';
import { FontAwesome, MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons/';
import styles from './styles';
import { editProfileWithAPI } from './../Redux/Actions';

import NavigationService from './../Navigation';

class ProfileAccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      editTrue: 'content-save-settings',
      editFalse: 'account-edit',
      editPrompt: 'Are you sure you want to edit?',
      savePrompt: 'Are you sure you want to save?',
      edit: 'Edit Request',
      save: 'Save Request',
      isDateTimePickerVisible: false,
      name: this.props.profile.name,
      email: this.props.profile.email,
      phone: this.props.profile.phone,
      address: this.props.profile.address,
      language: this.props.profile.language,
      image_url: this.props.profile.image_url,
      dob: this.props.profile.dob,
      nokName: this.props.nextOfKin.name,
      nokEmail: this.props.nextOfKin.email,
      nokPhone: this.props.nextOfKin.phone,
      nokAddress: this.props.nextOfKin.address,

    };
    this.toggleEditable = this.toggleEditable.bind(this);
  }


  componentWillMount() {
    const that = this;
    BackHandler.addEventListener('hardwareBackPress', () => {
      that.props.navigation.navigate('Profile');
      return true;
    });
  }

  toggleEditable() {
    this.setState({
      editable: !this.state.editable
    });
    if (!this.state.editable) {
      const updatedUser = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        language: this.state.language,
        image_url: this.state.image_url,
        dob: this.state.dob,
        nokName: this.state.nokName,
        nokEmail: this.state.nokEmail,
        nokPhone: this.state.nokEmail,
        nokAddress: this.state.nokAddress,

      };
      this.props.editProfile(updatedUser, this.props.token);
    }
  }

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = (date) => {
    const dateString = date.toDateString();
    this.setState({ dob: dateString });
    this.hideDateTimePicker();
  };

  render() {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#2d324f', true);
      StatusBar.setTranslucent(true);
    }
    console.log(this.props);
    return (
      <Container style={styles.main}>
        <Header androidStatusBarColor={'#2d324f'} style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => NavigationService.navigate('Home')}
            >
              <FontAwesome
                name={I18nManager.isRTL ? 'angle-right' : 'angle-left'}
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </Left>

          <Body style={styles.body}>
            <Title style={styles.title}>Profile</Title>
          </Body>

          <Right style={styles.left}>
            <TouchableOpacity onPress={() => alert('Settings')}>
              <Ionicons name="md-settings" size={22} color="white" />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <Image source={{ uri: this.state.image_url }} style={styles.profileImg} />
          <Text style={styles.nameTxt}>{this.state.name}</Text>
          <View style={styles.dividerHorizontal} />
          <View style={styles.accountInfoBg}>
            <Text style={styles.accountInfoTxt}>ACCOUNT INFORMATION</Text>
            <Right>
              <TouchableOpacity
                style={styles.followBg}
                onPress={() => {
                  Alert.alert(
                    //title
                    this.state.editable ? this.state.save : this.state.edit,
                    //body
                    this.state.editable ? this.state.savePrompt : this.state.editPrompt,
                    [
                      { text: 'Yes', onPress: () => this.toggleEditable() },
                      { text: 'No', style: 'cancel' },
                    ],
                    { cancelable: true }
                    //clicking out side of alert will not cancel
                  );
                }}
              >
                <MaterialCommunityIcons
                  name={this.state.editable ? this.state.editTrue : this.state.editFalse}
                  size={25}
                  color="grey"
                />
              </TouchableOpacity>
            </Right>
          </View>

          <View style={styles.dividerHorizontal} />
          <View style={{ flexDirection: 'column' }}>
            <View style={styles.infoFieldBg}>
              <Text style={styles.infoFieldTitleTxt}>Name</Text>
              {this.state.editable ?
                <Input
                  style={styles.infoFieldDetailTxt}
                  onChangeText={(name) => this.setState({ name })}
                  value={this.state.name}
                />
                :
                <Text style={styles.infoFieldDetailTxt}>{this.state.name}</Text>
              }
            </View>
            <View style={styles.fieldDivider} />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={styles.infoFieldBg}>
              <Text style={styles.infoFieldTitleTxt}>Email</Text>
              {this.state.editable ?
                <Input
                  style={styles.infoFieldDetailTxt}
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email}
                />

                :
                <Text style={styles.infoFieldDetailTxt}>
                  {this.state.email}
                </Text>
              }
            </View>
            <View style={styles.fieldDivider} />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={styles.infoFieldBg}>
              <Text style={styles.infoFieldTitleTxt}>Phone</Text>
              {this.state.editable ?
                <Input
                  style={styles.infoFieldDetailTxt}
                  onChangeText={(phone) => this.setState({ phone })}
                  value={this.state.phone}
                />

                :
                <Text style={styles.infoFieldDetailTxt}>{this.state.phone}</Text>
              }
            </View>
            <View style={styles.fieldDivider} />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={styles.infoFieldBg}>
              <Text style={styles.infoFieldTitleTxt}>Address</Text>
              {this.state.editable ?
                <Input
                  style={styles.infoFieldDetailTxt}
                  onChangeText={(address) => this.setState({ address })}
                  value={this.state.address}
                />
                :
                <Text
                  style={styles.infoFieldDetailTxt}
                >
                  {this.state.address}
                </Text>
              }
            </View>
            <View style={styles.fieldDivider} />

          </View>

          <View style={{ flexDirection: 'column' }}>
            <View style={styles.infoFieldBg}>
              <Text style={styles.infoFieldTitleTxt}>Date of Birth</Text>
              {this.state.editable ?
                <View style={{ flex: 1 }}>
                  <TouchableOpacity onPress={this.showDateTimePicker}>
                    <Text>{this.state.dob}</Text>
                  </TouchableOpacity>
                  <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                  />
                </View>
                :
                <Text style={styles.infoFieldDetailTxt}>
                  {this.state.dob}
                </Text>
              }
            </View>

            <View style={styles.fieldDivider} />

          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={styles.infoFieldBg}>
              <Text style={styles.infoFieldTitleTxt}>Language</Text>
              {this.state.editable ?
                <Input
                  style={styles.infoFieldDetailTxt}
                  onChangeText={(language) => this.setState({ language })}
                  value={this.state.language}
                />

                :
                <Text
                  style={styles.infoFieldDetailTxt}
                  editable={this.state.editable}
                >
                  {this.state.language}
                </Text>
              }
            </View>
            <View style={styles.fieldDivider} />
          </View>
          <View style={styles.dividerHorizontal} />
          <View style={styles.accountInfoBg}>
            <Text style={styles.accountInfoTxt}>NEXT OF KIN</Text>
            <Right>
              <TouchableOpacity
                style={styles.followBg}
                onPress={() => {
                  Alert.alert(
                    //title
                    this.state.editable ? this.state.save : this.state.edit,
                    //body
                    this.state.editable ? this.state.savePrompt : this.state.editPrompt,
                    [
                      { text: 'Yes', onPress: () => this.toggleEditable() },
                      { text: 'No', style: 'cancel' },
                    ],
                    { cancelable: true }
                    //clicking out side of alert will not cancel
                  );
                }}
              >
                <MaterialCommunityIcons
                  name={this.state.editable ? this.state.editTrue : this.state.editFalse}
                  size={25}
                  color="grey"
                />
              </TouchableOpacity>
            </Right>
          </View>
          <View style={styles.dividerHorizontal} />
          <View style={{ flexDirection: 'column' }}>
            <View style={styles.infoFieldBg}>
              <Text style={styles.infoFieldTitleTxt}>Name</Text>
              {this.state.editable ?
                <Input
                  style={styles.infoFieldDetailTxt}
                  onChangeText={(nokName) => this.setState({ nokName })}
                  value={this.state.nokName}
                />

                :
                <Text style={styles.infoFieldDetailTxt}>{this.state.nokName}</Text>
              }
            </View>
            <View style={styles.fieldDivider} />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={styles.infoFieldBg}>
              <Text style={styles.infoFieldTitleTxt}>Email</Text>
              {this.state.editable ?
                <Input
                  style={styles.infoFieldDetailTxt}
                  onChangeText={(nokEmail) => this.setState({ nokEmail })}
                  value={this.state.nokEmail}
                />

                :
                <Text style={styles.infoFieldDetailTxt}>{this.state.nokEmail}</Text>
              }
            </View>
            <View style={styles.fieldDivider} />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={styles.infoFieldBg}>
              <Text style={styles.infoFieldTitleTxt}>Phone</Text>
              {this.state.editable ?
                <Input
                  style={styles.infoFieldDetailTxt}
                  onChangeText={(nokPhone) => this.setState({ nokPhone })}
                  value={this.state.nokPhone}
                />

                :
                <Text style={styles.infoFieldDetailTxt}>{this.state.nokPhone}</Text>}
            </View>
            <View style={styles.fieldDivider} />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <View style={styles.infoFieldBg}>
              <Text style={styles.infoFieldTitleTxt}>Address</Text>
              {this.state.editable ?
                <Input
                  style={styles.infoFieldDetailTxt}
                  onChangeText={(nokAddress) => this.setState({ nokAddress })}
                  value={this.state.nokAddress}
                />

                :
                <Text style={styles.infoFieldDetailTxt}>{this.state.nokAddress}</Text>
              }
            </View>
            <View style={styles.fieldDivider} />
          </View>
        </Content>

      </Container>
    );
  }

}
function mapStateToprops(state) {
  return {
    profile: state.profile.user,
    nextOfKin: state.nextOfKin.info,
    token: state.profile.token
  };
}
function mapDispatchToProps(dispatch) {
  return {
    editProfile: (userInfo, token) => dispatch(editProfileWithAPI(userInfo, token)),
  };
}
export default connect(mapStateToprops, mapDispatchToProps)(ProfileAccountInfo);
