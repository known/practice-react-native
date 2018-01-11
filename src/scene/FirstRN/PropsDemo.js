/**
 * 大多数组件在创建时就可以使用各种参数来进行定制。用于定制的这些参数就称为props（属性）。
 * 只需在render函数中引用this.props。
 * 注：在iOS上使用http链接的图片地址可能不会显示，修改方案参见https://segmentfault.com/a/1190000002933776。
 */

import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{ width: 193, height: 110 }} />
        );
    }
}

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Greeting name="Known" />
                <Greeting name="Christina" />
            </View>
        );
    }
}

export default {
    Bananas,
    Greeting,
    LotsOfGreetings,
}