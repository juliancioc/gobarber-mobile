import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();
console.log('here')
const AppRoutes: React.FC = () => (
    <App.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#312E38'}
        }}
    >
        <App.Screen name="Dashboard" component={Dashboard} />
    </App.Navigator>
);

export default AppRoutes;
