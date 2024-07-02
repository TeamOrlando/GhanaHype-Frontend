import React from 'react'
import EventsCalendar from '../Landing/components/eventsCalendar'
import UpcomingEvents from '../Landing/components/upcomingEvents'

const Events = () => {
    return (
        <div>
            <EventsCalendar />
            <UpcomingEvents />
        </div>
    )
}

export default Events