import React, {Component} from 'react';
import Button from "../components/Button";
import TextField from "../components/Textfield";
import {StyleSheet, View, Image, Text} from 'react-native';
import Color from "../constants/Colors";
import {responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
export default class LoginScreen extends Component{
    render(){
        return(
            <View style={styles.mainContainer}>
                <View>
                    <View style={styles.imageContainer}>
                        <Image source={require("../assets/images/login.png")} style={styles.loginImage}></Image>
                    </View>
                    <TextField placeholder={"Enter your email"}></TextField>
                    <TextField placeholder={"Enter your password"}></TextField>
                    <Button type={"primary"} name={"Login"} textType={"primaryText"}></Button>
                    <Button type={"secondary"} name={"Sign up"} textType={"secondaryText"}></Button>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Color.backgroundColor,
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    loginImage:{
        width: responsiveWidth(70),
        height: responsiveHeight(32)
    },
    imageContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: responsiveHeight(2),
        marginTop: responsiveHeight(2)
    }
});