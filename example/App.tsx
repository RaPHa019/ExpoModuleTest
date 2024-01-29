import { StyleSheet, Text, View } from 'react-native';

import * as ToolBox from 'com.loggi.teste.toolbox';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ToolBox.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
