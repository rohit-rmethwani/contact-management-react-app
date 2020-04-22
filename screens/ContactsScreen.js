import React, {Component} from 'react';
import ListCard from "../components/ListCard";
import TextField from "../components/Textfield";
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import Color from "../constants/Colors";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import {Dimensions} from 'react-native';

export default class ContactsScreen extends Component{
    data = [
        {
            name: "Rohit Methwani",
            number: "+91-7666941715",
            image: "https://reactnative.dev/img/tiny_logo.png",
            id: 1
        },
        {
            name: "Raju Methwani",
            number: "+91-9322871804",
            image: "https://reactnative.dev/img/tiny_logo.png",
            id: 2
        },
        {
            name: "Bharti Methwani",
            number: "+91-8999152292",
            image: "https://reactnative.dev/img/tiny_logo.png",
            id: 3
        },
        {
            name: "Bharti Methwani",
            number: "+91-8999152292",
            image: "https://reactnative.dev/img/tiny_logo.png",
            id: 4
        },
        {
            name: "Bharti Methwani",
            number: "+91-8999152292",
            image: "https://reactnative.dev/img/tiny_logo.png",
            id: 5
        },
        {
            name: "Bharti Methwani",
            number: "+91-8999152292",
            image: "https://reactnative.dev/img/tiny_logo.png",
            id: 6
        },
        {
            name: "Bharti Methwani",
            number: "+91-8999152292",
            image: "https://reactnative.dev/img/tiny_logo.png",
            id: 7
        },
        {
            name: "Bharti Methwani",
            number: "+91-8999152292",
            image: "https://reactnative.dev/img/tiny_logo.png",
            id: 8
        },
        {
            name: "Bharti Methwani",
            number: "+91-8999152292",
            image: "https://reactnative.dev/img/tiny_logo.png",
            id: 9
        },
        {
            name: "Bharti Methwani",
            number: "+91-8999152292",
            image: "https://reactnative.dev/img/tiny_logo.png",
            id: 10
        },
        {
            name: "Bharti Methwani",
            number: "+91-8999152292",
            image: "https://reactnative.dev/img/tiny_logo.png",
            id: 11
        }
    ];
    pressed(e){
        alert(e);
        console.log(e.target.id);
    }
    render(){
        return(
            <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                <Text style={styles.pageTitle}>Your{"\n"}Contacts</Text>
                <TextField placeholder={"Search contact..."}></TextField>
                <View style={styles.listContainer}>
                    <FlatList
                        data = {this.data}
                        renderItem = {
                            ({item}) =>
                            
                                <ListCard cardTitle={item.name} cardText={item.number} click={this.pressed} image={item.image} data-id = {item.id}></ListCard>
                            
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: Color.backgroundColor
    },
    pageTitle:{
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        marginLeft: responsiveWidth(4),
        marginTop: responsiveHeight(1)
    },
    listContainer:{
        marginTop: responsiveHeight(2)
    },
    addButton:{
        backgroundColor: Color.primaryColor,
        position: "absolute",
        top: Dimensions.get("window").height - 70,
        left:Dimensions.get("screen").width -80,
        zIndex: 9999,
        borderRadius: 50,
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveHeight(2.7),
        elevation: 4,
    },
    addButtonText:{
        fontSize: responsiveFontSize(4),
        color: Color.white,
        
    }
});