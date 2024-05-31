import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'


const useRepositories = () => {
    const [repositories, setRepositories] = useState()

    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        // This tells Apollo Client to first return the data from the cache and then fetch the data from the network. 
        // This way, the user gets a faster response and the UI is updated when the network request is completed.
        fetchPolicy: 'cache-and-network', 
                                            
    })

    // FETCHING DATA USING GRAPHQL QUERIES

    useEffect(() => {
        if(data) {
            console.log('Data fetched:', data)
            setRepositories(data.repositories) // data.repositories is the data returned from the query
        }
    }, [data]) // update the state when [data] changes

    if(loading) {
        return 'Loading...'
    }
    if(error) {
        return `Error: ${error.message}`
    }

    return { repositories, loading, error }


    // FETCHING DATA USING FETCH API
    // const fetchRepositories = async () => {
    //     setLoading(true)
    //     const response = await fetch("http://172.29.183.39:5000/api/repositories")
    //     const json = await response.json()

    //     console.log(json)

    //     setLoading(false)
    //     setRepositories(json)
    // }

    // useEffect(() => {
    //     fetchRepositories()
    // }, [])

    // return { repositories, loading, refetch: fetchRepositories }
}

export default useRepositories