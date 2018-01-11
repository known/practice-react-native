import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Color from './Color'
import { Screen, System, Tool } from '../common'

class Separator extends PureComponent {
    render() {
        return (
            <View style={[styles.line, this.props.style]} />
        );
    }
}

const styles = StyleSheet.create({
    line: {
        width: Screen.width,
        height: Screen.onePixel,
        backgroundColor: Color.border,
    },
});

export default Separator;
