import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Event from '../components/Event/Event';
import homepageImage from '../assets/homepage-image.jpg'
import './Home.css'
import Button from 'react-bootstrap/Button';

export default function Home() {
  const [events, setEvents] = useState([])
 
  useEffect(() => {
    const getEvents = async () => {
     const res = await axios.get('/events')
     setEvents(res.data)
    }
    getEvents()
  }, [])

  return(
    <>
    <div className="homepage-container">
      <div>
        <h1>Match with Organizations</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend ante vel leo iaculis, molestie accumsan lectus sodales. Donec ut consectetur nunc, at ornare erat. Aenean eleifend tellus et convallis convallis. Vivamus convallis, tortor eget feugiat fermentum, velit ante fringilla elit, et faucibus urna felis ac eros. Nulla nunc leo, tristique sit amet nibh in, dapibus porttitor nibh. Curabitur placerat, odio id auctor venenatis,
        </p>
        <Button>Go</Button>
      </div>
      <div>
        <img src={homepageImage} />
      </div>
    </div>
    <h2>Events</h2>
    <div className="homepage-events">
    {
      events && 
      <>
        {events.map(event => {
          return <Event key={event.id} event={event}/>
        })}
      </>
    }
    </div>
    </>
  )
}
