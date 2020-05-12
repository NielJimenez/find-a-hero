import React, { useEffect } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import { Form as FinalForm, Field} from 'react-final-form'
import { withRouter } from 'react-router-dom'
import { useAsync } from 'react-async'

import { authenticate } from './async'

const EventFormModal = props => {
  const { run , data } = useAsync({deferFn: authenticate })
  const onSubmit = val => {
    run(val)
  }

  useEffect(() => {
    if (data) {
      localStorage.setItem('user_id', data.user_id)
      window.location.href = '/'
    }
  }, [data])

  return (
    <Modal open size='tiny' {...props}>
      <Modal.Header>
        Account Information
      </Modal.Header>
      <FinalForm onSubmit={onSubmit}>
      {
        ({handleSubmit, form}) => (
          <>
          <Modal.Content>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label>Email</label>
                <Field
                  component='input'
                  type='email'
                  name='email'
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Field
                  component='input'
                  type='password'
                  name='password' 
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

export default withRouter(EventFormModal)
