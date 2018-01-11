import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { Heading2 } from '../../widget/Text'
import { Screen, System, Tool } from '../../common'

class OrderMenuItem extends PureComponent {
    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={this.props.onPress}>
                <Image source={this.props.icon} resizeMode='contain' style={styles.icon} />
                <Heading2>
                    {this.props.title}
                </Heading2>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Screen.width / 4,
        height: Screen.width / 5,
    },
    icon: {
        width: 30,
        height: 30,
        margin: 5,
    }
});

export default OrderMenuItem;