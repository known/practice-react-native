/**
 * 
 */
'use strict';

import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, TextInput, Text, View } from 'react-native';
import Store from './Store';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 50,
    },
});

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            isLogin: false,
        };
    }

    componentDidMount = () => {
        Store.user.find().then(user => {
            this.setState({
                phone: user.phone,
            })
        });
    }

    _login() {
        var phone = '138';//this.state.phone;
        this.props.result({
            phone: phone,
        });
    }

    _logout() {
        this.setState({
            isLogin: false,
        });
    }

    _renderLogined() {
        return (
            <View style={styles.container}>
                <Text>登录成功</Text>
            </View>
        );
    }

    _renderLogin() {
        return (
            <View style={styles.container}>
                <Text>这是登录页面</Text>
                <View>
                    <TextInput
                        placeholder="请输入手机号"
                        onChangeText={text => this.setState({ phone: text })}
                    />
                </View>
                <TouchableHighlight onPress={this._login}>
                    <Text>登录</Text>
                </TouchableHighlight>
            </View>
        );
    }

    render() {
        if (this.state.isLogin) {
            return this._renderLogined();
        }

        return this._renderLogin();
    }
};