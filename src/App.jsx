import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ProfileCard from './Profilecard';
import GridView from './GridView';
import Todo from './Todo';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

const profile = {
  name: "Gowtham",
  department: "AIDS",
  year: 2,
  mobile: 9345568897,
  address: "xxxx",
  profileImage: reactLogo,
};

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/todo" element={<Todo />} /> */}
        <Route path="/profile" element={<ProfileCard profile={profile}/>} />
        <Route path="/gridview" element={<GridView />} />
        
          <Route
          path="/todo"
          element={
            <Provider store={store}>
              <Todo/>
            </Provider>
          }> 
          </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;