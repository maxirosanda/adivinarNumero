import { StyleSheet, View ,Text} from 'react-native'
import Header from './components/Header'
import StartGameScreen from './pages/StartGameScreen'
import { useState } from 'react'
import GameScreen from './pages/GameScreen'
/*
import * as Font from "expo-font"
import {AppLoading} from "expo"

const fetchFonts = async () => {
  await Font.loadAsync({
    "open-sans": require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf')
  })
}
*/
export default App = () => {

  const [userNumber,setUserNumber] = useState()
  /*
  const [dataLoader,setDataLoader] = useState(false)
  const { loaded: loader, error } = Font.useFonts({
    "open-sans": require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf')
  })
  if(!loader) return <Text>Esperando la carga de la fuente</Text>
  if(!dataLoader){
    return(
      <AppLoading
        startAsync = {fetchFonts}
        onFinish = {()=> setDataLoader(true)}
        onError = {(err) => console.log(err)}
      />
    )
  }
  */
  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGamer={handlerStartGame}/>

  if(userNumber){
    content = <GameScreen userOption={userNumber}/>
  }

  return (
    <View style={styles.container}>
        <Header title={"Header"}/>
        {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
  
})
