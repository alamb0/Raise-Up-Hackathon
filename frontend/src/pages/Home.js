import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Event from '../components/Event/Event';
import homepageImage from '../assets/homepage-image.jpg'
import './Home.css'
import Button from 'react-bootstrap/Button';
import wave from '../assets/wavesNegative.svg'
import waveFooter from '../assets/wavesPositive.svg'
import Header from '../components/Header/Header';

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
    <Header />
    <div className="homepage-container">
      <div style={{padding: '20px'}}>
        <h1>Match with Organizations</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend ante vel leo iaculis, molestie accumsan lectus sodales. Donec ut consectetur nunc, at ornare erat. Aenean eleifend tellus et convallis convallis. Vivamus convallis, tortor eget feugiat fermentum, velit ante fringilla elit, et faucibus urna felis ac eros. Nulla nunc leo, tristique sit amet nibh in, dapibus porttitor nibh. Curabitur placerat, odio id auctor venenatis,
        </p>
        <Button>Go</Button>
      </div>
      <div>
        <img src={homepageImage} style={{borderRadius: '2%', border: 'solid 2px white'}} />
      </div>
    </div>
    <img className="homepage-wave" src={wave}/>
    <h2 style={{padding: '20px', marginTop: '-20px'}}>Events</h2>
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
    <img src={waveFooter}/>
    </>
  )
}
