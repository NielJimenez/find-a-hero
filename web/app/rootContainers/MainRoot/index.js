import React, { useState } from 'react'
import { Switch } from 'react-router-dom'

import MainNav from 'Components/MainNav'
import SecondPane from 'Components/SecondPane'
import RouteWithSubroutes from 'Components/RouteWithSubRoutes'
import EventFormModal from 'Components/EventFormModal'
import AccountProfileModal from 'Components/AccountProfileModal'
import LoginModal from 'Components/LoginModal'

import Context from './context'

const SampleRoot = ({ routes, match }) => {
  const [eventFormModal, setEventFormModal] = useState(false)
  const [accountModal, setAccountModal] = useState(false)
  const [loginModal, setLoginModal] = useState(false)

  return (
    <Context.Provider
      value={{
        setLoginModal,
        setAccountModal,
        setEventFormModal
      }}
    >
      <div
        className='
          w-screen
          h-screen
          bg-gray-900
          flex
          text-white
      '
      >
        <MainNav />
        <div
          className='
              w-7/12
              border-solid
              border-r
              border-l
              border-gray-600
              h-screen
              overflow-y-auto
          '
        >
          <Switch>
            {
              (routes.map((r, i) => <RouteWithSubroutes key={i} {...r} />))
            }
          </Switch>
        </div>
        <SecondPane />
      </div>
      <EventFormModal
        open={eventFormModal}
        onClose={() => setEventFormModal(prev => !prev)}
      />
      <AccountProfileModal
        open={accountModal}
        onClose={() => setAccountModal(prev => !prev)}
      />
      <LoginModal
        open={loginModal}
        onClose={() => setLoginModal(prev => !prev)}
      />
    </Context.Provider>
  )
}

export default SampleRoot
