import React, {Component} from 'react';
import Color from '../constants/Colors';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
export default class Button extends Component{
    render(){
        return(
            <TouchableOpacity style={[styles.buttonContainer, styles[this.props.type]]}>
                <Text style={[styles.buttonText, styles[this.props.textType]]}>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    buttonContainer:{
        paddingVertical: responsiveHeight(1.2),
        marginHorizontal: responsiveWidth(7),
        marginVertical: responsiveHeight(0.6),
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: responsiveFontSize(2)
    },
    primary:{
        backgroundColor: Color.primaryColor,
    },
    primaryText:{
        color: Color.white,
    },
    secondary:{
        backgroundColor: Color.white,
        borderWidth: responsiveWidth(0.5),
        borderColor: Color.primaryColor
    },
    secondaryText: {
        color: Color.primaryColor
    }
});