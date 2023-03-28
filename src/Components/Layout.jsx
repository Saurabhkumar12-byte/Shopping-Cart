import { createTheme } from '@mui/system'
import React, { useState, useReducer, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import Header from './Header'
import { Dispatch } from '../Reducers/Dispatch';


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
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <>
    <ThemeProvider theme={theme}>
    <Header cartArr={state}></Header>
    <main>
      <Dispatch.Provider value={dispatch}>
       <Outlet></Outlet>
      </Dispatch.Provider>
    </main>
    </ThemeProvider>
    
    </>
  )
}

export default Layout