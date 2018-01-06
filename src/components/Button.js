import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ onPress, children }) => {
    const {textStyle,buttonStyle} = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
    textStyle:{
        alignSelf: 'center',
        fontSize: 16,
        color: '#007aff',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#007aff'

    }
});