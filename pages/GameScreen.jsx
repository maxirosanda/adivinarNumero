import { useEffect, useRef, useState } from "react"
import {View,Text,StyleSheet, Button,Alert} from "react-native"
import NumberContainer from "../components/NumberContainer"
import Card from "../components/Card"

export default GameScreen = ({userOption,onGameOver}) => {

    const generateRandomBetween = (min,max,exclude) => {
        min = Math.floor(min)
        max = Math.floor(max)
        const rndNumber = Math.floor(Math.random() * (max - min) + min)
        if(rndNumber === exclude) return generateRandomBetween(min,max,exclude)
        else return rndNumber
      } 

    const [currentGuess,setCurrentGuess] = useState(generateRandomBetween(0,99,userOption))
    const [rounds,setRounds] = useState(0)
    const currentLow = useRef(0)
    const currentHigh = useRef(99)

    useEffect(()=>{
        if(currentGuess == userOption) onGameOver(rounds)
    },[currentGuess,userOption,onGameOver])

    const handlerNextGuess = direction =>{
        if((direction == "lower" && currentGuess < userOption) || (direction === "greater" || currentGuess > userOption))
        {
            Alert.alert("No Mientas!!","Tu sabes que no es verdad...!!",[{text:"Disculpa!",style:"cancel"}])
        }
        if(direction === "lower"){
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        setCurrentGuess(generateRandomBetween(currentLow.current,currentHigh.current,currentGuess))
        setRounds(current => current + 1)
       
    }
    return (
        <View style={styles.screen}>
            <Text>La suposicion del oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Menor" onPress={()=> handlerNextGuess("lower")}/>
                <Button title="Mayor" onPress={()=> handlerNextGuess("greater")}/>
            </Card>
        </View>
    )

}

const styles = StyleSheet.create({
    screen:{

        flex:1,
        padding:10,
        alignItems:"center"

    },
    buttonContainer:{

        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:20,
        width:300,
        maxWidth:"80%"

    }
})