import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import theme from '../../theme'

// View - div
// Text - p

const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: "white",
    },
    content: {
      flexDirection: "row",
      padding: 10,
      gap: 10
    },
    description: {
      flexDirection: "column",
      padding: 10,
      gap: 5
    },
    
    detail: {
      flexDirection: "row",
      padding: 10,
      justifyContent: "space-around",
      gap: 20
    },

    number: {
      flexDirection: "column",
      gap: 5,
      alignItems: "center"
    },
})

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.mainContainer}>

      <View style={styles.content}>
          <Image 
            style={{ width: 50, height: 50, borderRadius: 5 }} 
            source={{ uri: item.ownerAvatarUrl }}/>

          <View style={styles.description}>
              <Text style={{ fontWeight: theme.fontWeight.bold, fontSize: theme.fontSize.body }}>
                {item.fullName}
              </Text>

              <Text style={{ color: theme.colors.textSecondary }}>
                {item.description}
              </Text>

              <Text style={{ borderRadius:2, padding:5 ,width:"max-content", textAlign:"center", color: theme.colors.textPrimary, backgroundColor: theme.backgroundColor.secondary }}>
                {item.language}
             </Text>
          </View>
      </View>


      <View style={styles.detail}>

          <View style={styles.number}>
            <Text style={{ fontWeight: theme.fontWeight.bold, fontSize: theme.fontSize.subheading }}>
              {item.stargazersCount >= 1000 
                ? (item.stargazersCount/1000).toFixed(1) + "k" 
                : item.stargazersCount}
            </Text>

            <Text style={{ color: theme.colors.textSecondary }}>
              Stars
            </Text>
          </View>


          <View style={styles.number}>
            <Text style={{ fontWeight: theme.fontWeight.bold, fontSize: theme.fontSize.subheading }}>
              {item.forksCount >= 1000 
                ? (item.forksCount/1000).toFixed(1) + "k" 
                : item.forksCount}
            </Text>

            <Text style={{ color: theme.colors.textSecondary }}>
              Forks
            </Text>
          </View>


          <View style={styles.number}>
            <Text style={{ fontWeight: theme.fontWeight.bold, fontSize: theme.fontSize.subheading }}>
              {item.reviewCount}
            </Text>
            
            <Text style={{ color: theme.colors.textSecondary }}>
              Reviews
            </Text>
          </View>


          <View style={styles.number}>
            <Text style={{ fontWeight: theme.fontWeight.bold, fontSize: theme.fontSize.subheading }}>
              {item.ratingAverage}
            </Text>

            <Text style={{ color: theme.colors.textSecondary }}>
              Rating
            </Text>
          </View>

      </View>
    </View>
  )
}

export default RepositoryItem