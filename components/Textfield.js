import React, {Component} from 'react';
import Color from '../constants/Colors';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import {TextInput} from "react-native";
export default class Textfield extends Component{
    render(){
        return(
            <View>
            <TextInput
                placeholder = {this.props.placeholder}
                style={[styles.textField]}
                placeholderTextColor = {Color.secondaryText}
                onChange = {this.props.onChange}
                returnKeyType = {this.props.returnKeyType}
            />
            </View>

        );
    }
}
const styles = StyleSheet.create({
    textField:{
        paddingHorizontal: responsiveHeight(1.5),
        paddingVertical: responsiveWidth(3.5),
        marginHorizontal: responsiveWidth(4),
        marginVertical: responsiveHeight(1),
        borderRadius: 10,
        height: responsiveHeight(7),
        fontSize: responsiveFontSize(2),
        backgroundColor: Color.lightGrey,
    }
});