import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

class TableCell extends React.Component {

    static propTypes = {
        style: PropTypes.object,
        underlayColor: PropTypes.string,
        onPress: PropTypes.func,
        isLink: PropTypes.bool,
        icon: PropTypes.any,
        title: PropTypes.string,
        titleComponent: PropTypes.any,
        detail: PropTypes.string,
        detailComponent: PropTypes.any,
        accessoryViewComponent: PropTypes.any,
    };

    static defaultProps = {
        underlayColor: '#f2f2f2',
        onPress: () => null,
        icon: null,
        title: null
    };

    renderIcon = () => {
        if (this.props.icon) {
            return (
                <View style={{
                    marginRight: 10,
                    alignContent: 'center',
                    justifyContent: 'center'
                }}>
                    {this.props.icon}
                </View>
            );
        }
        return null;
    };

    renderTitle = () => {
        if (this.props.titleComponent) {
            return this.props.titleComponent;
        }

        return (
            <View
                style={{
                    flex: 1,
                    alignContent: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{
                    fontSize: 16,
                    color: '#000',
                    textAlignVertical: 'center',
                    ...this.props.titleStyle
                }}>{this.props.title}</Text>
            </View>
        );
    };

    renderDetail = () => {
        if (this.props.detailComponent) {
            return this.props.detailComponent;
        }
        if (this.props.detail) {
            return (
                <View
                    style={{
                        marginLeft: 10,
                        alignContent: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{
                        fontSize: 14,
                        color: '#777',
                        textAlignVertical: 'center',
                        ...this.props.detailStyle
                    }}>{this.props.detail}</Text>
                </View>
            );
        }
        return null;
    };

    renderAccessoryView = () => {
        if (this.props.isLink) {
            if (this.props.accessoryViewComponent) {
                return this.props.accessoryViewComponent;
            }
            return (
                <View
                    style={{
                        marginLeft: 5,
                        alignContent: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={require('./accessory.png')}
                        style={{
                            width: 16,
                            height: 16,
                            tintColor: '#777',
                        }}
                    />
                </View>
            );
        }
        return null;
    };

    render() {
        return (
            <TouchableHighlight
                underlayColor={this.props.underlayColor}
                activeOpacity={1}
                onPress={this.props.onPress}
            >
                <View style={{
                    padding: 15,
                    flexDirection: 'row',
                    borderBottomColor: '#e5e5e5',
                    borderBottomWidth: 0.5,
                    alignContent: 'center',
                    justifyContent: 'center',
                    ...this.props.style
                }}>
                    {this.renderIcon()}
                    {this.renderTitle()}
                    {this.renderDetail()}
                    {this.renderAccessoryView()}
                </View>
            </TouchableHighlight>
        );
    }
}

module.exports = TableCell;
