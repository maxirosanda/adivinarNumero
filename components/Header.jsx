import { View, Text,StyleSheet } from "react-native"
import Colors from "../constants/colors"

export default Header = ({title}) => {

    return  <View style={styles.header}>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
    
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:Colors.primary,
        width:"100%",
        padding:10,
        paddingTop:20
    },
    headerTitle:{
        textAlign:"center",
        color:"white",
        fontSize:20
    }
})


