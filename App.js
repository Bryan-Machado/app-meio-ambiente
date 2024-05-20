import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Maps from './screens/Maps';
import Info from './screens/Infos';
import About from './screens/Sobre';
import Lixo from './screens/Lixo';
import Home from './screens/Home';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator()

// const UserNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='ListUser' component={ListUserScreen} />
//       <Stack.Screen name="Cadastrar" component={Cadastrar} />
//       <Stack.Screen name="Editar" component={Editar} />
//     </Stack.Navigator>
//   )
// }

export default function App() {
  return (
    <NavigationContainer>

      {/* <UserNavigator /> */}

      <Tab.Navigator>
        <Tab.Screen name="Maps" component={Maps} />
        <Tab.Screen name="info" component={Info} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Lixo" component={Lixo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}





