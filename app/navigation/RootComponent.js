/**
 * Created by PutriDamayanti on 6/24/2018.
 */
import React from 'react';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import LoginScreen from '../screen/LoginScreen';
import DashboardScreen from '../screen/DashboardScreen';
import FormTransaction from '../screen/transaction/FormTransaction';
import Expo from 'expo';

const RootStack = createStackNavigator(
    {
        Login: LoginScreen,
        Dashboard: DashboardScreen,
        FormTransaction: FormTransaction
    },
    {
        initialRouteName: 'Login',
    }
);

export default class RootComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
    }
    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
        return <RootStack />;
    }
}