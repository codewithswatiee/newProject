import React from 'react'
import { Link } from 'react-router-dom'

function EventsRoot() {
  return (
    <ul>
        <Link to='events'>All Events</Link>
        <Link to='new'>New Events</Link>
    </ul>
  )
}

export default EventsRoot
