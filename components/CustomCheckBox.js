import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/themes";

const CustomCheckbox = ({ label, isChecked, onChange }) => {
    return (
        <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => onChange(label)}
        >
            <View
                style={[
                    styles.checkbox,
                    isChecked ? styles.checkedCheckbox : styles.uncheckedCheckbox,
                ]}
            />
            <Text style={styles.checkboxLabel}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 20,

    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 2,
    },
    checkedCheckbox: {
        backgroundColor: COLORS.primaryRed,
        borderColor: "#999",
    },
    uncheckedCheckbox: {
        borderColor: "#999",
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 16,
    },
});

export default CustomCheckbox;
