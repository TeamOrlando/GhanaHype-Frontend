import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import EventCard from '../components/eventCard';

import Form from './Landing/components/form';
import K from '../constants';

const ManageEvents = () => {
  const [data, setData] = useState(K.EVENTS);
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    // Fetch events from your backend or local storage
    // For example:
    // fetchEvents().then(data => setEvents(data));
  }, []);

  const handleEditEvent = (event) => {
    setEditingEvent(event);
  };

  const handleDeleteEvent = (eventId) => {
    // Delete event logic
    setData(data.filter(event => event.id !== eventId));
  };

  return (
    <div className="p-40">
      <h1 className="text-2xl font-bold mb-4">Manage Events</h1>
      
      {/* List of events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(event => (
          <div key={event.id} className="relative">
            <EventCard data={event} />
            <div className="absolute top-2 right-2 flex gap-2">
              <button onClick={() => handleEditEvent(event)} className="bg-blue-500 text-white p-2 rounded">Edit</button>
              <button onClick={() => handleDeleteEvent(event.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit form */}
      {editingEvent && (
        <>
        <Form data={editingEvent}/>
        <Formik
          initialValues={editingEvent}
          onSubmit={(values, { setSubmitting }) => {
            // Update event logic
            setData(events.map(event => event.id === editingEvent.id ? values : event));
            setEditingEvent(null);
            setSubmitting(false);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className='flex flex-col gap-y-10 mt-8'>
              <h2 className="text-xl font-bold">Edit Event</h2>
              <div className='grid grid-cols-2 gap-10 w-full items-center justify-center'>
                {/* Include all your form fields here, similar to your Form component */}
                <div className='flex flex-col gap-y-4'>
                  <label className='font-semibold'>Event Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    required
                    className='border-2 px-4 py-2'
                    placeholder='Enter event name'
                  />
                </div>
                {/* Add other fields... */}
              </div>
              <div className="flex gap-4">
                <button type="submit" disabled={isSubmitting} className='bg-[#C2B931] font-bold py-2 px-4 rounded'>
                  Save Changes
                </button>
                <button type="button" onClick={() => setEditingEvent(null)} className='bg-gray-300 font-bold py-2 px-4 rounded'>
                  Cancel
                </button>
              </div>
            </form>
          )}
        </Formik>
        </>
        
      )}
    </div>
  );
};

export default ManageEvents;