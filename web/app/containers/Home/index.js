import React, { useState, useContext } from 'react'

import EventDetailModal from 'Components/EventDetailModal'

const Context = React.createContext({})

const Panel = () => {
  const { setEventModal } = useContext(Context)
  return (
    <li
      className='lg:w-1/2 xl:w-1/3 cursor-pointer'
      onClick={() => setEventModal(true)}
    >
      <a className='m-2 p-2 block cursor-pointer relative hover:text-gray-700'>
        <div className='w-full bg-gray-800 p-4 rounded-lg h-32 flex items-center'>
          <h1 className='text-3xl font-bold'>
            This is the title of the post
            <span className='text-base block text-gray-500 font-normal'>
              Date time
            </span>
          </h1>
        </div>
      </a>
    </li>
  )
}

export default () => {
  const [eventModal, setEventModal] = useState(false)

  return (
    <Context.Provider value={{ setEventModal }}>
      <div className='w-full'>
        <ul className='p-0 m-0 list-none flex flex-wrap'>
          <Panel />
          <Panel />
          <Panel />
          <Panel />
          <Panel />
          <Panel />
          <Panel />
          <Panel />
        </ul>
      </div>
      <EventDetailModal
        open={eventModal}
        onClose={() => setEventModal(prev => !prev)}
      />
    </Context.Provider>
  )
}
