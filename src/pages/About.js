
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class About extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.heading}>About Us</Text>
                <Text style={styles.paragraph} >Welcome to Online Litigation System.
                 Where we provide technology for online litigation.
                              Litigation begins the moment someone decides to formally
                               enforce or defend his or her legal rights.
              </Text>

                <Text style={styles.paragraph} >
                    In most cases, this happens the moment a party hires an attorney to 
                    represent their interests. Most attorneys engage in a variety of “pre-suit” 
                    litigation activities. These can include many things, from writing a letter 
                    on a client’s behalf called a demand letter, to demand that a party compensate a 
                    victim for economic or physical injury, to filing a Notice of Eviction with a local court.
                    Pre-suit litigation is subject matter specific and varies depending on the circumstances
                     surrounding a particular case.
                    However, there are several steps in litigation that occur in nearly every case.</Text>
                <Text style={styles.paragraph} >
                    The first step in any litigation is investigation. Litigation is meaningless without
                     information about the harm that occurred. Attorneys, and parties, often conduct extensive 
                     independent investigations into the facts and potential outcomes of a particular case prior to
                      filing suit. A thorough pre-suit investigation focuses the issues in the case and satisfies the
                       wronged party and his attorney that the harm was indeed caused by the potential defendant and
                        that the law provides for a remedy. Knowing the facts of what occurred and how and why the law 
                        provides a remedy allows the wronged party to present the case to the party who caused the
                         harm effectively. It is also the beginning of the wronged party's preparation to present 
                         the facts and law to a court of law.
              </Text>




            </View>





        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        // justifyContent: 'center',
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
