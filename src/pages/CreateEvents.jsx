import Form from './Landing/components/form'

const CreateEvents = () => {
  return (
    <div className='flex flex-col px-16 py-10 items-center justify-center gap-y-14'>
      <h1 className='text-2xl font-bold '>Add New Event</h1>
      <Form />
    </div>
  )
}

export default CreateEvents