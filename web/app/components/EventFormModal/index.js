import React, { useEffect } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import { Field, Form as FinalForm } from 'react-final-form'
import { useAsync } from 'react-async'

import { addEvent } from './async'

const EventFormModal = props => {
  const { run } = useAsync({deferFn: addEvent })

  const onSubmit = val => {
    run(val)
    props.onClose()
  }

  return (
    <Modal open size='tiny' {...props}>
      <Modal.Header>
        Add / Create Event
      </Modal.Header>
      <FinalForm onSubmit={onSubmit}>
      {
        ({handleSubmit, form}) => (
          <>
            <Modal.Content>
              <Form onSubmit={handleSubmit}>
                <Form.Field>
                  <label>Title</label>
                  <Field
                    component='input'
                    name='title'
                  />
                </Form.Field>
                <Form.Field>
                  <label>Event Date</label>
                  <Field
                    component='input'
                    name='date'
                    type='date'
                  />
                </Form.Field>
                <Form.Field>
                  <label>Event Description</label>
                  <Field
                    component='input'
                    name='description'
                  />
                </Form.Field>
                <Form.Field>
                  <label>Event Location</label>
                  <Field
                    component='input'
                    name='location'
                  />
                </Form.Field>
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button primary onClick={form.submit}>
                Submit
              </Button>
            </Modal.Actions>
          </>
        )
      }
      </FinalForm>
    </Modal>
  )
}

export default EventFormModal
