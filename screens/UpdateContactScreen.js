import React, {Component} from 'react';
import {StyleSheet, View, Image, ToastAndroid} from 'react-native';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

import Color from "../constants/Colors";
import Button from "../components/Button";
import TextField from "../components/Textfield";

import ContactService from "../services/ContactService";

export default class UpdateContactScreen extends Component{
    constructor(){
        super();
        this.state = { data:{}, name:" ", number:" " };
    }
    componentDidMount(){
        this.setState({data:this.props.route.params.item});
    }

    updateData(e, obj){
        var name = obj.state.name;
        var number = obj.state.number;
        var id = obj.props.route.params.item.id;
        var image = obj.props.route.params.item.image;
        var data = {
            name : name,
            number : number,
            id : id,
            image: image
        };
        console.log(data);
        ContactService.put(`http://192.168.1.210:3000/data/${data.id}`, data)
            .then((data) => {
                ToastAndroid.showWithGravity(
                    "Contact Updated!",
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
    deleteData(e, obj){
        var id = obj.props.route.params.item.id;
        ContactService.delete(`http://192.168.1.210:3000/data/${id}`)
            .then((data) => {
                ToastAndroid.showWithGravity(
                    "Contact Deleted!",
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
        else{
            obj.setState({name:obj.props.route.params.item.number});
        }
    }
    setNumber(e, obj){
        if(e.nativeEvent.text.length != 0){
            obj.setState({number:e.nativeEvent.text});
        }
        else{
            obj.setState({number:obj.props.route.params.item.number});
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
                    <TextField placeholder={this.props.route.params.item.name.length > 0 ? this.props.route.params.item.name : "Name"} onChange={(e) => {this.setName(e, this)}}></TextField>
                    <TextField placeholder={this.props.route.params.item.number.length > 0 ? this.props.route.params.item.number : "Number"} onChange={(e) => {this.setNumber(e, this)}} type={"numeric"}></TextField>
                </View>
                <Button name={"Update"} type={"primary"} textType={"primaryText"} style={styles.logoutButton} onClick={ (e) => {this.updateData(e, this)} }></Button>
                <Button name={"Delete"} type={"secondary"} textType={"secondaryText"} style={styles.logoutButton} onClick={ (e) => {this.deleteData(e, this)} }></Button>
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