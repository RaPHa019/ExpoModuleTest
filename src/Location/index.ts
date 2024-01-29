import * as Location from 'expo-location'

export const getLocation = async () => {
  const { status } = await Location.requestPermissionsAsync()
  if (status !== 'granted') {
    return 'Permission to access location was denied'
  }
  const location = await Location.getCurrentPositionAsync({})
  return location
}