import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    Platform,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { Header, Button, Icon } from 'react-native-elements';

export default class NewLoan extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    placement="left"
                    leftComponent={{ icon: 'arrow-back', color: '#fff' }}
                    centerComponent={{ text: 'New Loan', style: { color: '#fff' } }}
                    // rightComponent={{ icon: 'home', color: '#fff' }}
                    containerStyle={styles.Header}
                />
                <View style={styles.HowMuchDoYouNeed}>
                    <Text style={styles.HowMuchDoYouNeedLabel}>How much do you need ?</Text>
                    <TextInput style={styles.input} placeholder='$XXXX'></TextInput>
                </View>
                <View style={styles.SelectedProduct}>
                    <Text style={styles.SelectedProductLabel}>Selected Product</Text>
                    <TextInput style={styles.input} placeholder='Student Loan'></TextInput>
                </View>
                <View style={styles.Duration}>
                    <Text style={styles.DurationLabel}>Duration</Text>
                    <TextInput style={styles.input} placeholder='5 years fixed'></TextInput>
                </View>
                <View style={styles.Description} >
                    <Icon name='contacts' size={30} color='gray' containerStyle={styles.DescriptionContactsIcon} />
                    <View style={styles.DescriptionLabel}>
                        <Text>3% yearly interest rate</Text>
                        <Text>Fixed low interest rate for students only</Text>
                    </View>
                    <Icon name='info' size={30} color='gray' containerStyle={styles.DescriptionInfoIcon} />
                </View>
                <View style={styles.MonthlyPaid}>
                    <Text style={styles.MonthlyPaidData}>$ 86.84</Text>
                    <Text style={styles.MonthlyPaidLabel}>paid monthly</Text>
                </View>
                <View style={styles.InterestPaid}>
                    <Text style={styles.InterestPaidData}>$ 390.61</Text>
                    <Text style={styles.InterestPaidLabel}>interest paid altogether</Text>
                </View>
                <Button
                    icon={
                        <Icon
                            name="chevron-right"
                            size={30}
                            color="white"
                            type='FontAwesome'
                            style={styles.NextButtonIcon}
                        />
                    }
                    title="NEXT"
                    titleStyle={styles.NextButtonTitle}
                    buttonStyle={styles.NextButton}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
    },
    Header: {
        padding: 0,
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
    HowMuchDoYouNeed: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        flex: 1,
        maxHeight: 100,
    },
    HowMuchDoYouNeedLabel: {
        height: 40,
        fontSize: 30,
    },
    SelectedProduct: {
        flex: 1,
        maxHeight: 100,
        marginLeft: 10,
        marginRight: 10,
    },
    SelectedProductLabel: {
        height: 30,
        fontSize: 20,
    },
    Duration: {
        flex: 1,
        maxHeight: 100,
        marginLeft: 10,
        marginRight: 10,
    },
    DurationLabel: {
        height: 30,
        fontSize: 20,
    },
    input: {
        height: 50,
        fontSize: 20,
        borderColor: 'gray',
        borderBottomWidth: 1,
        margin: 10,
        minHeight: 50,
    },
    Description: {
        backgroundColor: '#E8EAF6',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'stretch',
        // maxHeight: 50,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    DescriptionContactsIcon: {
        flex: 1,
        // alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'flex-start',
        maxHeight: 50,
        // minHeight: 50,
        maxWidth: 30,
        padding: 0,
        // borderColor: 'red',
        // borderWidth: 1,
    },
    DescriptionLabel: {
        flex: 2,
        alignSelf: 'stretch',
        paddingLeft: 15,
        // borderColor: 'red',
        // borderWidth: 1,
    },
    DescriptionInfoIcon: {
        flex: 1,
        // alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'flex-end',
        maxHeight: 50,
        // minHeight: 50,
        maxWidth: 30,
        // borderColor: 'red',
        // borderWidth: 1,
    },
    MonthlyPaid: {
        flex: 1,
        maxHeight: 100,
        marginLeft: 10,
        marginRight: 10,
    },
    MonthlyPaidData: {
        fontSize: 40
    },
    MonthlyPaidLabel: {
        fontSize: 20,
        color: 'gray',
    },
    InterestPaid: {
        flex: 1,
        maxHeight: 100,
        marginLeft: 10,
        marginRight: 10,
    },
    InterestPaidData: {
        fontSize: 30
    },
    InterestPaidLabel: {
        fontSize: 20,
        color: 'gray',
    },
    NextButton: {
        flex: 1,
        alignSelf: 'flex-end',
        maxHeight: 100,
        minHeight: 70,
        backgroundColor: '#F66F43',
        width: 150,
        height: 70,
        borderRadius: 35,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
        position: 'absolute',
        bottom: -50,
        right: 10
    },
    NextButtonIcon: {
        marginRight: 10,
    },
    NextButtonTitle: {
        fontSize: 25
    }
});