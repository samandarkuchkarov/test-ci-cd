/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './screens/home';
import {navigator} from './navigator';
import {Screen} from './screens/screen';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const basicScreenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer ref={navigator}>
        <Stack.Navigator screenOptions={basicScreenOptions}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="screen" component={Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
