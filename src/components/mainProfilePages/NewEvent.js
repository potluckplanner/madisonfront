import React, {useState} from "react";
import {axiosAuth} from '../axios/axiosAuth'



const NewEvent = (props) => {

  console.log(props)

  const[newEvent, setNewEvent] = useState(
    {
      event_name: "", 
      date: "", 
      time: "",
      address: "", 
      city: "", 
      state: "",
      description: ""
    }
  );
  
  const changeHandler = (event) => {
    // console.log(event.target.value);
    setNewEvent({...newEvent, [event.target.name]: event.target.value});
  };
  
  

  const submitForm = (event) => {
    // console.log(newEvent)
    event.preventDefault();

    axiosAuth().post(`https://potluckplanner-be.herokuapp.com/users/${localStorage.getItem('id')}/events`, newEvent)
      .then(res => props.history.push('/menu/events'))
      .catch(error => console.log(error));

    const newestEvent = {
      ...newEvent
    };
    props.addNewEvent(newestEvent);
    setNewEvent(    
    {
      event_name: "",
      date: "", 
      time: "",
      address: "", 
      city: "", 
      state: "",
      description: ""
    });
  };


  
  return (
<div>
    <form onSubmit = {submitForm}>

      <label>Event Name</label>
      <input 
        type="text" 
        name="event_name" 
        placeholder="Enter event name here:" 
        value={newEvent.event_name}
        onChange={changeHandler} 
      />

      <label>Event Date</label> 
      <input 
        type="date" 
        name="date" 
        value={newEvent.date}
        onChange={changeHandler} 
      />

      <label>Event Time</label> 
      <input 
        type="time" 
        name="time" 
        value={newEvent.time}
        onChange={changeHandler} 
      />

      <label>Event Address</label> 
      <input 
        type="address" 
        name="address" 
        placeholder="Enter event address here:" 
        value={newEvent.address}
        onChange={changeHandler} 
      />

      <label>Event City</label> 
      <input 
        type="city" 
        name="city" 
        placeholder="Enter event city here:" 
        value={newEvent.city}
        onChange={changeHandler} 
      />

      <label>Event State</label> 
      <input 
        type="state" 
        name="state" 
        placeholder="Enter event state here:" 
        value={newEvent.state}
        onChange={changeHandler} 
      />

      <label>Event Description</label> 
      <input 
        type="text" 
        name="description" 
        placeholder="Enter event description here:" 
        value={newEvent.description}
        onChange={changeHandler} 
      />

      <button type="submit">Submit</button>

    </form>

    
    </div>
  );
};

export default NewEvent;