import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: Math.floor(Math.random() * 1000),
    item: "Go to the Library",
    completed: false,
  },
  {
    id: Math.floor(Math.random() * 1000),
    item: "Have Lunch",
    completed: false,
  },
  {
    id: Math.floor(Math.random() * 1000),
    item: "Meet friends",
    completed: false,
  },
];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //update todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } =
  addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
