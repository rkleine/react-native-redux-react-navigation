import { 
  createSwitchNavigator, 
  createStackNavigator, 
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation'

import Loading from './Loading/Loading'
import Auth from './Auth/Auth'
import Home from './App'
import Example from './Example/Example'

const HomeStack = {
  navigationOptions: {
    drawerLabel: 'Home Drawer label',
  },
  screen: createStackNavigator({ Home }),
}

const ExampleStack = {
  navigationOptions: {
    drawerLabel: 'Example Drawer label',
  },
  screen: createStackNavigator({ Example })
}

const AppStack = createDrawerNavigator({ 
  HomeStack,
  ExampleStack
})

const AuthStack = createStackNavigator({ Auth })

const AppNavigator = 
  createAppContainer(
    createSwitchNavigator(
      {
        Loading,
        AppStack,
        AuthStack
      },
      {
        initialRouteName: 'Loading',
      }
    )
  )

export default AppNavigator