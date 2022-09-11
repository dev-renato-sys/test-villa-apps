import {View, Text} from 'react-native';
import React from 'react';
import HomePage from './src/screens/HomePage';

import {DefaultTheme, IconButton, Provider, useTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventsPage from './src/screens/EventsPage';
import AddEventsPage from './src/screens/AddEventsPage';
import {EventsProvider} from './src/context/Events';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200EE',
    secondary: '#FFF',
    tertiary: '#a1b2c3',
    // text: '',
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  const {colors} = useTheme();
  const headerOptions = {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: '#FFF',
    // headerTitleStyle: {
    //   fontWeight: '',
    // },
  };

  return (
    <>
      <Provider theme={theme}>
        <EventsProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomePage}
                options={headerOptions}
              />
              <Stack.Screen
                name="Events"
                component={EventsPage}
                options={({navigation}) => ({
                  ...headerOptions,
                  headerRight: () => (
                    <IconButton
                      icon="calendar"
                      color={theme.colors.secondary}
                      onPress={() => {
                        navigation.navigate('New Event');
                      }}
                    />
                  ),
                })}
              />
              <Stack.Screen
                name="New Event"
                component={AddEventsPage}
                options={{
                  ...headerOptions,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </EventsProvider>
      </Provider>
    </>
  );
};

export default App;
