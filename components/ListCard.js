import React, {Component} from 'react';
import Color from '../constants/Colors';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
    listCard:{
        backgroundColor: Color.white,
        paddingHorizontal: responsiveHeight(1.5),
        paddingVertical: responsiveWidth(3.5),
        marginHorizontal: responsiveWidth(4),
        marginBottom: responsiveHeight(2),
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    cardTitle:{
        fontSize: responsiveFontSize(2.3),
        fontWeight: 'bold',
    },
    cardText:{
        fontSize: responsiveFontSize(1.6),
        fontWeight: '400',
        marginTop: responsiveWidth(0.5),
        color: Color.secondaryText,
        overflow: 'hidden',
    },
    textContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'

    },
    imageContainer:{
        margin: responsiveWidth(0.5),
        marginRight: responsiveWidth(3),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    image:{
        width: 45,
        height: 45,
        borderRadius: 50
    }
});
export default class ListCard extends Component{
    render(){
        return(
            <TouchableOpacity style={styles.listCard} onPress={this.props.click}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{uri: this.props.image}}
                        />
                </View> 
                <View style={styles.textContainer}>
                    <Text style={styles.cardTitle}>
                        {this.props.cardTitle}
                    </Text>
                    <Text style={styles.cardText}>
                        {this.props.cardText}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

