import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, } from 'react-native'

import { Screen, System, Tool } from '../../common'
import { Color, PageControl } from '../../widget'
import HomeMenuItem from './HomeMenuItem'

class HomeMenuView extends PureComponent {

    // state: {
    //     currentPage: number
    // }

    constructor(props) {
        super(props)

        this.state = {
            currentPage: 0
        }
    }

    render() {
        let { menuInfos, onMenuSelected } = this.props

        let menuItems = menuInfos.map(
            (info, i) => (
                <HomeMenuItem
                    key={info.title}
                    title={info.title}
                    icon={info.icon}
                    onPress={() => {
                        onMenuSelected && onMenuSelected(i)
                    }} />
            )
        )

        let menuViews = []
        let pageCount = Math.ceil(menuItems.length / 10)

        for (let i = 0; i < pageCount; i++) {
            let length = menuItems.length < (i * 10) ? menuItems.length - (i * 10) : 10
            let items = menuItems.slice(i * 10, i * 10 + length)

            let menuView = (
                <View style={styles.itemsView} key={i}>
                    {items}
                </View>
            )
            menuViews.push(menuView)
        }
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={(e) => this.onScroll(e)}
                >
                    <View style={styles.menuContainer}>
                        {menuViews}
                    </View>
                </ScrollView>

                <PageControl
                    style={styles.pageControl}
                    numberOfPages={pageCount}
                    currentPage={this.state.currentPage}
                    hidesForSinglePage
                    pageIndicatorTintColor='gray'
                    currentPageIndicatorTintColor={Color.theme}
                    indicatorSize={{ width: 8, height: 8 }}
                />
            </View>

        );
    }

    onScroll(e) {
        let x = e.nativeEvent.contentOffset.x
        let currentPage = Math.round(x / Screen.width)

        console.log('onScroll  ' + e.nativeEvent.contentOffset.x + '  page ' + currentPage + '  current ' + this.state.currentPage)
        if (this.state.currentPage != currentPage) {
            this.setState({
                currentPage: currentPage
            })
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    contentContainer: {
    },
    menuContainer: {
        flexDirection: 'row',
    },
    itemsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: Screen.width,
    },
    pageControl: {
        margin: 10,
    }
});

export default HomeMenuView;