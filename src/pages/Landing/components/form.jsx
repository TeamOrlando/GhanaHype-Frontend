import { Formik } from 'formik';
import { useState } from 'react';

const Form = (props) => {
    console.log(props.data)
    const [event, setEvent] = useState(props.data)
    /**
     *  {
    id: "e01",
    name: "Ghana World Music",
    description: "",
    image: samini,
    location: "Fantasy Dome",
    price: 200,
    date: "December 22 2024",
    category: "Music",
    organizer: "Loretta",
  },*/ 
    return (
        <div>

            <Formik
                initialValues={{ 
                    eventName:props.data?.name || '', 
                    startDate: props.data?.date || '',
                    endDate: props.data?.date || '',
                    price: props.data?.price || '',
                    location: props.data?.location || '',
                 }}
                //    validate={values => {
                //      const errors = {};
                //      if (!values.name) {
                //        errors.name = 'Required';
                //      }
                //      if(!values.date)
                //       {
                //        errors.date = 'Invalid email address';
                //      }
                //      return errors;
                //    }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit} className='flex flex-col gap-y-10'>
                        <div className='grid grid-cols-2 gap-10 w-full items-center justify-center'>

                        <div className='flex flex-col gap-y-4'>
                            <label className='font-semibold'>Event Name</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.eventName}
                                required
                                className='border-2 px-4 py-2'
                                placeholder='Enter event name'
                            />
                        </div>
                       
                        <div className='flex flex-col gap-y-4'>
                            <label className='font-semibold'>Price</label>
                            <input
                                type="number"
                                name="Price"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                                required
                                className='border-2 px-4 py-2'
                                placeholder='Cost of tickets'
                            />
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            <label className='font-semibold'>Date</label>
                            <input
                                type="date"
                                name="startDate"
                                onChange={(e) => handleChange(e.target.value)}
                                onBlur={handleBlur}
                                value={values.startDate}
                                required
                                className='border-2 px-4 py-2'
                                placeholder='Enter event date'
                            />
                        </div>
                       
                        <div className='flex flex-col gap-y-4'>
                            <label className='font-semibold'>Location</label>
                            <input
                                type="location"
                                name="Location"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.location}
                                required
                                className='border-2 px-4 py-2'
                                placeholder='Location of event'
                            />
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            <label className='font-semibold'>Flier</label>
                            <input
                                type="file"
                                name="Flier"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.flier}
                                required
                                className='border-2 px-4 py-2'
                                placeholder='Location of event'
                            />
                        </div>
                        </div>

                      
                        <button type="submit" disabled={isSubmitting} className='bg-[#C2B931] w-full font-bold py-2'>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Form