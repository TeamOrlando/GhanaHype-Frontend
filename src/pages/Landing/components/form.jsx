import { Formik } from 'formik';

const Form = () => {
    return (
        <div>

            <Formik
                initialValues={{ name: '', date: '' }}
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
                    <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-10'>
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
                        <div className='flex flex-col gap-y-4'>
                            <label className='font-semibold'>Date</label>
                            <input
                                type="date"
                                name="Date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.date}
                                required
                                className='border-2 px-4 py-2'
                                placeholder='Enter event date'
                            />
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            <label className='font-semibold'>Price</label>
                            <input
                                type="text"
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


                      
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Form