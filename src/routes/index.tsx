import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { NewBook } from '../screens/NewBook';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="NewBook" component={NewBook} />
    </Navigator>
  );
}
