import { Form } from 'semantic-ui-react'
import Style from './ChangePasswordForm.module.scss'

const ChangePasswordForm = () => {
  return (
    <Form className={Style.form}>
        <label>Cambiar Contraseña</label>
        <Form.Input 
            type='password'
            name='password'
            placeholder='Nueva contraseña'
        />
        <Form.Input 
            type='password'
            name='repeatPassword'
            placeholder='Repetir Nueva contraseña'
        />
        <Form.Button type='submit' >
            Enviar
        </Form.Button>
    </Form>
  )
}

export default ChangePasswordForm