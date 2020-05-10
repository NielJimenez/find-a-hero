import React from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

const EventFormModal = props => {
  return (
    <Modal open size='tiny' {...props}>
      <Modal.Header>
        Add / Create Event
      </Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Event Name</label>
            <Form.Input />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <Form.Input />
          </Form.Field>
          <Form.Field>
            <label>Event Description</label>
            <Form.Input />
          </Form.Field>
          <Form.Field>
            <label>Event Location</label>
            <Form.Input />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button primary>
          Submit
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default EventFormModal
