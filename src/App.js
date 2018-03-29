/**
 *
 * Created by chuans
 * Date: 2018/3/19
 */
import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { Header } from './components/common'

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Tech Stack"></Header>
      </View>
    </Provider>
  )
}

export default App
