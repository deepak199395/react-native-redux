import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from './CartScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CartScreen" component={CartScreen} options={{ title: 'Cart' }} />
    </Stack.Navigator>
  );
};

export default AppStack;
