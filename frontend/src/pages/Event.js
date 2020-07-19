import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import imgTemplate from '../assets/demo-template.jpg'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import './Event.css'
import htmlToImage from 'html-to-image';
import Header from '../components/Header/Header';

const FontColor = {
  White: 'white'
}

// TODO: Pull in event info and set and update image name

export default function Event() { 
  const [templateText, setTemplateText] = useState('Edit Text Here')
  const [downloadReady, setDownloadReady] = useState(false)
  const [fontColor, setFontColor] = useState(FontColor.White)

  const handleTemplateText = e => {
    setTemplateText(e.target.value)
  }

  const handleImgSave = () => {
    setDownloadReady(true)
    htmlToImage.toJpeg(document.getElementById('template-img'), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'Event-Image.jpeg';
        link.href = dataUrl;
        link.click();
        setDownloadReady(false)
      });
  }

  const handleFontColor = e => {
    setFontColor(e.target.value)
  }

  return (
  <>
  <Header />
  <div style={{display: 'flex'}}>
  <div>
  <h1>Event: </h1>
  <p>Description: </p>
    {/* img */}
  <Button>Sign Up</Button>
  </div>
  <div>
    <div className="template-container" id="template-img">
    <img src={imgTemplate} />
    <p className={downloadReady ? `text-${fontColor}` : `template-text-${fontColor}`}>{templateText}</p>
    </div>
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

    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Choose Font Color</Form.Label>
    <Form.Control as="select" onChange={handleFontColor}>
      <option value='white'>White</option>
      <option value='black'>Black</option>
      <option value='red'>Red</option>
      <option value='yellow'>Yellow</option>
      <option value='green'>Green</option>
    </Form.Control>
  </Form.Group>
    <Button onClick={handleImgSave}>Save</Button>
    {/* Share button */}
    <Button disabled>Share</Button>
  </div>
  </div>
  </>
  )
}