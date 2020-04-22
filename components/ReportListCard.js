import React, {Component} from 'react';
import Color from '../constants/Colors';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
export default class ReportListCard extends Component{
    render(){
        return(
            <TouchableOpacity style={[styles.listCard]} onPress={this.props.click}>
                <Text style={styles.cardText}>
                    {this.props.value}
                </Text>
                <View style={[styles.reportContainer]}>
                    <Text style={[styles.reportText, styles[this.props.type]]}>
                        {this.props.report}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    listCard:{
        backgroundColor: Color.white,
        padding: responsiveHeight(3),
        marginHorizontal: responsiveWidth(7),
        marginBottom: responsiveHeight(2),
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardText:{
        alignSelf: "center",
        fontSize: responsiveFontSize(2),
        fontWeight: '400',
    },
    reportContainer:{
        padding: responsiveWidth(1),
    },
    success:{
        alignSelf: "center",
        color: Color.successColor,
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.5)
    },

});