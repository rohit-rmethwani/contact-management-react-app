import React, {Component} from 'react';
import ListCard from "../components/ListCard";
import TextField from "../components/Textfield";
import Button from "../components/Button";
import {StyleSheet, View, Text, FlatList, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
// import SafeAreaView from 'react-native-safe-area-view';
import Color from "../constants/Colors";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import {Dimensions} from 'react-native';
import ContactService from '../services/ContactService';

export default class ContactsScreen extends Component{
    constructor(){
        super();
        this.state = { data:[], error: "none", fetch:[] };        
    }

    componentDidMount(){
        this.fetchAndSetData();
    }
    
    pressed(item){
        this.props.navigation.navigate("Add Contact", {item});
    }

    searchKey(e, obj){
        console.log(e.nativeEvent.text);
        var newArr = [];
        for(var i=0; i<obj.state.fetch.length; i++){
            if(obj.state.fetch[i].name.toString().includes(e.nativeEvent.text)){
               newArr.push(obj.state.fetch[i]);
            }
        }
        if(newArr.length > 0 && (e.nativeEvent.text!="")){
            obj.setState({data: newArr});
        }
        else{
            obj.setState({data: obj.state.fetch});
        }
    }

    fetchAndSetData(){
        ContactService.get("http://192.168.1.210:3000/data")
            .then((result)=>this.setState({data: result, fetch: result}))
            .catch((err) => 
                {
                    console.log("Inerror:" + err);
                    this.setState({error: "flex"});
                }
            );
    }

    render(){
        return(
            <SafeAreaView style={styles.mainContainer} forceInset={{ bottom: 'never' }}>
                <View>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>Your{"\n"}Contacts</Text>
                    <TextField placeholder={"Search contact..."} onChange={(e) => this.searchKey(e, this)} returnKeyType={"search"}></TextField>
                    <View style={styles.listContainer}> 
                        <FlatList
                            contentContainerStyle={{ paddingBottom: 100}}
                            data = {this.state.data}
                            renderItem = {
                                ({item}) =>
                                    <ListCard cardTitle={item.name} cardText={item.number} click={(e) => this.pressed(item)} image={item.image} data-id={1}></ListCard>
                            }
                            keyExtractor={item => item.id+""}
                        />
                    </View>
                </View>
                <View style={[{display: this.state.error}, styles.errorContainer ]}>
                    <Image
                        source={require("../assets/500.png")}
                        style={styles.errorImage}
                    />   
                    <Button type={"primary"} name={"Refresh"} textType={"primaryText"}></Button>  
                </View>
            </SafeAreaView>
        );
    }
}



const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: Color.white,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 18
    },
    pageTitle:{
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        marginLeft: responsiveWidth(4),
        marginTop: responsiveHeight(1)
    },
    listContainer:{
        marginTop: responsiveHeight(2),
        // flex: 1
    },
    addButton:{
        backgroundColor: Color.primaryColor,
        position: "absolute",
        top: Dimensions.get("window").height - 80,
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
        
    },
    errorContainer:{
        flexDirection: "column",
        paddingHorizontal: responsiveWidth(2)
    },
    errorImage:{
        width: 400,
        height: 200,
        resizeMode: 'contain',
        alignSelf: "center",
        marginBottom: responsiveHeight(2)
    }
});

                                        
