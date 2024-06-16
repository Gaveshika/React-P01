import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div>
        <h1>HomePage</h1>
      <TopicBox event= "Carrier Fair!">
        <span>This is the descripton</span>
      </TopicBox>
      <TopicBox event= "MadHack 3.0!">
        <button>Register!</button>
      </TopicBox>
      <TopicBox event= "HackaThon 24!"/>
      <Content/>
      <Link to="/About">Go to the About Page</Link><br></br>
      <Link to="/Contact">Go to the Contact Page</Link>
    </div>
  )
}
