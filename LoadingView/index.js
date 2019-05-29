import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';

const LoadingView = ({text, style = {}, show = true}) => (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 30,
        display: show ? 'flex' : 'none',
        ...style
    }}>
        <View style={{flexDirection: 'row'}}>
            <ActivityIndicator size="small" color="#999"/>
            <Text style={{
                fontSize: 15,
                marginLeft: 8,
                color: '#666',
                lineHeight: 20,
                display: text ? 'flex' : 'none'
            }}>{text}</Text>
        </View>
    </View>
);

module.exports = LoadingView;
