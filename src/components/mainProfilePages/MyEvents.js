import React from 'react';
import EventCard from "./EventCard";
import { EventContext } from '../context/EventContext'
import { useContext } from 'react'


const MyEvents = (props) => {
      
      const {events}  = useContext(EventContext)
      
      console.log(events)
      
      if(events){
            return(
            <div>
                  <h1 className="heading titleH events">My Events</h1>
                  {events.map(item => { if(item.organizer_id == localStorage.getItem('id')){
                       return <EventCard 
                          getEvents={props.getEvents}
                          address={item.address}
                          userId={item.organizer_id}
                          date={item.date}
                          id={item.event_id}
                          city={item.city} 
                          description={item.description}
                          eventName={item.event_name}
                          state={item.state}
                          time={item.time}
                      />
                  }
                  })}
              </div>
          )
      } else {
          return (
            
            <div>
            
              <h3>Loading...</h3>
            
            </div>
      
          );
        }
  };
export default MyEvents