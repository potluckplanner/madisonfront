import React from 'react';
import {axiosAuth} from '../axios/axiosAuth'

const EventCard = (props) => {
      // console.log(props)

      return(
            <div className="eventcard">
                  <h2 className="heading">{props.eventName}</h2>
                  <p className="text">{props.address} {props.city} {props.state}</p>
                  <h3 className="heading">{props.date} </h3>
                  <p className="text">{props.time}</p>
                  <p><i>{props.description}</i></p>
                  <button className="eventbutton">sign up</button>
                  <button className="eventbutton" onClick={() => { if(props.userId == localStorage.getItem('id')){
                        return axiosAuth().delete(`https://potluckplanner-be.herokuapp.com/events/${props.id}`)
                              .then(res => props.getEvents())
                              .catch(error => console.log(error))
                  }}
                        
                  }>Delete</button>
            </div>
      )
}

export default EventCard

