import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, Image, Picker} from 'react-native';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

import Color from "../constants/Colors";
import Button from "../components/Button";
import TextField from "../components/Textfield";

export default class AddContact extends Component{
    render(){
        // console.log(this.navigation);
        const data = this.props.route.params;
        return(
            <View style={styles.mainContainer}>
                <View style={styles.backButtonContainer}>

                </View>
                <View style={styles.profileContainer}>
                    <Image
                        source={require("../assets/Avatar.png")}
                    />
                </View>
                <View style={styles.containerFluid}>
                    <TextField placeholder={"Name"}></TextField>
                    <TextField placeholder={"Number"} value="+91 766641715"></TextField>
                </View>
                <Button name={"Update"} type={"primary"} textType={"primaryText"} style={styles.logoutButton}></Button>
                <Button name={"Delete"} type={"secondary"} textType={"secondaryText"} style={styles.logoutButton}></Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Color.white,
        display: "flex",
        flex: 1,
        flexDirection: "column",
    },
    containerFluid:{
        padding: responsiveHeight(1.3)
    },
    profileContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: responsiveWidth(4),
        marginBottom: responsiveHeight(2)
    },
    label:{
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        marginHorizontal: responsiveWidth(7),
        marginVertical: responsiveHeight(1),
    },
    reportTypePicker:{
        backgroundColor: Color.primaryBackground,
        marginHorizontal: responsiveWidth(7),
        marginVertical: responsiveHeight(1),
        borderRadius: 10
    },
    backButtonContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
});