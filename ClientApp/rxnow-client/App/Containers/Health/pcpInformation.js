import React, { Component } from 'react';
import {
    Text,
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
    Input,
    Button,
    Footer,
    FooterTab,
} from 'native-base';
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons }
    from 'react-native-vector-icons/';
import styles from './pcpStyles';
import NavigationService from './../Navigation';

export default class PCPInformation extends Component {
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
    }

    showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this.hideDateTimePicker();
    };

    render() {
        StatusBar.setBarStyle('light-content', true);
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor('#2d324f', true);
            StatusBar.setTranslucent(true);
        }

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
                        <Title style={styles.title}>PCP Profile</Title>
                    </Body>

                    <Right style={styles.left}>
                        <TouchableOpacity onPress={() => alert('Settings')}>
                            <Ionicons name="md-settings" size={22} color="white" />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <Text style={styles.nameTxt}>Dr. Johnie Cornwall</Text>
                    <View style={styles.dividerHorizontal} />
                    <View style={styles.accountInfoBg}>
                        <Text style={styles.accountInfoTxt}>DOCTOR'S CONTACT INFORMATION</Text>
                        <Right>
                            <TouchableOpacity
                                style={styles.followBg}
                                onPress={() => {
                                    Alert.alert(
                                        //title
                                        this.state.editable ? this.state.save : this.state.edit,
                                        //body
                                        this.state.editable ?
                                            this.state.savePrompt : this.state.editPrompt,
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
                                    name={
                                        this.state.editable ?
                                            this.state.editTrue :
                                            this.state.editFalse
                                    }
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
                            <Text style={styles.infoFieldDetailTxt}>Johnie Cornwall</Text>
                        </View>
                        <View style={styles.fieldDivider} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.infoFieldBg}>
                            <Text style={styles.infoFieldTitleTxt}>Specialization</Text>
                            {this.state.editable ?
                                <Input style={styles.infoFieldDetailTxt}>
                                    Family Medicine
                                </Input>
                                :
                                <Text style={styles.infoFieldDetailTxt}>
                                    Family Medicine
                                </Text>
                            }
                        </View>
                        <View style={styles.fieldDivider} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.infoFieldBg}>
                            <Text style={styles.infoFieldTitleTxt}>Phone</Text>
                            {this.state.editable ?
                                <Input style={styles.infoFieldDetailTxt}>
                                    johnie_cornwall@gmail.com
                                </Input>
                                :
                                <Text style={styles.infoFieldDetailTxt}>+1 234 5678 900</Text>
                            }
                        </View>
                        <View style={styles.fieldDivider} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.infoFieldBg}>
                            <Text style={styles.infoFieldTitleTxt}>Email</Text>
                            {this.state.editable ?
                                <Input style={styles.infoFieldDetailTxt}>
                                    johnie_cornwall@gmail.com

                                </Input>
                                :
                                <Text
                                    style={styles.infoFieldDetailTxt}
                                >
                                    johnie_cornwall@gmail.com
                                </Text>
                            }
                        </View>
                        <View style={styles.fieldDivider} />

                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.infoFieldBg}>
                            <Text style={styles.infoFieldTitleTxt}>Hospital</Text>
                            {this.state.editable ?
                                <Input style={styles.infoFieldDetailTxt}>
                                    St. James
                                </Input>
                                :
                                <Text style={styles.infoFieldDetailTxt}>
                                    St. James Hospital
                                </Text>
                            }
                        </View>
                        <View style={styles.fieldDivider} />

                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.infoFieldBg}>
                            <Text style={styles.infoFieldTitleTxt}>Hospital Address</Text>
                            {this.state.editable ?
                                <Input style={styles.infoFieldDetailTxt}>
                                    13 N Coleman Rd
                                </Input>
                                :
                                <Text
                                    style={styles.infoFieldDetailTxt}
                                    editable={this.state.editable}
                                >
                                    13 N Coleman Rd
                                </Text>
                            }
                        </View>
                        <View style={styles.fieldDivider} />
                    </View>
                    <View style={styles.dividerHorizontal} />
                </Content>
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
