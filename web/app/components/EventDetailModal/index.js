import React, { useContext } from 'react'
import { Button, Modal, Segment } from 'semantic-ui-react'

import { Context as HomeContext } from 'Containers/Home'


const EventDetailModal = props => {
  const { eventData } = useContext(HomeContext)
  return (
    <Modal open size='tiny' {...props}>
      <Modal.Header>
        {`${eventData?.title} (${eventData?.date})`}
      </Modal.Header>
      <Modal.Content>
        <div className='block'>
          <Segment>
            {eventData?.location}
          </Segment>
        </div>
        <div className='block mt-4 mx-2'>
          {eventData?.description}
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button secondary inverted onClick={props.onClose}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default EventDetailModal
