import React, { useState, useEffect } from "react";
import {axiosAuth} from './components/axios/axiosAuth'

import SignUp from './components/loginInfo/SignUp'
import Login from './components/loginInfo/Login'
import Links from './components/loginInfo/Links'
import { MenuApp } from "./components/mainProfilePages/Menu";

import { Route, Redirect} from "react-router-dom";
import { EventContext, UserContext } from './components/context/EventContext'

import './App.css';






function App() {

  const [events, setEvents] = useState([])

  const [users, setUsers] = useState([])

  // console.log(events)
  const getEvents = () => {
    axiosAuth().get("https://potluckplanner-be.herokuapp.com/events")
      .then(res => {
        // console.log(res.data)
        setEvents(res.data)
      })
      .catch(error => console.log(error.response))
  } 

 useEffect(() => {
    getEvents()
    }, [])

    useEffect(() => {
      axiosAuth().get("https://potluckplanner-be.herokuapp.com/users")
        .then(res => {
          // console.log(res.data)
          setUsers(res.data)
        })
        .catch(error => console.log(error.response))
      }, [])




  return (
    <div className="App">

      <EventContext.Provider value={{events}}>
       <UserContext.Provider value={{users}}>

        <Route exact path='/' component={Links} />

          <Route exact path="/users/register" component={SignUp} />

          <Route exact path="/users/login" component={Login} />

          <Route exact path="/menu" render={(props) => {
              const token = localStorage.getItem("token");
              if (!token) {
                return <Redirect to="/" />;
              }
                return  <MenuApp {...props} getEvents={getEvents} />; 
              }} 
          />

          <Route exact path="/menu/profile" render={props => {
              const token = localStorage.getItem("token");
              if (!token) {
                return <Redirect to="/" />;
              }
                return <MenuApp {...props} getEvents={getEvents} />;
              }} 
          />

          <Route exact path="/menu/events" render={props => {
              const token = localStorage.getItem("token");
              if (!token) {
                return <Redirect to="/" />;
              }
                return <MenuApp {...props} getEvents={getEvents} />;
              }} 
          />


        </UserContext.Provider>
      </EventContext.Provider>
    </div>
  );
}

export default App;
