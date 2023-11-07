import { StyleSheet, SafeAreaView} from 'react-native'
import Header from './components/Header'
import StartGameScreen from './pages/StartGameScreen'
import { useState} from 'react'
import GameScreen from './pages/GameScreen'
import EndGame from './pages/EndGame'

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
const App = () => {

  const [rounds,setRounds] = useState(0)
  const [userNumber,setUserNumber] = useState(null)
  const [foundNumber,setFoundNumber] = useState(false)

  const handleRestartGame = () => {
    setUserNumber(null)
    setRounds(0)
    setFoundNumber(false)
  }
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
  let content

  if(!foundNumber){
    content = <StartGameScreen setUserNumber={setUserNumber} />
  }

  if(userNumber){
    content = <GameScreen userNumber={userNumber} setRounds={setRounds} setFoundNumber={setFoundNumber}/>
  }

  if(foundNumber){
    content = <EndGame rounds={rounds} userNumber={userNumber} handleRestartGame={handleRestartGame} />
  }

  return (
    <SafeAreaView style={styles.container}>
        <Header title={"Header"}/>
        {content}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
  
})

export default App