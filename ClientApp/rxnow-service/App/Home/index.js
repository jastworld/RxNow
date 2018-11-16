import React, { Component } from 'react';
import { Container, Header, Title, Button, Icon, Left, Right, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { FontAwesome, MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
import styles from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import NavigationService from '../Navigation/';
import config from '../../config.js';

export default class App extends Component {
    openMaps = () => {
        NavigationService.navigate('Maps');
    }
    openSettings = () => {
        NavigationService.navigate('Settings');

    }
    state = {
        alert: false,
        patient: {
            profile: {
                name: 'Peter Gitt',
                address: 'One hell of a place',
                distanceAway: '8 miles',

            },
            reason: 'Pregancy',
            destination: {
                name: 'Gabby Hospital',
                address: '12 Main Street, LA, NIG',
            },
            pcp: {
                name: 'Dr. James Jude',
                hospital: 'XYZ tech',
                address: 'Some place in Lagos',
                phone: '33456778645',
                email: 'jj@jj.jj',
            }
        }
    }
    fetchRequest() {
        fetch('config.api/getcall', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            }),
        }, function (error, response) {
            console.log(error);
            console.log(response)
        });
    }
    render() {
        return (
            <Container style={{ flex: 1 }}>
                <Header>
                    <Left>
                        <Button transparent>
                            <FontAwesome name="chevron-left" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <FontAwesome name="bars" />
                        </Button>
                    </Right>
                </Header>
                <Grid style={styles.notificationgrid}>
                    <Row>
                        <View style ={{flexDirection:'column'}}>
                        {!this.state.alert ?
                            <View style={styles.notificationgrid}>
                                <Ionicons name='ios-notifications-off' size={150} color="grey" />
                            </View>
                            :
                            <View style={styles.notificationgrid}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => this.openPatientInfo()}
                                >
                                    <FontAwesome name='ambulance' size={150} color="#F62A00" />

                                </TouchableOpacity>

                            </View>
                        }
                        <View
                            style={{
                                borderWidth: 0.5,
                                borderColor: 'black',
                                margin: 10,
                            }}
                        />
                        </View>
                    </Row>
                    
                    <Row>
                        <Col>

                            <View style={[styles.itemContainer]}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => this.openSettings()}
                                >
                                    <MaterialCommunityIcons name='account-settings' size={90} color="#F62A00" />
                                    <Text style={styles.itemName}>Settings</Text>
                                </TouchableOpacity>

                            </View>
                        </Col>
                        <Col >
                            <View style={[styles.itemContainer]}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => this.openMaps()}
                                >
                                    <MaterialCommunityIcons name='google-maps' size={90} color="#F62A00" />
                                    <Text style={styles.itemName}>Map</Text>
                                </TouchableOpacity>

                            </View>
                        </Col>
                    </Row>
                </Grid>
            </Container>
        );
    }
}