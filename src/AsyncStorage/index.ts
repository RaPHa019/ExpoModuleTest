import async from '@react-native-async-storage/async-storage'

export const setItem = async (key: string, value: string) => {
  try {
    await async.setItem(key, value)
  } catch (error) {
    return error
  }
}