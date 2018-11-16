
import React, { Component } from 'react';
import { Text, Modal, StatusBar, Platform, TouchableOpacity, BackHandler, I18nManager, TouchableHighlight, Picker } from 'react-native';
import { Container, Button, Right, Left, Footer, FooterTab, Content, Body, Header, Item, Input, Icon, Fab } from 'native-base';

// Screen Styles
import { View } from 'react-native-animatable';
import { FontAwesome, MaterialIcons, Ionicons, MaterialCommunityIcons }
  from 'react-native-vector-icons/';
import styles from './styles';
import { Images, Metrics } from '../../../Themes/';

/**
 *  Profile Screen
 */
const profileImageOne = 'https://antiqueruby.aliansoftware.net//Images/social/ic_chat_propic04_21_29.png';
const profileImageTwo = 'https://antiqueruby.aliansoftware.net//Images/social/card_sc15.png';
const profileImageThree = 'https://antiqueruby.aliansoftware.net//Images/social/card_propic_01_sc12.png';
const profileImageFour = 'https://antiqueruby.aliansoftware.net//Images/social/people_four_soeighteen.png';
const profileImageFive = 'https://antiqueruby.aliansoftware.net//Images/social/people_five_soeighteen.png';
const profileImageSix = 'https://antiqueruby.aliansoftware.net//Images/social/ic_user_one_row_sone.png';
const profileImageSeven = 'https://antiqueruby.aliansoftware.net//Images/social/comments_profile_foursnine.png';
const profileImageEight = 'https://antiqueruby.aliansoftware.net//Images/social/people_eight_soeighteen.png';
const profileImageNine = 'https://antiqueruby.aliansoftware.net//Images/social/people_nine_soeighteen.png';

export default class Social18 extends Component {

