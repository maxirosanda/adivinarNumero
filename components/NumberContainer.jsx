import {View,Text,StyleSheet} from "react-native"
import Color from "../constants/colors"

export default NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text>{children}</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:Color.accent,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:"center",
        justifyContent:"center"
    },
    number:{
        color:Color.accent,
        fontSize:22
    }
})