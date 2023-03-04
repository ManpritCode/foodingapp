import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

const foodItems = [
    {
        Image: require("../assets/images/pizza.png"),
        text: "Pizaa",
    },
  

]
const fooditems2 = [
    {
        Image: require("../assets/images/thali.png"),
        text: "Thali",
    },
   

]


export default function Categories() {
    return (
        
        <>
            <View style={{
                height: 260,


            }}>
                <View style={{


                    flexDirection: "row",
                    marginTop: 20
                }}>
                    <View style={{
                        height: 1.6,
                        width: 90,
                        backgroundColor: "lightgrey",
                        margin: 10
                    }}></View>


                    <Text style={{
                        fontWeight: "600"
                    }}>WHAT'S ON YOUR MIND ?</Text>
                    <View style={{
                        height: 1.6,
                        width: 90,
                        backgroundColor: "lightgrey",
                        margin: 10
                    }}></View>
                </View>
                <ScrollView horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{
                        flexDirection: "row",

                    }}
                >
                    <View style={{
                        flexDirection: "row",
                        backgroundColor: "white",
                        width: 800
                    }}>
                        {
                            
                            foodItems.map((item,index) => (
                                <>
                                    <View key={index} style={{
                                        alignItems: "center",
                                        margin: 7

                                    }}>
                                        <Image  source={item.Image}
                                            style={{
                                                height: 78,
                                                width: 78
                                            }}
                                        />
                                        <Text  style={{
                                            fontWeight: "500"
                                        }}>{item.text}</Text>

                                    </View>

                                </>

                            )

                            )
                        }
                        <View style={{
                            flexDirection: "row",
                            position: "relative",
                            top: 50,
                            left: -820
                        }}>
                            
                            {
                                
                                fooditems2.map((itmess, index) => (
                                    <View key={index} style={{
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: 5
                                    }}>
                                        <Image source={itmess.Image}
                                            style={{
                                                height: 78,
                                                width: 78
                                            }}
                                        />
                                        <Text  style={{
                                            fontWeight: "500"
                                        }}>{itmess.text}</Text>
                                    </View>
                                ))
                            }
                        </View>

                    </View>

                </ScrollView>


            </View>
        </>
    )
}