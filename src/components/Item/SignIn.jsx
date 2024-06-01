import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native'
import React from 'react'
import { useFormik } from 'formik' 
import * as theme from '../../theme'
import * as yup from 'yup'
import useSignIn from '../../hooks/useSignIn'

// Formik is a library that helps you with building forms in React and React Native. 
// It helps with handling form state, validation, and error messages.
// useFormik is a custom React hook that will return all the Formik state and helpers directly.

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: 390,
    color: theme.colors.textSecondary
  },
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 390,
    backgroundColor: theme.backgroundColor.secondary
  },
  text: {
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.normal,
    fontSize: theme.fontSize.subheading,
    textAlign: 'center'
  },
  errorText: {
    color: "#d73a4a",
    marginLeft: 10
  },
  errorInput: {
    // color: "#d73a4a",
    borderColor: "#d73a4a"
  }
  
})

const SignIn = () => {
  
  //* initialValues - object that contains the initial values of the form fields
  const initialValues = {
    username: '',
    password: ''
  }
 
  //* validationSchema - object that contains the validation rules for the form fields
  const validationSchema = yup.object().shape({ //
    // username and password must be in string and is required
    username: yup.string().required('Username is required'), 
    password: yup.string().required('Password is required') 
  })


  //* useSignIn - custom hook that will return the signIn function and the result of the mutation
  const [signIn] = useSignIn()


  //* onSubmit - function that will be called with the values of the form when the form is submitted
  const onSubmit = async (values) => {
    const { username, password } = values
    try{
      const { data } = await signIn({ username, password })
      console.log(data)
    } catch(error){
      console.log("Error:", error)
    }
  }


  const formik = useFormik({
    // initial values - object that contains the initial values of the form fields
    initialValues,

    // onSubmit - function that will be called with the values of the form when the form is submitted
    onSubmit,

     // validationSchema - object that contains the validation rules for the form fields
    validationSchema
  })

  
 
  
  return (
    <View>
      <TextInput 
        placeholder="Username"
        style={[styles.textInput, formik.touched.username && formik.errors.username && styles.errorInput]}
        onChangeText={formik.handleChange('username')} // handleChange - function that will update the form state when the value of the input changes
        value={formik.values.username} // values - object that contains the current values of the form fields
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorText}>
          {formik.errors.username}
        </Text> 
      )}


      <TextInput 
        placeholder="Password"
        style={[styles.textInput, formik.touched.password && formik.errors.password && styles.errorInput]}
        secureTextEntry
        onChangeText={formik.handleChange('password')} // handleChange - function that will update the form state when the value of the input changes
        value={formik.values.password} // values - object that contains the current values of the form fields
      />

      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>
          {formik.errors.password}
        </Text> 
      )}

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.text}>Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignIn