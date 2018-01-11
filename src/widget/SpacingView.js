import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Color from './Color'

class SpacingView extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 14,
        backgroundColor: Color.background,
    },
});

export default SpacingView;