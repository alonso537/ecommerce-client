import * as Yup from 'yup'

export const initialValues = (password, repeatPassword) => {
    return {
        password: '',
        repeatPassword: ''
    }
}

export const validationSchema = () => {
    return Yup.object({
        password: Yup.string().required(true),
        repeatPassword: Yup.string().required(true).oneOf([Yup.ref('password')], true),
    })
}