import { StyleSheet, View } from 'react-native'
// import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
      paddingTop: 30,
      paddingBottom: 10,
      backgroundColor: theme.backgroundColor.tertiery,
  }
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab to="/" tabName="Repositories"/>
      <AppBarTab to="/signin" tabName="Sign In"/>
    </View>
  )
}

export default AppBar

