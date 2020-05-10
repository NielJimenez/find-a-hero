import React from 'react'
import { Button, Modal, Segment } from 'semantic-ui-react'

const EventDetailModal = props => {
  return (
    <Modal open size='tiny' {...props}>
      <Modal.Header>
        Title of the Event (Time)
      </Modal.Header>
      <Modal.Content>
        <div className='block'>
          <Segment>
            asda
          </Segment>
        </div>
        <div className='block mt-4 mx-2'>
          description
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
