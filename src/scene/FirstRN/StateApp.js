/**
 * 典型的场景是在接收到服务器返回的新数据，或者在用户输入数据之后。
 * 你也可以使用一些“状态容器”比如Redux来统一管理数据流（译注：但我们不建议新手过早去学习redux）。
 * http://redux.js.org/index.html
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };
        setInterval(() => {
            this.setState(previous => {
                return { showText: !previous.showText };
            });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text>{display}</Text>
        );
    }
}

export default class StateApp extends Component {
    render() {
        return (
            <View>
                <Blink text="I love to blink" />
                <Blink text="Yes blinking is so great" />
                <Blink text="Why did they ever take this out of HTML" />
                <Blink text="Look at me look at me look at me" />
            </View>
        );
    }
}
