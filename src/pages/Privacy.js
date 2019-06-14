
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class More extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.heading}>Privacy Policy</Text>
                <Text style={styles.paragraph} >This privacy notice discloses the privacy practices for Online Litigation System. This privacy notice applies solely to information collected by this website.
          </Text>

                <Text style={styles.paragraph} >
                    It will notify you of the following: <Text style={styles.paragraph} >
                        The first step in any litigation is investigation. Litigation is meaningless without information about the harm that occurred. Attorneys, and parties, often conduct extensive independent investigations into the facts and potential outcomes of a particular case prior to filing suit. A thorough pre-suit investigation focuses the issues in the case and satisfies the wronged party and his attorney that the harm was indeed caused by the potential defendant and that the law provides for a remedy. Knowing the facts of what occurred and how and why the law provides a remedy allows the wronged party to present the case to the party who caused the harm effectively. It is also the beginning of the wronged party's preparation to present the facts and law to a court of law.
              </Text></Text>




            </View>





        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',

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
        fontWeight: "bold",
        marginLeft: 15,
    }
});
