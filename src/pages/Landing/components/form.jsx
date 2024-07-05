import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

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
//     return (
//         <div>

//             <Formik
//                 initialValues={{ 
//                     eventName:props.data?.name || '', 
//                     startDate: props.data?.date || '',
//                     endDate: props.data?.date || '',
//                     price: props.data?.price || '',
//                     location: props.data?.location || '',
//                  }}
//                 //    validate={values => {
//                 //      const errors = {};
//                 //      if (!values.name) {
//                 //        errors.name = 'Required';
//                 //      }
//                 //      if(!values.date)
//                 //       {
//                 //        errors.date = 'Invalid email address';
//                 //      }
//                 //      return errors;
//                 //    }}
//                 onSubmit={(values, { setSubmitting }) => {
//                     setTimeout(() => {
//                         alert(JSON.stringify(values, null, 2));
//                         setSubmitting(false);
//                     }, 400);
//                 }}
//             >
//                 {({
//                     values,
//                     handleChange,
//                     handleBlur,
//                     handleSubmit,
//                     isSubmitting,
//                 }) => (
//                     <form onSubmit={handleSubmit} className='flex flex-col gap-y-10'>
//                         <div className='grid grid-cols-2 gap-10 w-full items-center justify-center'>

//                         <div className='flex flex-col gap-y-4'>
//                             <label className='font-semibold'>Event Name</label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.eventName}
//                                 required
//                                 className='border-2 px-4 py-2'
//                                 placeholder='Enter event name'
//                             />
//                         </div>
                       
//                         <div className='flex flex-col gap-y-4'>
//                             <label className='font-semibold'>Price</label>
//                             <input
//                                 type="number"
//                                 name="Price"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.price}
//                                 required
//                                 className='border-2 px-4 py-2'
//                                 placeholder='Cost of tickets'
//                             />
//                         </div>
//                         <div className='flex flex-col gap-y-4'>
//                             <label className='font-semibold'>Date</label>
//                             <input
//                                 type="date"
//                                 name="startDate"
//                                 onChange={(e) => handleChange(e.target.value)}
//                                 onBlur={handleBlur}
//                                 value={values.startDate}
//                                 required
//                                 className='border-2 px-4 py-2'
//                                 placeholder='Enter event date'
//                             />
//                         </div>
                       
//                         <div className='flex flex-col gap-y-4'>
//                             <label className='font-semibold'>Location</label>
//                             <input
//                                 type="location"
//                                 name="Location"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.location}
//                                 required
//                                 className='border-2 px-4 py-2'
//                                 placeholder='Location of event'
//                             />
//                         </div>
//                         <div className='flex flex-col gap-y-4'>
//                             <label className='font-semibold'>Flier</label>
//                             <input
//                                 type="file"
//                                 name="Flier"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.flier}
//                                 required
//                                 className='border-2 px-4 py-2'
//                                 placeholder='Location of event'
//                             />
//                         </div>
//                         </div>

                      
//                         <button type="submit" disabled={isSubmitting} className='bg-[#C2B931] w-full font-bold py-2'>
//                             Submit
//                         </button>
//                     </form>
//                 )}
//             </Formik>
//         </div>
//     )
// }

// export default Form

return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg mx-auto">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Create New Event
                </h2>
                
                <Formik
                    initialValues={{ name: '', date: '', price: '', startDate: '', endDate: '', location: '', flier: '' }}
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
                        <form onSubmit={handleSubmit} className='flex flex-col gap-y-6'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className='flex flex-col gap-y-2'>
                                    <label htmlFor="name" className='font-semibold text-gray-700'>Event Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        required
                                        className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500'
                                        placeholder='Enter event name'
                                    />
                                </div>
                                
                                <div className='flex flex-col gap-y-2'>
                                    <label htmlFor="price" className='font-semibold text-gray-700'>Price</label>
                                    <input
                                        type="number"
                                        name="price"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.price}
                                        required
                                        className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500'
                                        placeholder='Cost of tickets'
                                    />
                                </div>

                                <div className='flex flex-col gap-y-2'>
                                    <label htmlFor="startDate" className='font-semibold text-gray-700'>Start Date</label>
                                    <input
                                        type="date"
                                        name="startDate"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.startDate}
                                        required
                                        className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500'
                                    />
                                </div>

                                <div className='flex flex-col gap-y-2'>
                                    <label htmlFor="endDate" className='font-semibold text-gray-700'>End Date</label>
                                    <input
                                        type="date"
                                        name="endDate"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.endDate}
                                        required
                                        className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500'
                                    />
                                </div>

                                <div className='flex flex-col gap-y-2'>
                                    <label htmlFor="location" className='font-semibold text-gray-700'>Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.location}
                                        required
                                        className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500'
                                        placeholder='Location of event'
                                    />
                                </div>

                                <div className='flex flex-col gap-y-2'>
                                    <label htmlFor="flier" className='font-semibold text-gray-700'>Flier</label>
                                    <input
                                        type="file"
                                        name="flier"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.flier}
                                        required
                                        className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500'
                                    />
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting} 
                                className='bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg'
                            >
                                {isSubmitting ? 'Submitting...' : 'Create Event'}
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Form;