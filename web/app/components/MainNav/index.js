import React, { useContext } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faBookmark, faUserCircle } from '@fortawesome/free-regular-svg-icons'

import RootContext from 'RootContainers/MainRoot/context'

const Link = ({ children, onClick }) => {
  return (
    <li className='font-light my-10 cursor-pointer' onClick={onClick}>
      <a className='hover:text-gray-300 hover:font-bold relative'>{children}</a>
    </li>
  )
}

const MainNav = ({ history }) => {
  const isLogin = localStorage.getItem('user_id')

  const {
    setEventFormModal,
    setAccountModal,
    setLoginModal
  } = useContext(RootContext)
  return (
    <div
      className='
        h-screen
        w-2/12
    '
    >
      <ul className='list-none text-2xl px-3 py-4'>
        <li className='font-bold text-center text-4xl mb-10'>
          Find A Hero
        </li>
        <Link onClick={() => history.push('/')}>
          <FontAwesomeIcon className='absolute' icon={faHome} />
          <span className='ml-10'>Home</span>
        </Link>
        {
          isLogin &&
          <>
            <Link onClick={() => history.push('/events')}>
              <FontAwesomeIcon className='absolute' icon={faCalendar} />
              <span className='ml-10'>Events</span>
            </Link>
            <Link onClick={() => setAccountModal(true)}>
              <FontAwesomeIcon className='absolute' icon={faUserCircle} />
              <span className='ml-10'>
                Account Profile
              </span>
            </Link>
            <li className='font-light my-10 cursor-pointer'>
              <Button
                fluid
                icon
                labelPosition='left'
                onClick={() => setEventFormModal(true)}
                primary
              >
                <Icon name='plus' />
                Add Event
              </Button>
            </li>
            <li
              className='font-light my-10 cursor-pointer text-center text-lg'
              onClick={() => {
                localStorage.clear()
                window.location.href = '/'
              }}
            >
              <div>
                Logout
              </div>
            </li>
          </>
        }
        {
          !isLogin &&
          <>
            <li className='font-light my-10 cursor-pointer'>
              <Button
                fluid
                icon
                labelPosition='left'
                onClick={() => setLoginModal(true)}
                primary
              >
                <Icon name='user' />
                Login
              </Button>
            </li>
            <li className='font-light my-10 cursor-pointer text-center text-lg'>
              <div>
                Sign-up
              </div>
            </li>
          </>
        }
      </ul>
    </div>
  )
}

export default withRouter(MainNav)
