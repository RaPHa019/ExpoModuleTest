import * as DeviceAuth from 'expo-local-authentication'

export const getDeviceAuth = async () => {
  try {
    const status = await DeviceAuth.authenticateAsync()
    return status
  } catch (error) {
    return error
  }
}