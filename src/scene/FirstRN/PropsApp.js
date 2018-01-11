import React, { Component } from 'react';
import { View } from 'react-native';
import PropsDemo from './PropsDemo';

export default class PropsApp extends Component {
    render() {
        return (
            <View>
                <PropsDemo.Bananas />
                <PropsDemo.Greeting name="World" />
                <PropsDemo.LotsOfGreetings />
            </View>
        );
    }
}