import React, {Component} from 'react';
import {StyleSheet, View, Image, ToastAndroid} from 'react-native';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

import Color from "../constants/Colors";
import Button from "../components/Button";
import TextField from "../components/Textfield";

import ContactService from "../services/ContactService";

export default class AddContactScreen extends Component{
    constructor(){
        super();
        this.state = { data:{}, name:" ", number:" " };
    }

    addData(e, obj){
        var name = obj.state.name;
        var number = obj.state.number;
        var image = "https://randomuser.me/api/portraits/med/women/85.jpg";
        var data = {
            name : name,
            number : number,
            image: image
        };
        console.log(data);
        ContactService.post(`http://192.168.1.210:3000/data/`, data)
            .then((data) => {
                ToastAndroid.showWithGravity(
                    "Contact Added!",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                    );    
                obj.props.navigation.goBack();
            })
            .catch((err) => {
                ToastAndroid.showWithGravity(
                    err,
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                    );
            });
    }
    setName(e, obj){
        if(e.nativeEvent.text.length != 0){
            obj.setState({name:e.nativeEvent.text});
        }
    }
    setNumber(e, obj){
        if(e.nativeEvent.text.length != 0){
            obj.setState({number:e.nativeEvent.text});
        }
    }
    render(){
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
                    <TextField placeholder={"Name"} onChange={(e) => {this.setName(e, this)}}></TextField>
                    <TextField placeholder={"Number"} onChange={(e) => {this.setNumber(e, this)}} type={"numeric"}></TextField>
                </View>
                <Button name={"Add Contact"} type={"primary"} textType={"primaryText"} style={styles.logoutButton} onClick={ (e) => {this.addData(e, this)} }></Button>
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