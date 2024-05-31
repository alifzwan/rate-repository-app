import { useState, useEffect } from 'react'

const useRepositories = () => {
    const [repositories, setRepositories] = useState()
    const [loading, setLoading] = useState(false)

    const fetchRepositories = async () => {
        setLoading(true)
        const response = await fetch("http://172.29.183.39:5000/api/repositories")
        const json = await response.json()

        console.log(json)

        setLoading(false)
        setRepositories(json)
    }

    useEffect(() => {
        fetchRepositories()
    }, [])

    return { repositories, loading, refetch: fetchRepositories }
}

export default useRepositories