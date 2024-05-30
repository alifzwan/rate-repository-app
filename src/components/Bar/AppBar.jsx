import { StyleSheet, View, ScrollView } from 'react-native'
// import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
      paddingTop: 30,
      paddingBottom: 10,
      backgroundColor: theme.backgroundColor.tertiery,
  },
  scrollView: {
    flexDirection: 'row',
  }
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <AppBarTab to="/" tabName="Repositories"/>
        <AppBarTab to="/signin" tabName="Sign in"/>
      </ScrollView>
    </View>
  )
}

export default AppBar

