//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import images from '../constants/images';








const DropDown = ({
    data = [],
    value = {},
    onSelect = () => { }

}) => {
    console.log("selected value", !!value)
    const [showOption, setShowOption] = useState(false)

    const onSelectedItem = (val) => {
        setShowOption(false)
        onSelect(val)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.dropDownStyle}
                activeOpacity={0.8}
                onPress={() => setShowOption(!showOption)}
            >
                <Text>{!!value ? value?.name : 'Choose a blood type'}</Text>
                <Image
                    style={{ transform: [{ rotate: showOption ? '180deg' : '0deg' }] }}
                    source={images.downArrow} />

            </TouchableOpacity>
            {showOption && (<View style={{
                backgroundColor: 'pink',
                padding: 2
            }}>
                {data.map((val, i) => {
                    return (
                        <TouchableOpacity
                            key={String(i)}
                            onPress={() => onSelectedItem(val)}
                            style={{
                                ...styles.selectedItemStyle,
                                backgroundColor: value && value.id == val.id ? 'pink' : 'green',

                            }}
                        >
                            <Text>{val.name}</Text>
                        </TouchableOpacity>
                    )

                })}
            </View>)}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    dropDownStyle: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 19,
        borderRadius: 9,
        minHeight: 42,
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8



    },
    selectedItemStyle: {
        paddingVertical: 8,
        borderRadius: 4,
        paddingHorizontal: 9
    }
});


export default DropDown;
