import crashlytics from '@react-native-firebase/crashlytics'

export const crash = async () => {
  try {
    await crashlytics().crash()
  } catch (error) {
    return error
  }
}