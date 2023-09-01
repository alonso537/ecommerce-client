import React from 'react'
import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './RegisterForm.Form';
import {Auth} from '@/api/auth'
import { useRouter } from 'next/router';




const AuthCrtl = new Auth()

const RegisterForm = () => {

  const router = useRouter()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: async (formData) => {
      // console.log(formData)
      try {
        await  AuthCrtl.register(formData)
        router.push('/join/sign-in')
      } catch (error) {
        console.log(error);
      }
    }
  })


  return (
    <Form 
      onSubmit={formik.handleSubmit}
    >
      <Form.Group widths="equal">
        <Form.Input name='email' type='text' placeholder='Email' 
          onChange={formik.handleChange}
          error={formik.errors.email}
          value={formik.values.email}
        />
        <Form.Input name='username' type='text' placeholder='nombre de usuario'
          onChange={formik.handleChange}
          error={formik.errors.username}
          value={formik.values.username}
        />
      </Form.Group>
      <Form.Group widths="equal">

        <Form.Input name='name' type='text' placeholder='Nombre y apellido'
          onChange={formik.handleChange}
          error={formik.errors.name}
          value={formik.values.name}
        />
        <Form.Input name='password' type='password' placeholder='Contraseña'
          onChange={formik.handleChange}
          error={formik.errors.password}
          value={formik.values.password}
        />
      </Form.Group>

      <Form.Button fluid  type='submit' loading={formik.isSubmitting}>Registrarse</Form.Button>
    </Form>
  )
}

export default RegisterForm