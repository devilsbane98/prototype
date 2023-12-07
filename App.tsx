import * as React from 'react';

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
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="AnalysisFailed"
          component={AnalysisFailed}
          options={{title: 'Analysis Failed'}}
        />
        <Stack.Screen
          name="AnalysisSuccess"
          component={AnalysisSuccess}
          options={{title: 'Analysis Succeeded'}}
        />
        <Stack.Screen
          name="DatabaseList"
          component={DatabaseList}
          options={{title: 'Database'}}
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
        <Stack.Screen name="Analysis" component={Analysis} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
