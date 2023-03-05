import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function RestruarantItems() {
    return (
        <>
       
       <View style={{


         flexDirection: "row",
            marginTop: 20
        }}>
            <View style={{
                height: 1.6,
                width: 110,
                backgroundColor: "lightgrey",
                margin: 10
            }}></View>


            <Text style={{
                fontWeight: "400"
            }}>489 RESTAURANTS</Text>
            <View style={{
                height: 1.6,
                width: 110,
                backgroundColor: "lightgrey",
                margin: 10
            }}></View>
        </View>
        <View style={{
            borderRadius: 520,
            alignItems: "center"
        }}>
            < RestaurantImage />
           
            <View style={{
                height: 80,
                width: 380,
                backgroundColor: "blue",
            
                top: -14,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,

            }}>
                <View style={{
                    top:-50
                }}><Text>mmm</Text></View>
                <View style={{
                    height: 45,
                    width: 360,
                    alignSelf: "center",
                    backgroundColor: "#4287f5",
                    borderRadius: 30,
                    
                    top: -22,

                }}>
                    <View style={{
                        flexDirection: "row",
                        top:10,
                        

                    }}>
                        <MaterialCommunityIcons name="brightness-percent" size={24} color="white" 
                        style={{
                            marginLeft:5,
                            marginRight:5
                        }}
                        />
                        <Text style={{
                            fontSize:15,
                            fontWeight:"600",
                            color:"white"
                        }}>30% OFF up to ₹75</Text>
                        
                         <View style={{
                           backgroundColor:"green",
                           height:18,
                           width:40,
                           alignItems:"center",
                           borderRadius:15,
                           flexDirection:"row",
                           justifyContent:"center",
                           marginLeft:152,
                           top:2

                         }}>
                            <Text style={{
                                color:"white"
                            }}>+1</Text>
                            <AntDesign name="down" size={10} color="white" />
                        </View>
                        </View>
                       
                </View>
            </View>
        </View>
        </>
    )
}

const RestaurantImage = () => (
    <Image source={{ uri: "https://www.crazymasalafood.com/wp-content/images/chaa-shaa.jpg" }}
        style={{
            height: 200,
            width: 400,

            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            margin: 10
        }}
    />
    
)
