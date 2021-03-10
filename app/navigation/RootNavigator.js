import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icons from '../../assets/Icons';
import Icon from 'react-native-vector-icons/Ionicons'; 

// Import mock screens
import BooksList from '../screens/BookList';
import BookmarksList from '../screens/BookmarksList';

const Tab = createBottomTabNavigator();
const tabBarOptions = {
    showLabel: false,
    inactiveTintColor: '#2D3038',
    activeTintColor: '#FFFFFF',
    style: {
      height: '10%',
      backgroundColor: '#1E1B26'
    }
  };
  
const screenOptions = (route, color) => {
    let iconName;
  
    switch (route.name) {
      case 'BooksList':
        iconName = 'book';
        break;
      case 'BookmarksList':
        iconName = 'bookmarks';
        break;
      default:
        break;
    }
  
    return <Icon name={iconName} color={color} size={24} />;
  };
const RootNavigator = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='BooksList'
          tabBarOptions={tabBarOptions}
      
          //options={{tabBarLabel:'Home',tabBarIcon: ({color}) => (<MaterialCommunityIcons name="home" color={color} size={26}/>)}}
          screenOptions={({ route }) => ({
           tabBarIcon: ({ color }) => screenOptions(route, color)
          })}
        >
          <Tab.Screen name='BooksList' component={BooksList} />
          <Tab.Screen name='BookmarksList' component={BookmarksList} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
  
  export default RootNavigator;