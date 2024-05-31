import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import RepositoryItem from './RepositoryItem';
import theme from '../../theme';
import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: theme.backgroundColor.primary
    }
})


const RepositoryList = () => {
    const { repositories } = useRepositories()

    const repositoriesNodes = repositories
      ? repositories.edges.map(edge => edge.node)
      : []

    const renderItem = ({ item }) => { // item is the object in the array
        return (
            <RepositoryItem item={item} /> // passing the object to RepositoryItem
        )
    }

    return (
        <FlatList 
            data={repositoriesNodes} // passing the array to FlatList
            ItemSeparatorComponent={() => <View style={styles.separator} />} // adding a separator
            renderItem={renderItem} // passing the renderItem function to FlatList
        />
    )
}

export default RepositoryList

