import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

function App () {
  const [todo, setTodo] = useState([
    { text: "okay oe", key: 1},
    { text: "lorem asdf", key: 2},
    { text: "olarmsad oje", key: 3},
  ]);

  const pressHandle = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key);
    })
  };

  const submitHandler = (text) => {
    setTodo(prevTodo => {
      return [
          {text: text, key: Math.random()},
          ...prevTodo
      ]
    })
  };

  return (
    <View style={styles.container}>
      <Header/>
      
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todo}
            keyExtractor={item => item.key.toString()}
            renderItem={({item}) => (
              <TodoItem  item={item} pressHandle={pressHandle}/>
            )}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  list: {
    marginTop: 20,
  }
})

export default App;