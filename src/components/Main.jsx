import { StyleSheet, View } from 'react-native';
import RepositoryList from './Item/RepositoryList'
import theme from '../theme';
import AppBar from './Bar/AppBar';
import { Routes, Route, Navigate } from 'react-router-native';
import SignIn from './Item/SignIn';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColor.primary,
    flexGrow: 1,
    flexShrink: 1,
    
  }
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
        <Route path="/signin" element={<SignIn />}/>
      </Routes>
    </View>
    
  )
}

export default Main