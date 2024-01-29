import * as Camera from 'expo-camera'

export const getCameraPermissions = async () => {
  try {
    const { status } = await Camera.requestPermissionsAsync()
    return status
  } catch (error) {
    return error
  }
}