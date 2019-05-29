import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

export default class TableCellGroup extends React.Component {

    static propTypes = {
        style: PropTypes.object
    };

    render() {
        return (
            <View style={{
                backgroundColor: '#fff',
                marginBottom: 10,
                ...this.props.style
            }}>{this.props.children}</View>
        );
    }
}
