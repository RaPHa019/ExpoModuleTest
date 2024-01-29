import auth from '@react-native-firebase/auth'

export const autenticate = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password)
    return response
  } catch (error) {
    return error
  }
}