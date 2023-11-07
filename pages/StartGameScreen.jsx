import { useState } from "react"
import {View,Text,StyleSheet,Button,TouchableWithoutFeedback, Keyboard,KeyboardAvoidingView,Platform, ScrollView} from "react-native"
import Card from "../components/Card"
import Colors from "../constants/colors"
import Input from "../components/Input"
import NumberContainer from "../components/NumberContainer"


const StartGameScreen = ({setUserNumber}) => {

    const [enteredValue,setEnteredValue] = useState("")
    const [confirmed,setConfirmed] = useState(false)
    const [selectedNumber,setSelectedNumber] = useState(null)

    const handlerInputNumber = text => setEnteredValue(text.replace(/[^0-9]/g,""))
    
    const handlerResetInput = () =>  setEnteredValue("")

    const handlerConfirmInput = () => {
        const choseNumber = parseInt(enteredValue)
        if(isNaN(choseNumber) || choseNumber < 0 || choseNumber > 99 ) return
        setConfirmed(true)
        setSelectedNumber(choseNumber)
        setEnteredValue("")
    }
    const handlerStartGame = () => {
        setUserNumber(selectedNumber)
        setConfirmed(false)
        setSelectedNumber(null)
        setEnteredValue("")
        
    }
   
    return  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={30}>
                <ScrollView>
                    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
                        <View style={styles.screen}>
                            <Text style={styles.title}>Comenzar Juego</Text>
                            <Card style={styles.inputContainer}>
                                <Input
                                    blurOnSubmit
                                    autoCapitalization="none"
                                    autoCorrect={false}
                                    keyboardType="numeric"
                                    maxLength={2}
                                    caretHidden={true}
                                    selectionColor="blue"
                                    onChangeText = {handlerInputNumber}
                                    value={enteredValue}

                                />
                                <View style={styles.buttonContainer}>
                                <View style={styles.button}><Button  title="Confirmar" color={Colors.primary} onPress={handlerConfirmInput}/></View>  
                                <View style={styles.button}><Button  title="Limpiar" color={Colors.accent} onPress={handlerResetInput}/></View>  
                                </View>
                            </Card>
                            {   
                            confirmed && (
                                    <Card style={styles.summaryContainer}>
                                        <Text>Tu seleccion</Text>
                                        <NumberContainer>Numero Elegido : {selectedNumber}</NumberContainer>
                                        <Button title="Empezar juego" onPress={handlerStartGame}></Button>
                                    </Card>
                                )
                            }
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </KeyboardAvoidingView>    
}

const styles = StyleSheet.create({
    screen:{
        padding:10,
        flex:1,
        alignItems:"center"
    },
    title:{
        fontSize:20
    },
    inputContainer:{
        width:300,
        maxWidth:"80%",
        padding:20
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    button:{
        width:100
    }

})

export default StartGameScreen