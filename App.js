import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import MoreScreen from './screens/MoreScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
              return <Feather name={iconName} size={size} color={color} />;
            } else if (route.name === 'Profile') {
              iconName = 'user'; // Using Feather for Profile
              return <Feather name={iconName} size={size} color={color} />;
            } else if (route.name === 'Cart') {
              iconName = 'cart'; // Corrected icon name for Cart
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            } else if (route.name === 'More') {
              iconName = 'dots-horizontal'; // Corrected icon name for More
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Favorites') {
              iconName = 'favorite'; // Using Fontisto for Favorites
              return <Fontisto name={iconName} size={size} color={color} />;
            }

            return null; // Return null if no icon is defined
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
