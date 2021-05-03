import React, { Component } from "react";
import { ImageBackground, View,Button, Image, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";
//import { CheckBox } from 'react-native-elements'

import CheckBox from '@react-native-community/checkbox';

const image = {  };

class Contact extends Component {

  render(){
  
    const { navigation } = this.props;
  
    return (
      <View style={{alignItems:'center'}}>
       
           <View style={styles.Vlogo}>
               
                  <Image style={styles.Ilogo} source={require('../assets/logo.png')}/>               

                <View style={styles.Vdrawer}>
                <TouchableOpacity onPress={()=> navigation.openDrawer()}>

                <Image style={styles.Idrawer} source={require('../assets/drawer.png')}/>
                </TouchableOpacity>
                </View>      

        </View>  
           
         
         <ImageBackground source={require('../assets/bax.png')} style={styles.image}>
          
          <Text style={styles.T3}>Cadastre um Local</Text>

          <Text style={styles.T4}>Preencha o formulário abaixo e cadastre um local.</Text>

          <View style={styles.Vinput}>
          <Text style={styles.Ti}>Nome:</Text>

          <TextInput
            style={styles.input}
            //onChangeText={onChangeText}
            //value={text}
          />

          <Text  style={styles.Ti2}>E-mail:</Text>

          <TextInput
            style={styles.input}
            //onChangeText={onChangeText}
            //value={text}
          />


        <Text style={styles.Ti2}>Telefone:</Text>

        <TextInput
          style={styles.input}
          //onChangeText={onChangeText}
          //value={text}
        />

        <Text style={styles.Ti}>Local:</Text>

        <TextInput
          style={styles.input}
          //onChangeText={onChangeText}
          //value={text}
        />

       <Text style={styles.Ti}>Material:</Text>
      
      <View style={{alignSelf: 'center'}}>

       <View style={styles.VCheck}>
       <CheckBox
          disabled={false}
          
          //value={toggleCheckBox}
          //onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        </View>
         <Text style={styles.Ti3}>Pilha</Text>

         <View style={styles.VCheckD} />

         <View style={styles.VCheck}>
       <CheckBox
          disabled={false}
          //value={toggleCheckBox}
          //onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
       
         </View>
           <Text style={styles.Ti3}> Bateria</Text>

         </View>
                                
          </View>
     
         
     
           
        
          
  
        <View  style={styles.button}>
        <Button
          title="Enviar"
          color="transparent"
          onPress={() => navigation.navigate("End")}
        />
        </View>
         </ImageBackground>
      </View>
    );
  };
  }
  
  const styles = StyleSheet.create({
   Vlogo: {
    alignItems: 'flex-start', 
    backgroundColor: '#FFFDC0', 
    width:'100%',
    height: 50
  },
  Ilogo: {
    width: 50, 
    height: 40, 
    marginTop: 5 
  },
  Vdrawer: {
    marginTop: - 40,  
    
    alignSelf: 'flex-end'
  },
  Idrawer: {
    width: 30, 
    height: 30,
  },
    socialIcon:{
      height: 55,
      width: 55,
      marginTop: 5
    },
    VSocial:{
      flex: 1, 
      flexDirection: 'row',
      marginLeft: 25,
      alignSelf: 'flex-start'
    },
    Cimage:{
      width: 400,
      height: 500,
      marginTop: 10
    },
    Tcongrats: {
      fontWeight: 'bold',
      fontSize: 24,  
      color: '#0E1973'
   },
   T1: {
      fontWeight: 'bold', 
      fontSize: 24, 
      justifyContent: 'center'
   },
   T2: {
     fontWeight: 'normal',
     fontSize: 26, 
     marginTop: 75, 
     justifyContent: 'center'
   },
   T3:{
    fontWeight: 'bold',
    fontSize: 34, 
    alignSelf: 'center',
   // marginTop: 150, 
    color: '#000',
    marginLeft: 25, 
    justifyContent: 'center'
   },
   T4:{
    fontWeight: 'normal',
    fontSize: 18, 
    marginTop: 30, 
    color: '#000', 
    alignSelf: "center",
    justifyContent: 'center'
   },
   button:{
   alignSelf: 'center', 
   //marginLeft: 25,
   marginTop: 50,
   borderRadius: 20,
   width: 160,
   backgroundColor:"#742699"
   },
   input: {
    width: 280,
    height: 40,
    margin: 12,
    marginTop: - 25,
    marginLeft: 35,
    borderWidth: 1,
    borderLeftColor: "transparent",
    borderRightColor: 'transparent',
    borderTopColor: 'transparent'
  },
  Ti: {
    color: '#0E1973',
    alignSelf: 'flex-start', 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginLeft: - 30 
  },
  Vinput: {
    marginTop: 40, 
    alignSelf: "center"
  },
  Ti3: {
    color: '#0E1973',
    alignSelf: 'flex-start', 
    fontSize: 20, 
    fontWeight: 'normal', 
    marginTop: - 30,
    marginLeft: 45
  },
  Ti2: {
    color: '#0E1973',
    alignSelf: 'flex-start', 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginLeft: - 30 
  },
   image: {
    //flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: '100%',
    width: '100%'
  },
  VCheck: {
     backgroundColor: '#ECFED5', 
     width: 30, 
     height: 30
     },
     VCheckD: {
       height: 10,
       }
   
    
  });

export default Contact;