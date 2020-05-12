import React, { useState, useContext, useEffect } from 'react'
import { useAsync } from 'react-async'

import EventDetailModal from 'Components/EventDetailModal'

import { eventList } from './async'

export const Context = React.createContext({})

const Panel = ({data}) => {
  const { setEventModal, setEventData } = useContext(Context)
  const { title, date } = data

  return (
    <li
      className='lg:w-1/2 xl:w-1/3 cursor-pointer'
      onClick={() => {
        setEventData(data)
        setEventModal(true)
      }}
    >
      <a className='m-2 p-2 block cursor-pointer relative hover:text-gray-700'>
        <div className='w-full bg-gray-800 p-4 rounded-lg h-32 flex items-center'>
          <h1 className='text-3xl font-bold'>
            {title}
            <span className='text-base block text-gray-500 font-normal'>
              {date}
            </span>
          </h1>
        </div>
      </a>
    </li>
  )
}

export default () => {
  const { data } = useAsync({promiseFn: eventList })
  const [eventModal, setEventModal] = useState(false)
  const [eventData , setEventData] = useState({})

  return (
    <Context.Provider value={{ setEventModal, setEventData, eventData }}>
      <div className='w-full'>
        <ul className='p-0 m-0 list-none flex flex-wrap'>
          {
            data &&
            data?.map((d, i) => {
              return (
                <Panel key={i} data={d} />
              )
            })
          }
        </ul>
      </div>
      <EventDetailModal
        open={eventModal}
        onClose={() => {
          setEventModal(prev => !prev)
          setEventData({})
        }}
      />
    </Context.Provider>
  )
}
