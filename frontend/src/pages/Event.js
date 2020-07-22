import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
// import imgTemplate from '../assets/template-image3.jpg'
// import eventImage from '../assets/event1.jpg'
import imgTemplate from '../assets/demo-template.jpg'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Event.css'
import htmlToImage from 'html-to-image';
import Header from '../components/Header/Header';
import waveFooter from '../assets/wavesPositive.svg'

const FontColor = {
  White: 'white',
  Black: 'black',
  Blue: 'blue',
  Yellow: 'yellow',
  Green: 'green',
  Red: 'red'
}

// TODO: Pull in event info and set and update image name
// TODO: Replace inline styles with stylesheet

export default function Event() { 
  const [templateText, setTemplateText] = useState('Edit Text')
  const [downloadReady, setDownloadReady] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  const [fontColor, setFontColor] = useState(FontColor.White)
  const eventName = 'Test Event 1'

  useEffect(() => {
    document.title = 'SharingCraft - Event'
  }, [])

  const handleTemplateText = e => {
    setTemplateText(e.target.value)
  }

  const handleImgSave = () => {
    setDownloadReady(true)
    htmlToImage.toJpeg(document.getElementById('template-img'), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = `${eventName} Image.jpeg`;
        link.href = dataUrl;
        link.click();
        setDownloadReady(false)
      });
  }

  const handleFontColor = e => {
    setFontColor(e.target.value)
  }

  const handleSignUp = () => {
    setSuccessModal(true)
    // TODO: post to endpoint to sign user up for event
  }

  const handleClose = () => {
    setSuccessModal(false)
  }

  return (
  <>
  <Header />
  <div style={{display: 'flex'}}>
  <div style={{flex: '50%', padding: '20px'}}>
  <h1>Event: {eventName}</h1>
  {/* TODO: add img */}
  {/* <img src={eventImage} /> */}
  <p>
    <b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend ante vel leo iaculis, molestie accumsan lectus sodales. Donec ut consectetur nunc, at ornare erat. Aenean eleifend tellus et convallis convallis. Vivamus convallis, tortor eget feugiat fermentum, velit ante fringilla elit, et faucibus urna felis ac eros. Nulla nunc leo, tristique sit amet nibh in, dapibus porttitor nibh. Curabitur placerat, odio id auctor venenatis,
  </p>
  <Button onClick={handleSignUp}>Sign Up</Button>
  </div>
  <div>
  <h2 style={{textAlign: 'center'}}>Create and Share</h2>
    <div className="template-container" id="template-img">
    {/* <h2>{eventName}</h2> */}
    <img src={imgTemplate} />
    <p className={downloadReady ? `text-${fontColor}` : `template-text-${fontColor}`}>{templateText}</p>
    </div>
    <div style={{padding: '0 20px'}}> 
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="template-text-input">Enter Text Here</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label="Enter Text Here"
        aria-describedby="template-text-input"
        onChange={handleTemplateText}
        value={templateText}
      />
    </InputGroup>

    <Form.Group controlId="fontColorSelect">
      <Form.Label>Choose Font Color</Form.Label>
      <Form.Control as="select" onChange={handleFontColor}>
        <option value={FontColor.White}>White</option>
        <option value={FontColor.Blue}>Blue</option>
        <option value={FontColor.Black}>Black</option>
        <option value={FontColor.Red}>Red</option>
        <option value={FontColor.Yellow}>Yellow</option>
        <option value={FontColor.Green}>Green</option>
      </Form.Control>
    </Form.Group>
    <Button onClick={handleImgSave}>Save</Button>
    {/* TODO: Share button */}
    <Button disabled style={{marginLeft: '25px'}} variant="secondary">Share</Button>
    </div>
  </div>
  </div>
  {
    <Modal show={successModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>🎉 Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>Successfully Signed Up!</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  }
  <img src={waveFooter}/>
  </>
  )
}
