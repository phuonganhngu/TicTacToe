import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LocalScreen from './src/screens/LocalScreen';
import BotScreen from './src/screens/BotScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Text
          onPress={() => navigation.navigate('Start new game')}
          style={styles.button}
        >
          Start new game
        </Text>

        <Text
          onPress={() => navigation.navigate('Join game')}
          style={styles.button}
        >
          Join game
        </Text>

      </View>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Start new game" component={StartScreen} />
        <Stack.Screen name="Join game" component={JoinScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9bcdfa",
  },
  buttons: {
    padding: 100,
    flexDirection: "column",
  },
  button: {
    color: "white",
    margin: 20,
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: "#1c85e3",
    padding: 10,
    paddingHorizontal: 15,
  },
});

export default App;
