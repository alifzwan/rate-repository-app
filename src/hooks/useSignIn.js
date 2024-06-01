import { useMutation } from '@apollo/client'
import { MUTATION_SIGN_IN } from '../graphql/mutation'

const useSignIn = () => {
    const [ mutate, result ] = useMutation(MUTATION_SIGN_IN)

    const signIn = async ({ username, password }) => {
        try {
            await mutate({ variables: { credentials: { username, password } } })
        } catch (error) {
            console.error("Error:", error)
        }

    }
    return [signIn, result]
}
   

export default useSignIn