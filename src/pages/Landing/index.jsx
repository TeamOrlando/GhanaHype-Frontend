import About from "./components/about"
import EventsCalendar from "./components/eventsCalendar"
import Hero from "./components/hero"
import UpcomingEvents from "./components/upcomingEvents"

const Index = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <UpcomingEvents/>
      <EventsCalendar/>
    </div>
  )
}

export default Index