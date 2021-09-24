import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import 'react-native-gesture-handler'
import {store} from './src/redux/store'
import { Provider } from 'react-redux'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/screens/Screen_home'
import RepositoryScreen from './src/screens/screens/Screen_repository'
const Stack = createNativeStackNavigator()

function App() {
  return (
  <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="HOME" component={HomeScreen} />
              <Stack.Screen name="REPOSITORY" component={RepositoryScreen} options={({ route }) => ({ title: route.params.repository })}/>
          </Stack.Navigator>  
        </NavigationContainer>
    </Provider>    
  )
}

export default App