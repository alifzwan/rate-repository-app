import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import theme from '../../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.fontSize.subheading,
  }
})

const AppBarTab = ( { tabName } ) => {
  return (
    <Pressable>
      <Text style={styles.text}>{tabName}</Text>
    </Pressable>
  )
}

export default AppBarTab