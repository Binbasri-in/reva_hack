import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = () => {
  const navigation = useNavigation();
  const logoAnimation = useRef(new Animated.Value(-250)).current;
  const textAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const logoAnimationConfig = {
      toValue: 0,
      duration: 4500,
      useNativeDriver: true,
    };

    const textAnimationConfig = {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    };

    const logoAnimationTiming = Animated.timing(logoAnimation, logoAnimationConfig);
    const textAnimationTiming = Animated.timing(textAnimation, textAnimationConfig);

    Animated.parallel([logoAnimationTiming, textAnimationTiming]).start();

    const timeout = setTimeout(() => {
      navigation.navigate('Login')
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const opacity = textAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const gradientColors = ['#000000', '#F909A0'];

  return (
    <LinearGradient colors={gradientColors} style={styles.container}>
      <Animated.View style={[styles.logoContainer, { transform: [{ translateY: logoAnimation }] }]}>
        <Image source={require('../../Images/SplashLogo.png')} style={styles.logo} />
      </Animated.View>
      <Animated.View style={styles.textContainer}>
        <Text style={styles.text}> Your Digital Guardian,</Text>
        <Text style={styles.text}>Always by Your Side!</Text>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 0,
  },
  logo: {
    width: 500,
    height: 600,
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 50,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
