import React from 'react';
import { View, StyleSheet } from 'react-native';
import RootComponent from './app/navigation/RootComponent';
import { Constants } from 'expo';

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: 'transparent',
        height: Constants.statusBarHeight,
    },

});

export default class App extends React.Component {
    render() {
        return <RootComponent/>;
    }
}