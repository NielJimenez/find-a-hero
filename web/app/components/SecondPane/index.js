import React from 'react'

const PaneLink = ({children}) => {
  return (
    <li className='border-b border-sold border-blue-900 hover:border-none'>
      <span className='bg-gray-800 hover:bg-gray-900 cursor-pointer block py-2 px-3'>
        {children}
      </span>
    </li>
  )
}

const SecondPane = () => {
  return (
    <div className='h-screen flex-1'>
      
    </div>
  )
}

export default SecondPane
