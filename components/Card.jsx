import {View,StyleSheet} from "react-native"

export default Cart = ({style,children}) => {

    return <View style={{...styles.card,...style}}>
               {children}
            </View>
}

const styles = StyleSheet.create({

    card:{
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:5,
        borderRadius:10,
        backgroundColor:"white"
    }
})