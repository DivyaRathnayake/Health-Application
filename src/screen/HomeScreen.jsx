// src/screen/HomeScreen.jsx
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export function HomeScreen() {
    const navigation = useNavigation();
    const handlelogin = () =>{
        navigation.navigate("Login");
        
    }
    const handleSignup = () =>{
        navigation.navigate("Signup");
        
    }
    return (
        <View style={styles.container}>
            <Image source={require("../assets/logo.png")} style={styles.logoImage} />
            <Image source={require("../assets/girl.png")} style={styles.girlImage} />
          
            <Text style={styles.text}>Welcome to Ladies Fitness</Text>
            <Text style={styles.subtitle}>
                Your Fitness Journey Starts Here! Designed exclusively for women, this app offers personalized workouts, 
                nutrition plans, and progress tracking to help you achieve your health goals and embrace a stronger, 
                healthier lifestyle.
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.activeButton} onPress={handlelogin}>
                    <Text style={styles.activeButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.inactiveButton} onPress={handleSignup}>
                    <Text style={styles.inactiveButtonText}>Sign-up </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F2F9FF',
        paddingTop: 10,
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#674188',
        textAlign: 'center',
        marginTop: 5,
    },
    logoImage: {
        marginTop: 20,
        width: 150,
        height: 80,
        marginBottom: 10,
    },
    girlImage: {
        marginTop: 20,
        width: 360,
        height: 350,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 13,
        color: 'black',
        textAlign: 'center',
        paddingHorizontal: 20,
        marginTop: 10,
        lineHeight: 17,
        width: '90%',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '80%',
        height: 45,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#4C585B',
        overflow: 'hidden',
        marginTop: 30,
    },
    activeButton: {
        flex: 1,
        backgroundColor: '#674188',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inactiveButton: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    inactiveButtonText: {
        color: '#4C585B',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
