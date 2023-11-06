import { Text, Button} from "react-native"

export default EndGame = ({rounds, userNumber,handleRestartGame}) =>{
    return <>
                <Text>Numero de rondas :{rounds}</Text>
                <Text>El numero a adivinar es: {userNumber}</Text>
                <Button title="volver a jugar" onPress={handleRestartGame}/>
            </>
       
}