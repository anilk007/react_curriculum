// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/counter/counterSlice';
import todoReducer from './components/todos/todoSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer
  },
});


export default store;
