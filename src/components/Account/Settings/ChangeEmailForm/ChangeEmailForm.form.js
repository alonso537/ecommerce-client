import * as yup from 'yup';


export const initialValues = (email, repeatEmail) => {
    return {
        email: '',
        repeatEmail: ''
    }
}

export const validationSchema = () => {
    return yup.object({
        email: yup.string().email(true).required('Es necesario'),
        repeatEmail: yup.string().email(true).required(true).oneOf([yup.ref('email')], true),
    })
}