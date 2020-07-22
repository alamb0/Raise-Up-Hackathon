import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Event from '../components/Event/Event';
import homepageImage from '../assets/undraw_polaroid.png'
// import homepageImage from '../assets/homepage-image.jpg'
import './Home.css'
import Button from 'react-bootstrap/Button';
import wave from '../assets/wavesNegative.svg'
import waveFooter from '../assets/wavesPositive.svg'
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';

export default function Home() {
  const [events, setEvents] = useState([])
 
  useEffect(() => {
    const getEvents = async () => {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        const resDev = await axios.get('/events')
        setEvents(resDev.data)
      } else {
        const res = await axios.get('https://i1wvgid8df.execute-api.us-east-1.amazonaws.com/dev/events', {
          headers: {
            'x-api-key': process.env.REACT_APP_AWS_API_KEY
          }
        })
        setEvents(res.data)
      }
    }
    getEvents()
  }, [])

  return(
    <>
    <Header />
    <div className="homepage-container">
      <div style={{padding: '20px'}}>
        <h1>Match with Organizations</h1>
        <h3>Find Organizations and get shareable content when volunteering</h3>
        <p>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend ante vel leo iaculis, molestie accumsan lectus sodales. Donec ut consectetur nunc, at ornare erat. Aenean eleifend tellus et convallis convallis. Vivamus convallis, tortor eget feugiat fermentum, velit ante fringilla elit, et faucibus urna felis ac eros. Nulla nunc leo, tristique sit amet nibh in, dapibus porttitor nibh. Curabitur placerat, odio id auctor venenatis, */}
        </p>
        <Link to="/user"><Button>Go</Button></Link>
      </div>
      <div style={{marginLeft: 'auto'}}>
        <img src={homepageImage} style={{borderRadius: '2%', border: 'solid 2px white', height: '450px'}} />
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
