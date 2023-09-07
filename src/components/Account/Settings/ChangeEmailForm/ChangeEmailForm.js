import { Form } from 'semantic-ui-react';
import Styles from './ChangeEmailForm.module.scss';

const ChangeEmailForm = () => {
  return (
    <Form className={Styles.form}>
        <label>Cambiar correo electronico</label>
        <Form.Input name='email' placeholder='Nuevo Correo electronico' />
        <Form.Input name='repeatEmail' placeholder='Repite el Correo electronico' />
        <Form.Button type='submit'>
            Enviar
        </Form.Button>
    </Form>
  )
}

export default ChangeEmailForm