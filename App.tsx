import * as React from 'react';

import {StartScreen} from './components/Start';
import {HomeScreen} from './components/Home';
import {AnalysisFailed} from './components/AnalysisFailed';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AnalysisSuccess} from './components/AnalysisSuccess';
import {DatabaseList} from './components/DatabaseList';
import {Loader} from './components/Loader';
import {Stimuli} from './components/Stimuli';
import {Analysis} from './components/Analysis';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Start" component={StartScreen} />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home', headerShown: false}}
        />
        <Stack.Screen
          name="DatabaseList"
          component={DatabaseList}
          options={{title: 'Database', headerShown: false}}
        />
        <Stack.Screen
          name="AnalysisFailed"
          component={AnalysisFailed}
          options={{title: 'Analysis Failed'}}
        />
        <Stack.Screen
          name="AnalysisSuccess"
          component={AnalysisSuccess}
          options={{title: 'Analysis Succeeded', headerShown: false}}
        />

        <Stack.Screen
          name="Loader"
          component={Loader}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Stimuli"
          component={Stimuli}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Analysis"
          component={Analysis}
          options={{
            headerShown: false,
            title: 'Analysis',
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerBackButtonMenuEnabled: true,
            headerBackTitleVisible: true,
            headerTintColor: '#151940',
            headerBackTitleStyle: {
              fontFamily: 'Inter',

              fontSize: 25,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
