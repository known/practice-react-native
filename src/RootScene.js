import React, { PureComponent } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'

import { Screen, System } from './common'
import { Color, TabBarItem, WebScene } from './widget'

import HomeScene from './scene/Home/HomeScene'
import OrderScene from './scene/Order/OrderScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import MineScene from './scene/Mine/MineScene'
import GroupPurchaseScene from './scene/GroupPurchase/GroupPurchaseScene'

import TabBarImage from './img/Tabbar'

const lightContentScenes = ['Home', 'Mine']

const Tab = TabNavigator(
    {
        Home: {
            screen: HomeScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={TabBarImage.normalImageHome}
                        selectedImage={TabBarImage.selectedImageHome}
                    />
                )
            }),
        },

        Nearby: {
            screen: NearbyScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '附近',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={TabBarImage.normalImageNearby}
                        selectedImage={TabBarImage.selectedImageNearby}
                    />
                )
            }),
        },

        Order: {
            screen: OrderScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '订单',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={TabBarImage.normalImageOrder}
                        selectedImage={TabBarImage.selectedImageOrder}
                    />
                )
            }),
        },

        Mine: {
            screen: MineScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={TabBarImage.normalImageMine}
                        selectedImage={TabBarImage.selectedImageMine}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,// 左右滑动
        animationEnabled: false,// 切换页面时不显示动画
        lazy: true,
        tabBarOptions: {
            showIcon: true,
            activeTintColor: Color.theme,
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },
    }

);

const Navigator = StackNavigator(
    {
        Tab: { screen: Tab },
        Web: { screen: WebScene },
        GroupPurchase: { screen: GroupPurchaseScene },
    },
    {
        navigationOptions: {
            //headerStyle: { backgroundColor: Color.theme },
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
        },
    }
);

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

class RootScene extends PureComponent {
    constructor() {
        super()
        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        const currentScene = getCurrentRouteName(currentState);
                        const previousScene = getCurrentRouteName(prevState);
                        if (previousScene !== currentScene) {
                            if (lightContentScenes.indexOf(currentScene) >= 0) {
                                StatusBar.setBarStyle('light-content')
                            } else {
                                StatusBar.setBarStyle('dark-content')
                            }
                        }
                    }
                }
            />
        );
    }
}

export default RootScene;