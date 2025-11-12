import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import EventDetail from '@/components/EventDetail'

export default function EventPage({ params }) {
  return (
    <div className="bg-white">
      <Header enableColorTransition={false} />
      <EventDetail eventId={params.eventId} />
      <Footer />
    </div>
  )
}
