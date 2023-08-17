//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import images from '../constants/images';

// create a component






const DropDown = ({ data = {},
    value = [],
    onSelect = () => { }

}) => {

    const onSelectedItem = (val) => {
        setShowOption(false)
        onSelect(val)
    }
    console.log("selected value", !!value)
    const [showOption, setShowOption] = useState(false)

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
            {showOption && (<View>
                {data.map((val, i) => {
                    return (<TouchableOpacity
                        key={String(i)}
                        onPress={() => onSelectedItem(val)}



                    >
                        <Text> {val.name} </Text>
                    </TouchableOpacity>)

                })}
            </View>)}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    dropDownStyle: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 15,
        borderRadius: 6,
        minHeight: 42,
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    }
});

//make this component available to the app
export default DropDown;
