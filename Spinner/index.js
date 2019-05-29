import React from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';

const Spinner = ({style, show = false}) => (
    <Modal animationType="none" transparent={true} visible={show} onRequestClose={() => {
    }}>
        <View
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                flex: 1,
                justifyContent: 'center',
                padding: 20,
                alignItems: 'center',
            }}
        >
            <View
                style={[{
                    backgroundColor: '#f2f2f2',
                    borderRadius: 6,
                    padding: 20,
                    minWidth: 60,
                    minHeight: 60
                }, style && style]}
            >
                <ActivityIndicator size={"large"} color="#999"/>
            </View>
        </View>
    </Modal>
);

module.exports = Spinner;
