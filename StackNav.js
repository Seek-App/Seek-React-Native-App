'use strict'
import React from 'react'
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation'
import { Main, AR } from './components'
import { View } from 'react-native'

const Stack = {
  Main: {
    screen: Main,
    navigationOptions: {
      header: null,
    }
  },
  AR: {
    screen: AR,
    navigationOptions: {
      header: null,
    }
  }
}

let loggedIn = true

const DrawerUserRoutes = {
  Main: {
    screen: StackNavigator(Stack, {initialRouteName: 'Main'}),
    navigationOptions: {
      drawerLabel: 'Main',
      header: null,
    }
  },
  Profile: {
    screen: StackNavigator(Stack, {initialRouteName: 'Main'}),
    navigationOptions: {
      drawerLabel: 'Profile',
      header: null,
    }
  },
  HighScores: {
    screen: StackNavigator(Stack, {initialRouteName: 'Main'}),
    navigationOptions: {
      drawerLabel: 'HighScores',
      header: null,
    }
  },
}

const DrawerGuestRoutes = {
  Login: {
    screen: StackNavigator(Stack, {initialRouteName: 'Main'}),
    navigationOptions: {
      drawerLabel: 'Login',
      header: null
    }
  },
  Signup: {
    screen: StackNavigator(Stack, {initialRouteName: 'Main'}),
    navigationOptions: {
      drawerLabel: 'Signup',
      header: null
    }
  },
}

const styles = {
  header: {
    justifyContent: 'center',
    backgroundColor: '#706FD3',
    height: 240,
    alignItems: 'center',
  },
  picture: {
    backgroundColor: '#2C2C54',
    textAlign: 'center',
    height: 150,
    width: 150,
    borderRadius: 100
  },
}

const DrawerContent = (props) => (
  <View>
    <View style={styles.header}>
      <View style={styles.picture}>
      </View>
    </View>
    <DrawerItems {...props} />
  </View>
)

let DrawerRoutes = loggedIn ? DrawerUserRoutes : DrawerGuestRoutes

const RootNavigator = StackNavigator({
  Drawer: {
    name: 'Drawer',
    screen: DrawerNavigator(DrawerRoutes, {contentComponent: DrawerContent}),
  },
  ...Stack
},
  {
    headerMode: 'none'
  }
)

export default RootNavigator