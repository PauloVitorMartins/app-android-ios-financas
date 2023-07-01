import Home from './src/pages/Home';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {createStore} from 'redux';
import { Provider } from 'react-redux';
import ListReducer from './src/reducers/ListReducer';
import Login from './src/pages/Login';

export default function App() {
  const Stack = createStackNavigator();

  const Store = createStore(ListReducer);

  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home}/>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

