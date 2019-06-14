
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Whyonlinelitigation extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.heading}>Why Online Litigation?</Text>
                <Text style={styles.paragraph} >
                    It has been said that civil litigation is the “sport of kings.” Any lawsuit that 
                    falls outside the scope of the criminal realm is considered a civil lawsuit.
                            These lawsuits encompass many diverse areas of law, including but not limited
                             to, personal injury, wrongful death, divorce, employment law, toxic tort, product
                              liability, medical malpractice, and intellectual property law.
                            
            <Text style={styles.paragraph} >       Litigators represent individuals, large and small companies, and other entities and strive to provide competent legal
             services and zealous representation to their clients.</Text>
                    <Text style={styles.paragraph} >        Litigators often take cases from inception to a final 
                    verdict at a bench or jury trial. While litigation is one of the
                    highest-paying legal practice areas.  </Text></Text>




            </View>





        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    heading: {
        fontSize: 26,
        fontWeight: "bold",
        color: '#81c784',
        marginBottom: 30,
        //  marginLeft:15,
    },
    paragraph: {
        fontSize: 14,
        color: '#424242',

        marginLeft: 15,
    }

});
