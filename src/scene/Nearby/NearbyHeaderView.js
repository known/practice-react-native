import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { Screen, System, Tool } from '../../common'
import { Color } from '../../widget'

class NearbyHeaderView extends PureComponent {
    static defaultProps = {
        onSelected: () => { }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.props.titles.map((title, i) => (
                    <TouchableOpacity
                        style={[{ backgroundColor: this.props.selectedIndex == i ? '#FE566D' : 'white' }, styles.item]}
                        key={i}
                        onPress={() => this.props.onSelected(i)}>
                        <Paragraph
                            style={{ color: this.props.selectedIndex == i ? 'white' : '#555555' }}>
                            {this.props.titles[i]}
                        </Paragraph>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: Screen.width / 4 - 10,
        marginLeft: 8,
        marginTop: 5,
        marginBottom: 5,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: Screen.onePixel,
        borderColor: Color.border,
    },
});

export default NearbyHeaderView;
