import { StyleSheet, View } from 'react-native';
import RepositoryList from './Item/RepositoryList'

import theme from '../theme';
import AppBar from './Bar/AppBar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColor.primary,
    
  }
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
    
  )
}

export default Main