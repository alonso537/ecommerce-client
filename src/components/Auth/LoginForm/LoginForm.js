import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { Form } from 'semantic-ui-react'
import { initialValues, validationSchema } from './LoginForm.Form'
import { Auth } from '@/api/auth'
import { useAuth } from '@/hooks/userAuth'


const AuthCtrl = new Auth()

const LoginForm = () => {

  const {login} = useAuth()
  
  const router = useRouter()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: async (formData) => {
      try {
        const response = await AuthCtrl.login(formData)
        login(response.jwt)
        router.push('/')
      } catch (error) {
        console.log(error);
      }
    }
  })


  return (
    <Form
      onSubmit={formik.handleSubmit}
    >
        <Form.Input name='identifier' type='text' placeholder='Correo o usuario'
          error={formik.errors.identifier}
          onChange={formik.handleChange}
          value={formik.values.identifier}
        />
        <Form.Input name='password' type='password' placeholder='Contraseña'
          error={formik.errors.password}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      
      {/* <Form.Group widths="equal">
        <Form.Input name='name' type='text' placeholder='Nombre y apellido' />
        <Form.Input name='password' type='password' placeholder='Contraseña' />
      </Form.Group> */}

      <Form.Button
        type='submit'
        fluid
        loading={formik.isSubmitting}
      >
        
        Entrar</Form.Button>

    </Form>
  )
}

export default LoginForm