import React from 'react'
import { Form } from 'semantic-ui-react'

const LoginForm = () => {
  return (
    <Form>
        <Form.Input name='identifier' type='text' placeholder='Correo o usuario' />
        <Form.Input name='password' type='password' placeholder='Contraseña' />
      
      {/* <Form.Group widths="equal">
        <Form.Input name='name' type='text' placeholder='Nombre y apellido' />
        <Form.Input name='password' type='password' placeholder='Contraseña' />
      </Form.Group> */}

      <Form.Button
        type='submit'
        fluid
      >
        
        Entrar</Form.Button>

    </Form>
  )
}

export default LoginForm