  componentWillMount() {
    const that = this;
    BackHandler.addEventListener('hardwareBackPress', () => {
      that.props.navigation.navigate('Social');
      return true;
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      addModal: false,
      symptom: '',
      data: [
        {
          id: 1,
          name: 'High Blood Pressure',
          severity: 'High',
          isSelected: false
        },
        {
          id: 2,
          name: 'Diabetese',
          severity: 'High',
          isSelected: false
        },
      ]
    };
  }
  addSymptoms() {
    console.log('LOGGED', this.state.symptom);
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#2d324f', true);
      StatusBar.setTranslucent(true);
    }

    const that = this;

    const data = [
      {
        id: 1,
        profileImage: { uri: profileImageOne },
        name: 'Johnie Cornwall',
        post: 'Senior Design Director',
        isSelected: 'true'
      },
      {
        id: 2,
        profileImage: { uri: profileImageOne },
        name: 'Renaldo Rozman',
        post: 'Lead 3D Artist',
        isSelected: 'false'
      },
      {
        id: 3,
        profileImage: { uri: profileImageTwo },
        name: 'Argelia Bee',
        post: 'Copywriter',
        isSelected: 'false'
      },
      {
        id: 4,
        profileImage: { uri: profileImageThree },
        name: 'Kimiko Hoyle',
        post: 'Marketing & Creative Services',
        isSelected: 'false'
      },
      {
        id: 5,
        profileImage: { uri: profileImageFour },
        name: 'Elene Jeppesen',
        post: 'Creative Leader',
        isSelected: 'false'
      },
      {
        id: 6,
        profileImage: { uri: profileImageFive },
        name: 'Lyndon Benavente',
        post: 'Senior Design Director',
        isSelected: 'false'
      },
      {
        id: 7,
        profileImage: { uri: profileImageSix },
        name: 'Elfrieda Esser',
        post: 'UX/UI Designer',
        isSelected: 'false'
      },
      {
        id: 8,
        profileImage: { uri: profileImageSeven },
        name: 'Devin Newberg',
        post: 'Marketing Designer',
        isSelected: 'false'
      },
      {
        id: 9,
        profileImage: { uri: profileImageEight },
        name: 'Joey Gumm',
        post: 'Interactive Art Director',
        isSelected: 'false'
      },
    ];

    return (
      <Container style={styles.main}>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity style={styles.backArrow} onPress={() => that.props.navigation.navigate('Social')}>
              {
                (I18nManager.isRTL)
                  ?
                  <FontAwesome name="angle-right" size={25} color='white' />
                  :
                  <FontAwesome name="angle-left" size={25} color='white' />
              }
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textTitle}>People</Text>
          </Body>
          <Right style={styles.right}>
            <TouchableOpacity onPress={() => alert('Search')}>
              <Ionicons name="ios-search" size={25} color='white' />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <View style={styles.listMainView} animation="zoomInDown" duration={1100} delay={1400}>
            {
              this.state.data.map((item, index) => (
                <View style={styles.rowBg} key={index}>
                  <View style={styles.rowView}>
                    {/*<Image source={item.profileImage} style={styles.profileImg} />*/}
                    <View style={styles.namePostView}>
                      <Text style={styles.rowNameTxt}>{item.name}</Text>
                      <Text style={styles.rowDesignationTxt}>{item.severity}</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                      {
                        (item.isSelected == true) ?
                          <TouchableOpacity style={styles.followBgSelected} onPress={() => this._fnChangeItem(item.id)}><Text style={styles.followTxtSelected}>Remove</Text></TouchableOpacity> :
                          <TouchableOpacity style={styles.followBgNotSelected} onPress={() => this._fnChangeItem(item.id)}><Text style={styles.followTxtNotSelected}>Remove</Text></TouchableOpacity>
                      }
                    </View>
                  </View>
                  <View style={(index === data.length - 1) ? null : styles.dividerHorizontal} />
                </View>
              ))
            }
          </View>


        </Content>

        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF', marginBottom: 100 }}
          position="bottomRight"
          onPress={() => this.setState({ addModal: !this.state.addModal })}
        >
          <Icon name="ios-add" />

        </Fab>
        <Modal
          animationType="slide"
          transparent
          visible={this.state.addModal}
          onRequestClose={() => {
            this.setState({ addModal: !this.state.addModal });
          }}
        >
          <View style={styles.LmodelMain}>
            <View style={styles.LmodelCenter}>
              <View style={styles.Lclose}>
                <TouchableHighlight
                  onPress={() => {
                    this.setState({ addModal: !this.state.addModal });
                  }}
                >
                  <FontAwesome name="close" size={30} color="grey" />
                </TouchableHighlight>
              </View>

              <Text style={styles.LtxtsingIn}>Add Symptoms</Text>
              <Picker selectedValue={this.state.symptom} onValueChange={(value) => this.setState({ symptom: value })}>
               <Picker.Item label="Steve" value="steve" />
               <Picker.Item label="Ellen" value="ellen" />
               <Picker.Item label="Maria" value="maria" />
              </Picker>
              <Item 
                regular 
                style={styles.Litem}
              >
                <Input
                  placeholder="Email"
                  keyboardType="email-address"
                  style={styles.Linput}
                  onChangeText={(symptom) => this.setState({ symptom })}
                  value={this.state.symptom}
                />
              </Item>
              <View style={styles.bottomsec}>
                <TouchableHighlight
                  info
                  style={styles.buttonsignup01} onPress={() => this.addSymptoms()}
                >
                  <Text autoCapitalize="words" style={styles.signupbutton}>Add</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  info
                  style={styles.buttonsignup01} onPress={() => this.setState({ addModal: !this.state.addModal })}
                >
                  <Text autoCapitalize="words" style={styles.signupbutton}>Cancel</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>


        <Footer>
          <FooterTab>
            <Button vertical>
              <MaterialIcons
                name="healing"
                size={25}
                color="grey"
              />
              <Text>Health</Text>
            </Button>

            <Button vertical>
              <MaterialCommunityIcons
                name="folder-account"
                size={25}
                color="grey"
              />
              <Text>PCP</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    );
  }
  _fnChangeItem(listId) {
    // const newArray = this.state.data;
    const newArray = this.state.data;

    for (var i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].id == listId) {
        // alert(listId + ' prag ' +this.state.data[i].id)
        const newArray1 = [];

        for (var i = 0; i < this.state.data.length; i++) {
          if (this.state.data[i].id == listId) {
            newArray1.push({
              id: this.state.data[i].id,
              profileImage: this.state.data[i].profileImage,
              name: this.state.data[i].name,
              post: this.state.data[i].post,
              isSelected: !this.state.data[i].isSelected
            },
            );
          } else {
            newArray1.push({
              id: this.state.data[i].id,
              profileImage: this.state.data[i].profileImage,
              name: this.state.data[i].name,
              post: this.state.data[i].post,
              isSelected: this.state.data[i].isSelected
            },
            );
          }
        }

        this.setState({ data: newArray1 });
        console.log('pragnesh');
        console.log(newArray1);
      }
    }
  }
}
