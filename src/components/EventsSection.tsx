import EventCard from "./EventCard";

const EventsSection = () => {
  const events = [
    {
      title: "Study in UK: University Fair 2024",
      date: "May 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Grand Ballroom, Hotel Indonesia Kempinski Jakarta",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&q=80",
      registrationLink: "/event/study-in-uk-university-fair-2024"
    },
    {
      title: "Australia Education Expo",
      date: "June 1, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Pacific Place Mall, SCBD Jakarta",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80",
      registrationLink: "/event/australia-education-expo"
    },
    {
      title: "Canada University Application Workshop",
      date: "June 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Global Wings Education Center, Jakarta",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      registrationLink: "/event/canada-university-application-workshop"
    }
  ];

  return (
    <section id="events" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 gradient-text">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our educational events to learn more about studying abroad and meet university representatives directly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              image={event.image}
              registrationLink={event.registrationLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
