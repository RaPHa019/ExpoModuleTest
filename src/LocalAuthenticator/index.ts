import localAuthenticator from 'expo-local-authentication'

export const authenticate = async () => {
  try {
    await localAuthenticator.authenticateAsync()
  } catch (error) {
    return error
  }
}