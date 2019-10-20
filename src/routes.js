import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/Login';
import Home from './pages/Home';
import LastBuys from './pages/LastBuys';
import News from './pages/News';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const BottomNavigator = createBottomTabNavigator({
  Home,
  LastBuys,
  News,
});

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      BottomNavigator,
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    },
  ),
);

export default Routes;
