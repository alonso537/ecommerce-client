import React from 'react'
import { Form } from 'semantic-ui-react'

const RegisterForm = () => {
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input name='email' type='text' placeholder='Email' />
        <Form.Input name='username' type='text' placeholder='nombre de usuario' />
      </Form.Group>
      <Form.Group widths="equal">

        <Form.Input name='name' type='text' placeholder='Nombre y apellido' />
        <Form.Input name='password' type='password' placeholder='Contraseña' />
      </Form.Group>

      <Form.Button fluid  type='submit'>Registrarse</Form.Button>
    </Form>
  )
}

export default RegisterForm