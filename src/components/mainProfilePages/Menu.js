import React, { useState } from "react";
import Header from './Header';
import NavBar from './NavBar'
import NewEvent from './NewEvent'
import { EventList } from './EventList'
import MyEvents from './MyEvents'

import { Route } from "react-router-dom";
import { EventContext } from '../context/EventContext'
import { useContext } from 'react'





export const MenuApp = (props) => {

  // console.log(props)

  const {events}  = useContext(EventContext)

  const[newEvents, setNewEvents] = useState(events);

  const addNewEvent = e => {
    setNewEvents([...newEvents, e]);
  };

  return(
    <div>

      <div>
        <Header {...props} />

        <NavBar {...props} />
      </div>

      

      <div>
        <Route exact path='/menu' render={() => <NewEvent addNewEvent={addNewEvent} {...props} getEvents={props.getEvents} />} />
        
        <Route exact path='/menu/profile' render={() => <MyEvents {...events} getEvents={props.getEvents} />} />

        <Route exact path='/menu/events' render={() => <EventList {...events} getEvents={props.getEvents} />} /> 

      </div>
    
    </div>
  )
    
}


