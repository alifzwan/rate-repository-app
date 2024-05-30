import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import theme from '../../theme'
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.fontSize.subheading,
  }
})

const AppBarTab = ( { tabName, to } ) => {
  return (
    <Link to={to} component={Pressable}>
      <Text style={styles.text}>{tabName}</Text>
    </Link>
  )
}

export default AppBarTab