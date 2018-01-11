import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Color } from '../../widget'
import { Screen, System, Tool } from '../../common'
import HomeGridItem from './HomeGridItem'

class HomeGridView extends PureComponent {

    static defaultProps = {
        infos: []
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.infos.map((info, index) => (
                    <HomeGridItem
                        info={info}
                        key={index}
                        onPress={() => this.props.onGridSelected(index)} />
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderTopWidth: Screen.onePixel,
        borderLeftWidth: Screen.onePixel,
        borderColor: Color.border
    },
});

export default HomeGridView;