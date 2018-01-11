/**
 * 实际开发中组件的样式会越来越复杂，我们建议使用StyleSheet.create来集中定义组件的样式。
 * style属性可以是集合，借鉴CSS中的“层叠”做法（即后声明的属性会覆盖先声明的同名属性）。
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class StyleApp extends Component {
    render() {
        return (
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});