import React, {Component} from "react";
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Switch,
    Button,
    Image,
    CheckBox
} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import {KeyboardAvoidingView} from 'react-native';

// import {logger} from 'react-native-logger';
// // import CheckBox from 'react-native-check-box';
// import {
//     createStackNavigator,
//     createAppContainer
// } from 'react-navigation';
import {registerToFlight} from '../../api/flights.api'

async function getFlightData(url) {
    try {
        let response = await fetch(url);
        console.log(response);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

const img = '../../assets/images.png';

class LogIn extends Component {
    state = {
        isDatePickerVisible: false,
        flightId: '',
        departureDate: null,
        passengerChecked: true
    };

    continueButtonClickedHandler = () => {
        const {flightId} = this.state.flightId;
        registerToFlight(flightId);
    };

    showDateTimePicker = () => {
        this.setState(() => (
            {isDatePickerVisible: true}));
    };

    hideDateTimePicker = () => {
        this.setState(() => ({isDatePickerVisible: false}));
    };

    handleDatePicked = async date => {
        this.state.departureDate = date;
        this.hideDateTimePicker();

        const firstDigit = this.state.flightId.match(/\d/);// will give you the first digit in the string
        const index = this.state.flightId.indexOf(firstDigit);
        const flightCode = this.state.flightId.substring(0, index);
        const flightNumber = this.state.flightId.substring(index, this.state.flightId.length);

        const year = this.state.departureDate.getFullYear();
        const month = this.state.departureDate.getMonth() + 1;
        const day = this.state.departureDate.getDate();


        const body = await getFlightData(`https://ticketflight.herokuapp.com/flight?flightCode=${flightCode}&flightNumber=${flightNumber}&year=${year}&month=${month}&day=${day}`);

        console.log(body);
        this.props.navigation.navigate('Home', {Info: body.flightId, body: body});
    };

    passengerCheckboxValueChangedHandler = (passengerChecked) => {
        this.state.passengerChecked = passengerChecked;
    };


    render() {
        const {passengerChecked} = this.state.passengerChecked;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Image source={require(img)}/>
                <Text style={styles.welcome}>TicketFlight</Text>
                <TextInput style={{fontSize: 20}} onChangeText={(text) => this.state.flightId = text}
                           placeholder="Flight number" onSubmitEditing={() => {
                    this.showDateTimePicker()
                }}/>
                <View style={{display: "flex", flexDirection: "row", margin: 10}}>
                    <Text style={{fontSize: 18, marginRight: 10}}>Passenger</Text>
                    <Switch value={passengerChecked} onValueChanged={this.passengerCheckboxValueChangedHandler}/>
                </View>
                <DateTimePicker
                    isVisible={this.state.isDatePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />
            </KeyboardAvoidingView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10
    },
    firstPage: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10
    }
});


export default LogIn
