import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Maps from './screens/Maps';
import Info from './screens/Infos';
import About from './screens/Sobre';
import Lixo from './screens/Lixo';
import CadastrarCategoria from './screens/CadastrarCategoria';
import EditarCategoria from './screens/EditarCategoria';
import CadastrarEcoponto from './screens/CadastrarEcoponto';
import EditarEcoponto from './screens/EditarEcoponto';
import CriarMarker from './screens/CriarMarker';
import EditarMarker from './screens/EditarMarker';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

const MapsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Maps" component={Maps} />
      <Stack.Screen name="CadastrarMarker" component={CriarMarker} />
      <Stack.Screen name="EditarMarker" component={EditarMarker} />
      <Stack.Screen name="CadastrarCategoria" component={CadastrarCategoria} />
      <Stack.Screen name="EditarCategoria" component={EditarCategoria} />
      <Stack.Screen name="Lixo" component={Lixo} />
      <Stack.Screen name="CadastrarEcoponto" component={CadastrarEcoponto} />
      <Stack.Screen name="EditarEcoponto" component={EditarEcoponto} />
      <Stack.Screen name="info" component={Info} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="MapsNavigator" component={MapsNavigator} options={{ headerShown: false, title: 'Maps' }} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}





