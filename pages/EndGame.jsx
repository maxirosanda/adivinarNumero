import { Text, Button,View,Image,StyleSheet, Dimensions} from "react-native"
import Card from "../components/Card"
import { useEffect,useState } from "react"
import GamerOverImagen from "../assets/images/gamerover.jpg"

const EndGame = ({rounds, userNumber,handleRestartGame}) =>{

    const [isPortrait,setIsPortrait] = useState(true)

    const onPortrait = () => {
        const dim = Dimensions.get("screen")
        console.log(dim)
        return dim.height >= dim.width
        
    }

    const statePortrait = () => setIsPortrait(onPortrait)

    useEffect(()=>{
     Dimensions.addEventListener("change",statePortrait)
     return () =>  {
        Dimensions.removeEventListener("change",statePortrait)
     } 
    })
    
    return <View style={isPortrait ? styles.screen : styles.screenId}>
                <Image style={isPortrait ? styles.image : styles.imageId} source={GamerOverImagen}/>
                <Card style={styles.resultContainer}> 
                    <Text>Numero de rondas :{rounds}</Text>
                    <Text>El numero a adivinar es: {userNumber}</Text>
                    <Button title="volver a jugar" onPress={handleRestartGame}/>
                </Card>
            </View>
       
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        flexDirection:"column",
        padding:10,
        justifyContent:"center",
        alignItems:"center"
    },
    screenId:{
        flex:1,
        flexDirection:"row",
        padding:10,
        justifyContent:"center",
        alignItems:"center"
    },
    resultContainer:{
        marginBottom:30,
        padding:20,
        width:300,
        maxWidth:"80%",
        alignItems:"center"
    },
    image:{
        width:"80%",
        height:300
    },
    imageId:{
        width:"50%",
        height:300
    }
})

export default EndGame

