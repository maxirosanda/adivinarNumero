import { TextInput,StyleSheet } from "react-native"

export default Input = ({style,...prop}) => {
    return   <TextInput {...prop}  style={{...styles.input,...style}} placeholder="Elija un numero"/>
}

const styles = StyleSheet.create({
    input:{
        borderColor:"black",
        borderWidth:2,
        padding:10,
        borderRadius:5,
        margin:10,
        textAlign:"center"
    }

})