import React from 'react'
import LottieView from 'lottie-react-native';

export default function SplashScreen() {
    return (
        <LottieView
        
            source={require('../../animations/loading.json')}
            autoPlay
            loop
        />

    )
}
