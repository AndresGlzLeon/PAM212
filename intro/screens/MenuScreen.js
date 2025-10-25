import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextScreen from './TextScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import SplashScreenPro from './ImgBackSplashScreen';
import ScrollViewScreen from './ScrollViewScreen';
import Repaso1Screen from './Repaso1Screen';


export default function MenuScreen() {
    const [screen,setScreen] = useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones': 
            return <BotonesScreen/>;
        case 'activityIndicator':
            return <ActivityIndicatorScreen/>;
        case "textInput":
            return <TextScreen/>
        case 'imageBackground':
            return <SplashScreenPro/>
        case  "repaso1" :
            return <Repaso1Screen/>
        case 'scrollView' :
            return <ScrollViewScreen></ScrollViewScreen>
        case 'menu':
            default:
                return(
    <View style={styles.container}>
        <Text>Menu de Practicas</Text>
                <View style={styles.contenedorBotones}>
        <Button onPress={()=>setScreen('contador')} title = 'Pract:Contador'/>
        <Button onPress={()=>setScreen('botones')} title = 'Pract:Botones' />
        <Button onPress={()=>setScreen('textInput')} title = 'Pract:TextInput' />
        <Button onPress={()=>setScreen('imageBackground')} title = 'Pract:ImageBackground' />
        <Button onPress={()=>setScreen('scrollView')} title = 'Pract:ScrollView' />
        <Button onPress={()=>setScreen('activityIndicator')} title = 'Pract:ActivityIndicator' />
        <Button onPress={()=>setScreen('flatList')} title = 'Pract:FlatList' />
        <Button onPress={()=>setScreen('modal')} title = 'Pract:Modal' />
        <Button onPress={()=>setScreen('bottomSheet')} title = 'Pract:BottomSheet' />
        <Button onPress={()=>setScreen('repaso1')} title = 'Pract:Repaso 1' />        
                </View>
    </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0044ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    contenedorBotones:{
        marginTop:15,
        flexDirection:'line',
        gap:20,
    },

});