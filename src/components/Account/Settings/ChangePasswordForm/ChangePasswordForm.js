import { Form } from 'semantic-ui-react'
import Style from './ChangePasswordForm.module.scss'
import { useFormik } from 'formik'
import { useAuth } from '@/hooks/userAuth'
import { User } from '@/api/user'
import { initialValues, validationSchema } from './ChangePasswordForm.Form'

const userCtrl = new User()

const ChangePasswordForm = () => {

    const {user, logout} = useAuth()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                // console.log(formValue);
                await userCtrl.updateMe(user?.id, {
                    password: formValue.password
                })
                formik.handleReset()
                logout()
            } catch (error) {
                console.log(error);
            }
        }
    })

  return (
    <Form className={Style.form}
        onSubmit={formik.handleSubmit}
    >
        <label>Cambiar Contraseña</label>
        <Form.Input 
            type='password'
            name='password'
            placeholder='Nueva contraseña'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
        />
        <Form.Input 
            type='password'
            name='repeatPassword'
            placeholder='Repetir Nueva contraseña'
            value={formik.values.repeatPassword}
            onChange={formik.handleChange}
            error={formik.errors.repeatPassword}
        />
        <Form.Button type='submit' loading={formik.isSubmitting} >
            Enviar
        </Form.Button>
    </Form>
  )
}

export default ChangePasswordForm