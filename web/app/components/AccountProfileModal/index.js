import React from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

const EventFormModal = props => {
  return (
    <Modal open size='tiny' {...props}>
      <Modal.Header>
        Account Information
      </Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Username</label>
            <Form.Input />
          </Form.Field>
          <Form.Field>
            <label>email</label>
            <Form.Input />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Form.Input />
          </Form.Field>
          <Form.Field>
            <label>Re-Password</label>
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
