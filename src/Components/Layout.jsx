import { createTheme } from '@mui/system'
import React, { useState, useReducer, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import Header from './Header'
import { Provider } from 'react-redux';
import store from '../../store';
// import { Dispatch } from '../Reducers/dispatch'


// const initialState = {count: 0};
function helper(array,data) {
  const index = array.indexOf(data);
if (index > -1) { 
  array.splice(index, 1); 
}
return array;
}

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state,action.data];
    case 'remove':
      return  helper(state,action.data);
    default:
      throw new Error();
  }
}

function Layout() {
  
  const theme=createTheme({
    palette:{

      mode:"light",
    }
  });
  // const [state, dispatch] = useReducer(reducer, []);
  return (
    <>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <Header ></Header>
    <main>
     
       <Outlet></Outlet>
      
    </main>
    </ThemeProvider>
    </Provider>
    
    </>
  )
}

export default Layout