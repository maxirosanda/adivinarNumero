import { StyleSheet, View } from 'react-native'
import Header from './components/Header'
import StartGameScreen from './pages/StartGameScreen'

export default App = () => {
  return (
    <View style={styles.container}>
        <Header title={"Header"}/>
        <StartGameScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
  
})
