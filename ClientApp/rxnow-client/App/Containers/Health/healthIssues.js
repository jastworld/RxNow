
import React, { Component } from 'react';
import {
  Text, Modal, StatusBar, Platform, TouchableOpacity,
  BackHandler, I18nManager, TouchableHighlight, Picker
} from 'react-native';
import {
  Container, Button, Right, Left, Footer, FooterTab,
  Content, Body, Header, Item, Input, Icon, Fab, Title
} from 'native-base';

// Screen Styles
import { View } from 'react-native-animatable';
import { FontAwesome, MaterialIcons, Ionicons, MaterialCommunityIcons }
  from 'react-native-vector-icons/';
import styles from './healthStyles.js';
import NavigationService from './../Navigation';

export default class Social18 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModal: false,
      symptom: '',
      data: [
        {
          id: 1,
          name: 'High Blood Pressure',
          isSelected: false
        },
        {
          id: 2,
          name: 'Diabetes',
          isSelected: false
        },
      ]
    };
  }
  componentWillMount() {
    const that = this;
    BackHandler.addEventListener('hardwareBackPress', () => {
      that.props.navigation.navigate('Social');
      return true;
    });
  }

  addSymptoms() {
    console.log('LOGGED', this.state.symptom);
    this.setState({ addModal: !this.state.addModal });
  }

  fnRemoveItem(listId) {
    console.log(listId);
  }
  render() {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#2d324f', true);
      StatusBar.setTranslucent(true);
    }


    return (
      <Container style={styles.main}>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => NavigationService.navigate('Home')}
            >
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
            <Title style={styles.textTitle}>Health Information</Title>
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
                    <View style={styles.namePostView}>
                      <Text style={styles.rowNameTxt}>{item.name}</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                      {
                        (item.isSelected === true) ?
                          <TouchableOpacity
                            style={styles.followBgSelected}
                            onPress={() => this.fnRemoveItem(item.id)}
                          >
                          <Text style={styles.followTxtSelected}>Remove</Text></TouchableOpacity> :
                          <TouchableOpacity
                            style={styles.followBgNotSelected}
                            onPress={() => this.fnRemoveItem(item.id)}
                          >
                          <Text style={styles.followTxtNotSelected}>Remove</Text></TouchableOpacity>
                      }
                    </View>
                  </View>
                  <View
                    style={(index === this.state.data.length - 1) ? null : styles.dividerHorizontal}
                  />
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
          <Icon visible={!this.state.addModal} name="ios-add" />

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
              <Picker 
                selectedValue={this.state.symptom} 
                onValueChange={(value) => this.setState({ symptom: value })}
              >
                <Picker.Item label="Pregnancy" value="Pregnancy" />
                <Picker.Item label="Accident" value="Accident" />
                <Picker.Item label="Seizure" value="Seizure" />
                <Picker.Item label="Concussion" value="Concussion" />
                <Picker.Item label="Panic Attack" value="Panic Attack" />
              </Picker>
              <Item
                regular
                style={styles.Litem}
              >
                <Input
                  placeholder="Pregnancy"
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
                  style={styles.buttonsignup01} 
                  onPress={() => this.setState({ addModal: !this.state.addModal })}
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
            < TouchableOpacity
              onPress={() => { NavigationService.navigate('HealthIssues'); }}
            >
              <MaterialIcons
                name="healing"
                size={25}
                color="grey"
              />
              <Text>Health</Text>
              </TouchableOpacity>
            </Button>

            <Button vertical>
            < TouchableOpacity
              onPress={() => { NavigationService.navigate('PCPInformation'); }}
            >
              <MaterialCommunityIcons
                name="folder-account"
                size={25}
                color="grey"
              />
              <Text>PCP</Text>
              </TouchableOpacity>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    );
  }

}
