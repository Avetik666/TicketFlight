import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Button,
    Linking,
    AppState,
    Platform
} from 'react-native';
import PushController from './PushController';
import PushNotification from 'react-native-push-notification';

class Home extends Component {
    constructor(props) {
        super(props);

        this.handlePushNotification = this.handlePushNotification.bind(this);
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handlePushNotification);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handlePushNotification);
    }

    handlePushNotification(appState){
        if (appState === 'background') {
            const item = this.props.navigation.getParam('body');
            const delay = (typeof item.delay !== 'undefined' ? item.delay : 'No data currently available');
            let date = new Date(Date.now() + (60 * 1000));

            PushNotification.localNotificationSchedule({
                message: `Your flight will be delayed ${delay} minutes`,
                date,
            });
        }

    }

    render() {
        const item = this.props.navigation.getParam('body');
        const data = [
            {key: 'Flight Code', content: item.flightCode},
            {key: 'Airline', content: item.airline},
            {key: 'Departure Airport', content: item.departureAirport.name},
            {key: 'Arrival Airport', content: item.arrivalAirport.name},
            {key: 'Departure Date (local time)', content: item.departureDate},
            {key: 'Arrival Date (local time)', content: item.arrivalDate}
        ];

        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <FlatList
                        data={data}
                        renderItem={({item}) => <View style={styles.item}><Text
                            style={styles.infoHeader}>{item.key}</Text><Text
                            style={styles.infoContent}>{item.content}</Text></View>}
                    />
                </View>
                <PushController />
                {/*<Button onPress={() => pushNotifications.localNotification("StatusChange")} title='Go to LogIn'></Button>*/}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        padding: 6
    },
    infoHeader: {
        flex: 1,
        backgroundColor: 'white',
        fontSize: 24,
        padding: 6,
        fontWeight: 'bold'
    },
    infoContent: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        fontSize: 14,
        padding: 6
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


export default Home
