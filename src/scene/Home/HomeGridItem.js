import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Heading1, Heading2 } from '../../widget/Text'
import { Screen, System, Tool } from '../../common'
import { Color } from '../../widget'

class HomeGridItem extends PureComponent {
    render() {
        let info = this.props.info

        let title = info.maintitle
        let color = info.typeface_color
        let subtitle = info.deputytitle
        let imageUrl = info.imageurl.replace('w.h', '120.0')

        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <View>
                    <Heading1 style={{ color: color, marginBottom: 10 }}>{title}</Heading1>
                    <Heading2 >{subtitle}</Heading2>
                </View>
                <Image style={styles.icon} source={{ uri: imageUrl }} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Screen.width / 2 - Screen.onePixel,
        height: Screen.width / 4,
        backgroundColor: 'white',
        borderBottomWidth: Screen.onePixel,
        borderRightWidth: Screen.onePixel,
        borderColor: Color.border
    },
    icon: {
        width: Screen.width / 5,
        height: Screen.width / 5,
    }
});

export default HomeGridItem;