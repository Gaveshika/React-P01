import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
  //const event = "Join us at the "
  //const venue = "2025 Carrier Fair!"
  return (
    <div>
      <div>
        <div className="topicbox">
            <span className='text'>Join us at the 2025 {props.event}</span>
            {props.children}
        </div>
      </div>
    </div>
  )
}
