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
import { Calendar, } from 'react-native-calendars';


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
import { FontAwesome, MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons/';
import styles from './styles';

import NavigationService from './../Navigation';

class ServiceSettings extends Component {
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
            name: 'ABC Hospital',
            email: 'abc@gmail.com',
            phone: '3459083023',
            address: 'Heaven Plaza',
            language: 'Yoruba',
            image_url: 'https://i2.wp.com/media.premiumtimesng.com/wp-content/files/2017/02/National-Hospital.jpg',
            ambulanceCount: 10,
            availableStaff: 3,
            availability: [
                { Sunday: '0-23' },
                { Monday: '0-23' },
                { Tuesday: '0-23' },
                { Wednesday: '0-23' },
                { Thursday: '0-23' },
                { Friday: '0-23' },
                { Saturday: '0-23' },
            ]
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
                        <Text style={styles.accountInfoTxt}>OTHERS</Text>
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
                            <Text style={styles.infoFieldTitleTxt}>Ambulance count</Text>
                            {this.state.editable ?
                                <Input
                                    style={styles.infoFieldDetailTxt}
                                    onChangeText={(ambulanceCount) => this.setState({ ambulanceCount })}
                                    value={this.state.ambulanceCount}
                                />

                                :
                                <Text style={styles.infoFieldDetailTxt}>{this.state.ambulanceCount}</Text>
                            }
                        </View>
                        <View style={styles.fieldDivider} />
                    </View>
                    <View style={styles.fieldDivider} />
                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.infoFieldBg}>
                            <Text style={styles.infoFieldTitleTxt}>Staff count</Text>
                            {this.state.editable ?
                                <Input
                                    style={styles.infoFieldDetailTxt}
                                    onChangeText={(ambulanceCount) => this.setState({ ambulanceCount })}
                                    value={this.state.availableStaff}
                                />

                                :
                                <Text style={styles.infoFieldDetailTxt}>{this.state.availableStaff}</Text>
                            }
                        </View>
                        <View style={styles.fieldDivider} />
                    </View>
                    <View style={styles.fieldDivider} />
                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.infoFieldBg}>
                            <Text style={styles.infoFieldTitleTxt}>Availability</Text>
                            <Calendar
                                // Initially visible month. Default = Date()
                                //current={'2012-03-01'}
                                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                                minDate={'2012-05-10'}
                                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                                //maxDate={'2012-05-30'}
                                // Handler which gets executed on day press. Default = undefined
                                onDayPress={(day) => { console.log('selected day', day) }}
                                // Handler which gets executed on day long press. Default = undefined
                                onDayLongPress={(day) => { console.log('selected day', day) }}
                                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                                monthFormat={'yyyy MM'}
                                // Handler which gets executed when visible month changes in calendar. Default = undefined
                                onMonthChange={(month) => { console.log('month changed', month) }}
                                // Hide month navigation arrows. Default = false
                                //hideArrows={true}
                                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                                //renderArrow={(direction) => (<Arrow />)}
                                // Do not show days of other months in month page. Default = false
                                hideExtraDays={true}
                                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                                // day from another month that is visible in calendar page. Default = false
                                disableMonthChange={true}
                                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                                firstDay={1}
                                // Hide day names. Default = false
                                hideDayNames={true}
                                // Show week numbers to the left. Default = false
                                showWeekNumbers={true}
                                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                                onPressArrowLeft={substractMonth => substractMonth()}
                                // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                                onPressArrowRight={addMonth => addMonth()}
                            />
                        </View>
                        <View style={styles.fieldDivider} />
                    </View>

                </Content>

            </Container>
        );
    }

}

export default ServiceSettings;
