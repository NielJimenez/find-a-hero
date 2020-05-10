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
      <ul className='list-none block px-3 py-4'>
        <li
          className='
            rounded-full
            border
            border-gray-600
            border-solid
          '>
            <div className='mx-3'>
            <input
              className='
                bg-transparent
                h-10
                outline-none
                px-2
                rounded-md
                w-full
              '
                placeholder='Search'
                type='text'
              />
            </div>
        </li>
        <li className='my-5'>
          <div>
            <ul className='list-none p-1 m-0 text-xl'>
              <li className='text-3xl font-bold border-b border-sold border-blue-900 rounded-t'>
                <span className='bg-gray-800 block py-4 px-3 rounded-t-lg'>
                  Search History
                </span>
              </li>
              <PaneLink>Search 1</PaneLink>
              <PaneLink>Search 2</PaneLink>
            </ul>
          </div>
        </li>
        <li className='my-5'>
          <div>
            <ul className='list-none p-1 m-0 text-xl'>
              <li className='text-3xl font-bold border-b border-sold border-blue-900 rounded-t'>
                <span className='bg-gray-800 block py-4 px-3 rounded-t-lg'>
                  Category
                </span>
              </li>
              <PaneLink>Search 1</PaneLink>
              <PaneLink>Search 2</PaneLink>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SecondPane
