/**
 * ScrollView是一个通用的可滚动的容器，你可以在其中放入多个组件和视图，而且这些组件并不需要是同类型的。
 * ScrollView不仅可以垂直滚动，还能水平滚动（通过horizontal属性来设置）。
 * ScrollView适合用来显示数量不多的滚动元素。
 * 放置在ScollView中的所有组件都会被渲染，哪怕有些组件因为内容太长被挤出了屏幕外。
 * 如果你需要显示较长的滚动列表，那么应该使用功能差不多但性能更好的ListView组件。
 */

import React, { Component } from 'react';
import { ScrollView, Image, Text, View } from 'react-native';

export default class ScrollViewApp extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{ fontSize: 96 }}>If you like</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{ fontSize: 96 }}>Scrolling down</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{ fontSize: 96 }}>What's the best</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{ fontSize: 96 }}>Framework around?</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{ fontSize: 80 }}>React Native</Text>
            </ScrollView>
        );
    }
}