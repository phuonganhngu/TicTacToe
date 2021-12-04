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
          onPress={() => navigation.navigate('Local')}
          style={styles.button}
        >
          Local
        </Text>

        <Text
          onPress={() => navigation.navigate('Online')}
          style={styles.button}
        >
          Online
        </Text>

        <Text
          onPress={() => navigation.navigate('Bot')}
          style={styles.button}
        >
          Bot
        </Text>
      </View>
    </View>
  );
}


function OnlineScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Online Screen</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Local" component={LocalScreen} />
        <Stack.Screen name="Online" component={OnlineScreen} />
        <Stack.Screen name="Bot" component={BotScreen} />
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
